import React from "react";
import { css } from "@emotion/core";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import styles from "./contactform.module.scss";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
  Recaptcha,
} from "react-netlify-forms";
import { motion } from "framer-motion";

const ContactForm = () => {
  const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
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
  const rightVariants = {
    hidden: {
      x: 800,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={rightVariants}>
      <NetlifyFormProvider
        css={css`
          grid-area: form;
        `}
        {...netlify}
      >
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
          <Honeypot />
          <Recaptcha siteKey={RECAPTCHA_KEY} invisible />
          {netlify.success && <p>Thanks for contacting us!</p>}
          {netlify.error && (
            <p>
              Sorry, we could not reach servers. Because it only works on
              Netlify, our GitHub demo does not provide a response.
            </p>
          )}
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <div className={styles.inputWrapper}>
              <label
                htmlFor="firstName"
                css={css`
                  width: 30%;
                `}
              >
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
            <div className={styles.inputWrapper}>
              <label htmlFor="lastName">Last Name</label>
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
            <div className={styles.inputWrapper}>
              <label htmlFor="email">Email:</label>
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
            <div className={styles.inputWrapper}>
              <label htmlFor="phone">Phone:</label>
              <Input
                type="tel"
                name="phone"
                ref={register({ required: "Phone is Required", maxLength: 12 })}
              />
            </div>
            {errors.phone && <span>Phone is Required</span>}
            <div className={styles.inputWrapper}>
              <label htmlFor="Message">Message:</label>
              <textarea
                css={css`
                  resize: vertical;
                  max-height: 300px;
                  min-height: 180px;
                  background-color: var(--lightGray);
                  border-radius: 5px;
                  border: #eaeaea 1px solid;
                  padding: 8px;
                  font-size: 18px;
                  line-height: 22px;
                  font-family: Raleway;
                `}
                name="Message"
                ref={register({ required: "Message is Required" })}
              />
            </div>
          </div>
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: flex-end;
            `}
          >
            <SubmitButton type="submit">Submit</SubmitButton>
          </div>
        </NetlifyFormComponent>
      </NetlifyFormProvider>
    </motion.div>
  );
};

export default ContactForm;
