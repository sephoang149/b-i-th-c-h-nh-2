import { TYPES } from "../data.js";

function FilterBar({ filter, onChange }) {
  return (
    <div className="filter">
      {["Tất cả", ...TYPES].map((t) => (
        <button key={t} className={filter === t ? "active" : ""} onClick={() => onChange(t)}>
          {t}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
