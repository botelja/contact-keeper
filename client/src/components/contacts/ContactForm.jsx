import React, { useState, useEffect, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [current]);

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form className="my-2" onSubmit={onSubmit}>
      <h2 className="text-center">
        {current !== null ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={phone}
          placeholder="Enter phone"
          onChange={onChange}
        />
      </div>
      <h5>Contact Type</h5>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="type"
          id="type"
          value="personal"
          checked={type === 'personal'}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Personal
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="type"
          id="type"
          value="professional"
          checked={type === 'professional'}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Professional
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-block my-2">
        {current !== null ? 'Update' : 'Submit'}
      </button>
      {current && (
        <button className="btn btn-light btn-block" onClick={clearAll}>
          Clear
        </button>
      )}
    </form>
  );
};

export default ContactForm;
