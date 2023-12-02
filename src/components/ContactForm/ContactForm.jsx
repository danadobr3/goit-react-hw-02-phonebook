import { Component } from 'react';
import { nanoid } from 'nanoid';

import cssform from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  handleFormSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const { addContact } = this.props;

    addContact({ id: nanoid(), name, number });
    event.target.reset();
  };
    
     render() {
    return (
      <section className={cssform.form}>
        <h1 className={cssform.form__title}>Phonebook</h1>
        <form className={cssform.form__container} onSubmit={this.handleFormSubmit}>
          <label className={cssform.form__label}>Name</label>
          <input
            name="name"
            type="text"
            className={cssform.form__input}
            placeholder="Enter name"
            required
          />
          <label className={cssform.form__label}>Number</label>
          <input
            name="number"
            type="tel"
            className={cssform.form__input}
            placeholder="Enter phone number"
            required
          />
          <button className={cssform.form__btn} type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
