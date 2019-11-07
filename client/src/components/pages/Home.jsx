import React, { useEffect, useContext } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
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
