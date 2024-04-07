import css from './feedback.module.css';
import { Component } from 'react';


export class FeedbackOptions extends Component {

    render() {

        const { onLeaveFeedback,  options} = this.props;

        return (
            <div className={css.buttons}>
                {Object.keys(options).map((key) => (
                    <button key={key} className={css.button} data-type={key} onClick={onLeaveFeedback} >{key}</button>
                ))}
            </div>
        );
    }
}