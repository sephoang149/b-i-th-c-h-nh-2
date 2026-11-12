import { Component } from "react";
import { SAMPLE } from "./data.js";
import Clock from "./components/Clock.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ExpenseList from "./components/ExpenseList.jsx";

class App extends Component {
  state = {
    expenses: SAMPLE,
    filter: "Tất cả",
    showClock: true,
  };

  // Tổng tất cả khoản chi
  getTotal() {
    return this.state.expenses.reduce((sum, e) => sum + e.amount, 0);
  }

  updateTitle() {
    document.title = `Tổng chi: ${this.getTotal().toLocaleString()}đ`;
  }

  componentDidMount() {
    this.updateTitle();
  }

  componentDidUpdate() {
    this.updateTitle(); // cập nhật tiêu đề tab mỗi khi state đổi
  }

  handleAdd = (item) => {
    this.setState((prev) => ({
      expenses: [...prev.expenses, { ...item, id: Date.now() }],
    }));
  };

  handleDelete = (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa khoản chi này?")) return;
    this.setState((prev) => ({
      expenses: prev.expenses.filter((e) => e.id !== id),
    }));
  };

  handleFilter = (type) => this.setState({ filter: type });

  toggleClock = () => this.setState((prev) => ({ showClock: !prev.showClock }));

  render() {
    const { expenses, filter, showClock } = this.state;
    const visible = filter === "Tất cả" ? expenses : expenses.filter((e) => e.type === filter);
    const visibleTotal = visible.reduce((sum, e) => sum + e.amount, 0);

    return (
      <div className="app">
        <div className="header">
          <h1>Sổ chi tiêu (Class)</h1>
          <div>
            {showClock && <Clock />}{" "}
            <button onClick={this.toggleClock}>{showClock ? "Ẩn đồng hồ" : "Hiện đồng hồ"}</button>
          </div>
        </div>

        <ExpenseForm onAdd={this.handleAdd} />
        <FilterBar filter={filter} onChange={this.handleFilter} />
        <ExpenseList items={visible} onDelete={this.handleDelete} />
        <p className="total">Tổng ({filter}): {visibleTotal.toLocaleString()}đ</p>
      </div>
    );
  }
}

export default App;
