import React, {useState} from "react";
import styled from "@emotion/styled";
import SubmitButton from "./SubmitButton";
import { motion } from "framer-motion";
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";

const ContactForm = ({ className }) => {

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name Required"),
    lastName: Yup.string().required("Last Name Required"),
    email: Yup.string().email("Invalid email").required("Email Required"),
    message: Yup.string().required("Message is Required"),
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  return (
    <ContactContainer>
      <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    }}
    validationSchema={schema}
    onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-form", ...values })
        })
        .then(() => {
          setSent(true)
          actions.resetForm()
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          actions.setSubmitting(false)
          setTimeout(()=>{
        setSent(false);
      }, 4000)
        if (error){
          setTimeout(()=>{
        setError(false);
      }, 4000)
        }
        })

      
    }}

  >
  {({errors, touched}) => (
    <Form className="flex-container" name="contact-form" data-netlify={true}>
    <div className="input-wrapper">
         <label className="label" htmlFor="firstame">First Name: </label>
         <Field  style={{ border: (errors.firstName &&  touched.firstName) &&"red 2px solid" }} name="firstName" />
       </div>
       <div className="errors-message">
       {errors.firstName && touched.firstName ? (
          <div className="error-message">{errors.firstName}</div>
        ) : null}
       </div>
       <div className="input-wrapper">
         <label className="label" htmlFor="lastName">Last Name: </label>
         <Field  style={{ border: (errors.lastName &&  touched.lastName) && "red 2px solid" }} name="lastName" />
       </div>
       <div className="errors-message">
       {errors.lastName && touched.lastName ? (
          <div className="error-message">{errors.lastName}</div>
        ) : null}
       </div>

       <div className="input-wrapper">
         <label className="label" htmlFor="email">Email: </label>
         <Field  style={{ border: (errors.email &&  touched.email) && "red 2px solid" }} name="email" />
       </div>
       <div className="errors-message">
       {errors.email && touched.email ? (
                    <div className="error-message">{errors.email}</div>
                  ) : null}
       </div>

       <div className="input-wrapper">
         <label className="label" htmlFor="phone">Phone: </label>
         <Field name="phone" />
       </div>

       <div className="input-wrapper">
         <label className="label" htmlFor="message">Message: </label>
         <Field  style={{ border: (errors.message &&  touched.message) && "red 2px solid" }} name="message" component="textarea"/>
       </div>
       <div className="errors-message">
       {errors.message && touched.message ? (
          <div className="error-message">{errors.message}</div>
        ) : null}
       </div>
    <div className="button-container">
      {sent && <p>Thanks for Contacting SAAA!</p>}
      {error && <p>There was an error submitting your message.</p>}
      <SubmitButton type="submit" disabled={sent}>Send</SubmitButton>
    </div>
    </Form>
  )}
  </Formik>
      
    </ContactContainer>
  );
};

export default ContactForm;

const ContactContainer = styled(motion.div)`
    grid-area: form;
    [name="react-hook-form"]{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .flex-container {
      width: 100%;
      .input-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media screen and (min-width: 450px){
          flex-direction: row;
        }
        @media screen and (min-width: 768px){
          justify-content: flex-end;
        }
        align-items: flex-start;
        margin-bottom: 1rem;
        .label {
          margin: .5rem 0;
          @media screen and (min-width: 450px){
            min-width: 9.428rem;
            flex-basis: 9.428rem;
            margin-right: 2rem;
            word-wrap: nowrap;
          }
          
        }
        input,
        textarea {
          width: 100%;
          @media screen and (min-width: 450px){
          flex-basis: 80%;
          }
          resize: vertical;
          background-color: var(--lightGray);
          border-radius: 5px;
          border: #eaeaea 1px solid;
          padding: 8px;
          font-size: 18px;
          line-height: 22px;
          font-family: Raleway;
        }
        input{
          height: 45px;
          background-color: var(--lightGray);
          border-radius: 5px;
          border: #eaeaea 1px solid;
          padding: 8px;
          font-size: 18px;
          font-family: Raleway;
        }
        textarea{
          max-height: 300px;
          min-height: 180px;
        }
      }
      .errors-message{
        margin-left: 11.428rem;
      }
      .message-input-wrapper{
        @media screen and (min-width: 450px){
          align-items: flex-start;
        }
      }
    }
    .button-container{
      margin-top: 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @media screen and (min-width:460px){
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      }
      p{
        margin-right: 3rem;
      }
      .mailing-list-section-wrapper{
        width: 70%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .mailing-list-label{
          padding-right: 1rem;
        }
        .input-wrapper{
          margin-bottom: 1rem;
        }
      }
      button{
        z-index: 2;
      }
    }
  }
`;