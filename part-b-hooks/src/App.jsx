import { useState, useEffect, useContext } from "react";
import { API } from "./config.js";
import useFetch from "./hooks/useFetch.js";
import { ThemeContext } from "./context/ThemeContext.jsx";
import Clock from "./components/Clock.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ExpenseList from "./components/ExpenseList.jsx";

function App() {
  const { data: expenses, loading, error, add, remove } = useFetch(API);
  const { theme, toggle } = useContext(ThemeContext);
  const [filter, setFilter] = useState("Tất cả");
  const [showClock, setShowClock] = useState(true);

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  // Tiêu đề tab hiển thị tổng chi
  useEffect(() => {
    document.title = `Tổng chi: ${total.toLocaleString()}đ`;
  }, [total]);

  const visible = filter === "Tất cả" ? expenses : expenses.filter((e) => e.type === filter);
  const visibleTotal = visible.reduce((sum, e) => sum + Number(e.amount), 0);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa khoản chi này?")) remove(id);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Sổ chi tiêu (Hooks)</h1>
        <div>
          {showClock && <Clock />}{" "}
          <button onClick={() => setShowClock(!showClock)}>{showClock ? "Ẩn đồng hồ" : "Hiện đồng hồ"}</button>{" "}
          <button onClick={toggle}>{theme === "light" ? "🌙 Tối" : "☀️ Sáng"}</button>
        </div>
      </div>

      <ExpenseForm onAdd={add} />
      <FilterBar filter={filter} onChange={setFilter} />

      {loading && <p>Đang tải...</p>}
      {error && <p className="error">Lỗi: {error}</p>}
      {!loading && <ExpenseList items={visible} onDelete={handleDelete} />}

      <p className="total">Tổng ({filter}): {visibleTotal.toLocaleString()}đ</p>
    </div>
  );
}

export default App;
