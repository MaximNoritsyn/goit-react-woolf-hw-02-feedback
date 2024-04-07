import css from './statistics.module.css';
import { Component } from 'react';

export class Statistics extends Component {

    render() {

        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
        <div className={css.statistics}>
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
                <li className={css.resultItem}>
                    Total: {total}
                </li>
                <li className={css.resultItem}>
                    Positive feedback: {positivePercentage}%
                </li>
            </ul>
        </div>
        );
    }
}