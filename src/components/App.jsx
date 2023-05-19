import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm prevContacts={contacts} onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <ContactList contacts={contacts} />
        </div>
      </>
    );
  }
}

// addContact = newContact => {
//   const newNumber = newContact.number.replace(/[^\d]/g, '');
//   this.setState(prevState => {
//     const checkNumber = prevState.contacts.find(
//       contact => contact.number.replace(/[^\d]/g, '') === newNumber
//     );
//     console.log(checkNumber);
//     if (checkNumber === undefined) {
//       return { contacts: [...prevState.contacts, newContact] };
//     } else {
//       Notiflix.Notify.info('hi');
//     }
//   });
// };
