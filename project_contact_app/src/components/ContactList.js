import React from "react";
import { CardContact } from "./ContactCard";

const ContactList = (props) => {

    
    const deleteContact = (id) => {
        props.deleteContact(id);
    }

    const renderContacts = props.contacts.map( (contact) => {
        return (
            <CardContact contact={contact} deleteOne={deleteContact} updateOne={props.updateContact}/>  
        )
    })

    return(
        <div style={{margin:"30px"}}>
            <h3> Contact List</h3>
            {renderContacts}
        </div>
    )
}

export default ContactList;
