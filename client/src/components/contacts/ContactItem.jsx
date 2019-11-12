import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(contact);
  };
  return (
    <div className="card my-2 bg-light" style={{ width: '24rem' }}>
      <div className="card-body">
        <h5 className="card-title">
          {name}{' '}
          <span
            style={{ float: 'right' }}
            className={
              'badge ' +
              (type === 'professional' ? 'badge-success' : 'badge-primary')
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h5>
        <ul className="list-unstyled">
          {email && (
            <li>
              <i className="far fa-envelope mr-2"></i>
              {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="fas fa-phone mr-2"></i>
              {phone}
            </li>
          )}
        </ul>
        <p className="my-2">
          <button className="btn btn-dark btn-sm mr-2" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};
export default ContactItem;
