import css from "./ContactForm.module.css";

import { nanoid } from "nanoid";

import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contact/operation";



const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .matches(/^\+?[0-9\s-]+$/, "Invalid phone number"),
});

const initialValues = {
  name: "",
  number: "",
};

const ConctactForm = () => {
  const idName = useId();
  const idNumber = useId();
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name.trim()
      .split(" ")
      .map((value) =>
        value[1]
          ? value[0].toUpperCase() + value.slice(1).toLowerCase()
          : value.toUpperCase()
      )
      .join(" "),
      number: values.number,
    };
    dispatch(addContacts(newContact)); 
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        
          <div className={css.formGroup}>
            <label htmlFor={idName}>Name</label>
            <Field
              type="text"
              name="name"
              id={idName}
              className={css.formFiled}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={idNumber}>Number</label>
            <Field
              type="text"
              name="number"
              id={idNumber}
              className={css.formFiled}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
        
          <div className={css.formBtn}>
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ConctactForm