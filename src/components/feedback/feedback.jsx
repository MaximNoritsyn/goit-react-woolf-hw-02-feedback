import css from './feedback.module.css';
import { Component } from 'react';



export class Feedback extends Component {

    render() {

        const { onLeaveFeedback,  options: { good, neutral, bad }} = this.props;

        return (
        <div className={css.feedback}>
            <h2 className={css.title}>Please leave feedback</h2>
            <div className={css.buttons}>
                <button type="button" className={css.button} onClick={onLeaveFeedback} data-type="good">
                    Good
                </button>
                <button type="button" className={css.button} onClick={onLeaveFeedback} data-type="neutral">
                    Neutral
                </button>
                <button type="button" className={css.button} onClick={onLeaveFeedback} data-type="bad">
                    Bad
                </button>
            </div>
            <h2 className={css.title}>Statistics</h2>
            <ul className={css.resultsList}>
                <li className={css.resultItem}>
                    Good: {good}
                </li>
                <li className={css.resultItem}>
                    Neutral: {neutral}
                </li>
                <li className={css.resultItem}>
                    Bad: {bad}
                </li>
            </ul>
        </div>
        );
    }
}