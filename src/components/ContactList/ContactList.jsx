import React from 'react'
import { nanoid } from 'nanoid';

const ContactList = ({contacts}) => {
  return (
      <ul>
          {contacts.map(contact => {
              return <li key={nanoid()}
              >{contact.name}: {contact.number}
                <button type="button">Delete</button>
              </li>
          })}
    </ul>
  )
}

export default ContactList