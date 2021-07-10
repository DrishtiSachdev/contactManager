
import React,{useRef} from "react";
import {Link} from 'react-router-dom';
import ContactCard from "./contactCard";

const ContactList = (props) => {
  console.log(props);
  const inputEl=useRef("");
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  const getSearchTerm=()=>{
    props.searchKeyword(inputEl.current.value);
  }

  return (
    <div className="main">
      <h2>Contact List
      <Link to="/add">
        <button className="ui right floated blue button ">Add Contact </button>
      </Link>
     
      </h2>
      <div className="ui search">
      <div className="ui icon input">
      <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
      <i className="search icon"></i>
      </div>
       </div>
    <div className="ui celled list">{renderContactList.length>0?renderContactList:"No contacts available"}</div>

    </div>
    
  );
};

export default ContactList;