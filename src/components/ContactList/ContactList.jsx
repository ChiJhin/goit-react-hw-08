import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { filtData } from "../../redux/contact/selector";

const ContactList = () => {
  const dataContact = useSelector(filtData); 
  return (
    <ul className={css.list}>
      {dataContact.length > 0  ? (
        dataContact.map((data) => {
          return <li key={data.id} className={css.listItem}><Contact  dataContact={data} /></li>;
        })
      ) : (
        <li>Your Phone Book is empty. Add a new contacts!</li>
      )}
    </ul>
  );
};

export default ContactList