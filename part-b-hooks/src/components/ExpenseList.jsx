function ExpenseList({ items, onDelete }) {
  if (items.length === 0) return <p className="muted">Chưa có khoản chi nào.</p>;
  return (
    <ul>
      {items.map((e) => (
        <li key={e.id}>
          <span>
            {e.date} – {e.content} <span className="muted">({e.type})</span>
          </span>
          <span>
            {Number(e.amount).toLocaleString()}đ <button onClick={() => onDelete(e.id)}>Xóa</button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
