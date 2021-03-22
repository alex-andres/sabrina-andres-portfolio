import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
  Recaptcha,
} from "react-netlify-forms";
import { motion } from "framer-motion";

const ContactForm = ({ className }) => {
  const { register, handleSubmit, reset, errors } = useForm({ mode: "onBlur" });
  const netlify = useNetlifyForm({
    name: "ReCAPTCHA",
    enableRecaptcha: "true" ,
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server");
      document.querySelector('#form-component').reset();
    },
  });
  const onSubmit = (data) => {
    netlify.handleSubmit(null, data).then(()=>{
      if(netlify.success){
        
      }
    });
  };
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  const slideUpDelay2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };
  return (
    <ContactContainer
      initial="hidden"
      animate="visible"
      variants={slideUpDelay2}
      className={className}
    >
      <NetlifyFormProvider className="netlify-form-provider" {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)} id="form-component">
          <Honeypot />
          
          {netlify.success && <p>Thanks for contacting us!</p>}
          {netlify.error && <p>Sorry, we could not reach servers.</p>}
          <div className="flex-container">
            <div className="input-wrapper">
              <label className="label" htmlFor="firstNameMessage">
                First Name
              </label>
              <Input
                style={{ border: errors.firstNameMessage && "red 2px solid" }}
                type="text"
                name="firstNameMessage"
                id="firstNameMessage"
                ref={register({
                  required: "First Name is Required",
                  maxLength: 80,
                })}
              />
            </div>
            {errors.firstNameMessage && <div className="errors-message">{errors.firstNameMessage.message}</div>}
            <div className="input-wrapper">
              <label className="label" htmlFor="lastNameMessage">
                Last Name
              </label>
              <Input
                style={{ border: errors.lastNameMessage && "red 2px solid" }}
                type="text"
                name="lastNameMessage"
                id="lastNameMessage"
                ref={register({
                  required: "Last Name is Required",
                  maxLength: 100,
                })}
              />
            </div>
            {errors.lastNameMessage && <div className="errors-message">{errors.lastNameMessage.message}</div>}
            <div className="input-wrapper">
              <label className="label" htmlFor="email">
                Email
              </label>
              <Input
                style={{ border: errors.email && "red 2px solid" }}
                type="email"
                name="email"
                id="email"
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && <div className="errors-message">{errors.email.message}</div>}
            <div className="input-wrapper">
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <Input
              style={{ border: errors.phone && "red 2px solid" }}
                type="tel"
                name="phone"
                ref={register({ required: "Phone is Required", maxLength: 12 })}
              />
            </div>
            {errors.phone && <div className="errors-message">Phone is Required</div>}
            <div className="input-wrapper message-input-wrapper">
              <label className="label" htmlFor="Message">
                Message
              </label>
              <textarea
                style={{ border: errors.Message && "red 2px solid" }}
                name="Message"
                ref={register({ required: "Message is Required" })}
              />
            </div>
            {errors.Message && <div className="errors-message">{errors.Message.message}</div>}
          </div>

          <div className="button-container">
            <Recaptcha siteKey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
            <SubmitButton type="submit">Send</SubmitButton>
          </div>
        </NetlifyFormComponent>
      </NetlifyFormProvider>
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
        align-items: center;
        margin-bottom: 1rem;
        .label {
          margin-bottom: .5rem;
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
      [style="width: 304px; height: 78px;"]{
        max-width: 22.7rem;
        overflow: hidden;
        @media screen and (min-width: 460px){
          max-width: 23.7rem;
          max-height: 5.8rem;
        }
      }
        .rc-anchor-pt{
          display: none;

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
        z-index: 10;
      }
    }
  }
`;