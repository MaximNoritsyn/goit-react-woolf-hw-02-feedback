import css from './feedback.module.css';
import { Component } from 'react';



export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    fillFeedback = (e) => {
        const feedbackType = e.target.dataset.type;
        this.setState((prevState) => ({
            [feedbackType]: prevState[feedbackType] + 1
        }));
    }

    render() {
        return (
        <div className={css.feedback}>
            <h2 className={css.title}>Please leave feedback</h2>
            <div className={css.buttons}>
            <button type="button" className={css.button} onClick={this.fillFeedback} data-type="good">
                Good
            </button>
            <button type="button" className={css.button} onClick={this.fillFeedback} data-type="neutral">
                Neutral
            </button>
            <button type="button" className={css.button} onClick={this.fillFeedback} data-type="bad">
                Bad
            </button>
            </div>
            <h2 className={css.title}>Statistics</h2>
            <ul className={css.resultsList}>
                <li className={css.resultItem}>
                    Good: {this.state.good}
                </li>
                <li className={css.resultItem}>
                    Neutral: {this.state.neutral}
                </li>
                <li className={css.resultItem}>
                    Bad: {this.state.bad}
                </li>
            </ul>
        </div>
        );
    }
}