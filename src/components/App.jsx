import { Component } from 'react';
import { Section } from './section/section';
import { FeedbackOptions } from './feedback/feedback';
import { Statistics } from './statistics/statistics';

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

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  positivePercentage = () => {
    return Math.round(this.state.good / this.total() * 100) || 0;
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
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.total()} positivePercentage={this.positivePercentage()} />
        </Section>
      </div>
    );
  }
};
