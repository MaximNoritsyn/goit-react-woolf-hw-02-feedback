import css from './section.module.css';
import { Component } from 'react';

export class Section extends Component {
  render() {

    const { title } = this.props;

    return (
      <section className={css.section}>
        <h2 className={css.title}>{title}</h2>
        {this.props.children}
      </section>
    );
  }
}