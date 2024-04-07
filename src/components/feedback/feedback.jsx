import css from './feedback.module.css';
import { Component } from 'react';
import { Statistics } from 'components/statistics/statistics';


export class FeedbackOptions extends Component {

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
                <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} positivePercentage={Math.round(good / (good + neutral + bad) * 100) || 0} />
            </div>
        );
    }
}