import { useState, useRef } from "react";
import { TYPES } from "../data.js";

function ExpenseForm({ onAdd }) {
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [error, setError] = useState("");
  const contentRef = useRef(null); // để focus ô nhập

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    if (content.trim() === "") return setError("Nội dung không được để trống");
    if (Number(amount) <= 0) return setError("Số tiền phải lớn hơn 0");
    if (date === "") return setError("Vui lòng chọn ngày");

    onAdd({ content: content.trim(), amount: Number(amount), type, date });
    setContent("");
    setAmount("");
    setError("");
    contentRef.current.focus(); // focus lại sau khi thêm
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={contentRef} placeholder="Nội dung" value={content} onChange={(e) => setContent(e.target.value)} />
      <input type="number" placeholder="Số tiền" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        {TYPES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Thêm</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default ExpenseForm;
