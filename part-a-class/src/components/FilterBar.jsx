import { Component } from "react";
import { TYPES } from "../data.js";

class FilterBar extends Component {
  render() {
    const { filter, onChange } = this.props;
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
}

export default FilterBar;
