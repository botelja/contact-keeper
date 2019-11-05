import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <div className="row my-4">
      <div className="col-8">
        <ContactForm />
      </div>
      <div className="col-4">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
