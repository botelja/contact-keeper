import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterd, filterdContacts, clearFilter } = contactContext;

  useEffect(() => {
    if (filterd === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterdContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <div className="form-group" style={{ width: '24rem' }}>
        <input
          type="text"
          ref={text}
          className="form-control"
          placeholder="Filter contacts..."
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ContactFilter;
