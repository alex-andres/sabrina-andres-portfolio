import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
// import addToMailchimp from "gatsby-plugin-mailchimp";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
  Recaptcha,
} from "react-netlify-forms";
import { motion } from "framer-motion";

const ContactForm = ({ className }) => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const netlify = useNetlifyForm({
    name: "react-hook-form",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server");
    },
  });
  const onSubmit = (data) => netlify.handleSubmit(null, data);
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  // const slideUpDelay2 = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       delay: .4,
  //       ease: "easeOut",
  //       duration: 0.75,
  //     },
  //   },
  // }
  return (
    <ContactContainer

      className={className}
    >
      <NetlifyFormProvider className="netlify-form-provider" {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
          <Honeypot />
          <Recaptcha siteKey={`${process.env.SITE_RECAPTCHA_KEY}`} invisible />
          {netlify.success && <p>Thanks for contacting us!</p>}
          {netlify.error && (
            <p>
              Sorry, we could not reach servers. Because it only works on
              Netlify, our GitHub demo does not provide a response.
            </p>
          )}
          <div className="flex-container">
            <div className="input-wrapper">
              <label className="label" htmlFor="firstName">
                First Name:
              </label>
              <Input
                style={{ border: errors.firstName && "red 2px solid" }}
                type="text"
                name="firstName"
                ref={register({
                  required: "First Name is Required",
                  maxLength: 80,
                })}
              />
            </div>
            <div className="input-wrapper">
              <label className="label" htmlFor="lastName">
                Last Name:
              </label>
              <Input
                style={{ border: errors.lastName && "red 2px solid" }}
                type="text"
                name="lastName"
                ref={register({
                  required: "Last Name is Required",
                  maxLength: 100,
                })}
              />
            </div>
            <div className="input-wrapper">
              <label className="label" htmlFor="email">
                Email:
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
            {errors.email && <div>{errors.email.message}</div>}
            <div className="input-wrapper">
              <label className="label" htmlFor="phone">
                Phone:
              </label>
              <Input
                type="tel"
                name="phone"
                ref={register({ required: "Phone is Required", maxLength: 12 })}
              />
            </div>
            {errors.phone && <span>Phone is Required</span>}
            <div className="input-wrapper message-input-wrapper">
              <label className="label" htmlFor="Message">
                Message:
              </label>
              <textarea
                name="Message"
                ref={register({ required: "Message is Required" })}
              />
            </div>
          </div>

          <div className="button-container">
            <div className="mailing-list-section-wrapper">
              {/* <div className="input-wrapper">
                <label className="mailing-list-label" for="sign-up">
                  Join SAAA mailing list?
                </label>
                <input
                  type="checkbox"
                  name="sign-up"
                  ref={register({ required: "Select one option" })}
                />
              </div> */}
              <SubmitButton type="submit">Send</SubmitButton>
            </div>
          </div>
        </NetlifyFormComponent>
      </NetlifyFormProvider>
    </ContactContainer>
  );
};

export default ContactForm;

const ContactContainer = styled(motion.div)`
    grid-area: form;
    .flex-container {
      display: flex;
      flex-direction: column;
      * + * {
        margin-top: 1rem;
      } 
      .input-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .label {
          width: 30%;
        }
        input,
        textarea {
          width: 70%;
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
      .message-input-wrapper{
        align-items: flex-start;
      }
    }
    .button-container{
      margin-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: flex-end;
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
    }
  }
`;
