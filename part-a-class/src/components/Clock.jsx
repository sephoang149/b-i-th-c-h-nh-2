import { Component } from "react";

class Clock extends Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer); // dừng đồng hồ khi bị ẩn
  }

  render() {
    return <span className="clock">{this.state.time.toLocaleTimeString()}</span>;
  }
}

export default Clock;
