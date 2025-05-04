import { useDispatch, useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { filtData, selectIsLoading } from "../../redux/contact/selector";
import { useEffect } from "react";
import { getContacts } from "../../redux/contact/operation";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const dataContact = useSelector(filtData); 
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

   const isLoading = useSelector(selectIsLoading);
  return (
    <ul className={css.list}>
      {isLoading && <Loader />}
      {dataContact.length > 0 ? (
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