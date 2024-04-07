import css from './feedback.module.css';
import { Component } from 'react';


export class FeedbackOptions extends Component {

    render() {

        const { onLeaveFeedback,  options} = this.props;

        return (
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
        );
    }
}