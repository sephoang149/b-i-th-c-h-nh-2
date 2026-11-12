import { Component } from "react";
import { TYPES } from "../data.js";

class ExpenseForm extends Component {
  state = {
    content: "",
    amount: "",
    type: TYPES[0],
    date: new Date().toISOString().slice(0, 10),
    error: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { content, amount, type, date } = this.state;

    // validate
    if (content.trim() === "") return this.setState({ error: "Nội dung không được để trống" });
    if (Number(amount) <= 0) return this.setState({ error: "Số tiền phải lớn hơn 0" });
    if (date === "") return this.setState({ error: "Vui lòng chọn ngày" });

    this.props.onAdd({ content: content.trim(), amount: Number(amount), type, date });
    this.setState({ content: "", amount: "", error: "" });
  };

  render() {
    const { content, amount, type, date, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="content" placeholder="Nội dung" value={content} onChange={this.handleChange} />
        <input name="amount" type="number" placeholder="Số tiền" value={amount} onChange={this.handleChange} />
        <select name="type" value={type} onChange={this.handleChange}>
          {TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <input name="date" type="date" value={date} onChange={this.handleChange} />
        <button type="submit">Thêm</button>
        {error && <p className="error">{error}</p>}
      </form>
    );
  }
}

export default ExpenseForm;
