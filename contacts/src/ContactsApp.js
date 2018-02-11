import React, { Component } from 'react';
import { render } from 'react-dom'; 
import PropTypes from 'prop-types';
import SearchBar from'./SearchBar';
import ContactList from './ContactList';

class ContactsApp extends Component {

    render() {
        return (
            <div>
                <SearchBar />
                <ContactList contacts={this.props.contacts} />
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;