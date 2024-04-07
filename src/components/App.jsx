import {Feedback} from './feedback/feedback';
import { Component } from 'react';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
      const feedbackType = e.target.dataset.type;
      this.setState((prevState) => ({
          [feedbackType]: prevState[feedbackType] + 1
      }));
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: '#f0f0f0'
        }}
      >
        <Feedback options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
      </div>
    );
  }
};
