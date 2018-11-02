import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  render() {
    return (
      <div className="clock">
        <h1>Clock</h1>
        <section className="clock-content">
          <div>
            <span>Time:</span>
            <span>{this.state.time.toTimeString().slice(0, 12)}</span>
          </div>
          <div>
            <span>Date:</span>
            <span>{this.state.time.toDateString()}</span>
          </div>
        </section>
      </div>
    );
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Clock;
