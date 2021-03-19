// import React, { useState } from "react";
// import styled from "@emotion/styled";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import SubmitButton from "./SubmitButton";
// import Input from "./Input";


// const ContactForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [submittedData, setSubmittedData] = React.useState({});

//   const { register, handleSubmit, formState: { isSubmitSuccessful }, errors } = useForm({ mode: "onBlur", defaultValues: { firstNameMessage: firstName, lastNameMessage: lastName, email: email, phone: phone, message: message } });
  
//   const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  
//   const onSubmit = (data, e) => {console.log(data, e);
//     setSubmittedData(data);
//   };
//   const onError = (errors, e) => console.log(errors, e);

//   React.useEffect(() => {
//     if (isSubmitSuccessful) {
//       setFirstName(''); 
//       setlasstName(''); 
//       setEmail(''); 
//       setPhone(''); 
//       setMessage(''); 
//     }
//   }, [isSubmitSuccessful, firstName, lastName, email, phone, message]);

//   const slideUpDelay2 = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: 0.4,
//         ease: "easeOut",
//         duration: 0.75,
//       },
//     },
//   };

//   return (
//     <ContactContainer>
//       <form action="#" onSubmit={handleSubmit(onSubmit, onError)}>
//         <div className="flex-container">
//           <div className="input-wrapper">
//             <label className="label" htmlFor="firstNameMessage">
//               First Name:
//             </label>
//             <Input
//               style={{ border: errors.firstNameMessage && "red 2px solid" }}
//               type="text"
//               name="firstNameMessage"
//               id="firstNameMessage"
//               ref={register({
//                 required: "First Name is Required",
//                 maxLength: 80,
//               })}
//               onChange={(e) => setFirstName(e.target.value)}
//               value={firstName}
//             />
//           </div>
//           {errors.firstNameMessage && (
//             <div className="errors-message">
//               {errors.firstNameMessage.message}
//             </div>
//           )}
//           <div className="input-wrapper">
//             <label className="label" htmlFor="lastNameMessage">
//               Last Name:
//             </label>
//             <Input
//               style={{ border: errors.lastNameMessage && "red 2px solid" }}
//               type="text"
//               name="lastNameMessage"
//               id="lastNameMessage"
//               ref={register({
//                 required: "Last Name is Required",
//                 maxLength: 100,
//               })}
//               onChange={(e) => setLastName(e.target.value)}
//               value={lastName}
//             />
//           </div>
//           {errors.lastNameMessage && (
//             <div className="errors-message">
//               {errors.lastNameMessage.message}
//             </div>
//           )}
//           <div className="input-wrapper">
//             <label className="label" htmlFor="email">
//               Email:
//             </label>
//             <Input
//               style={{ border: errors.email && "red 2px solid" }}
//               type="email"
//               name="email"
//               id="email"
//               ref={register({
//                 required: "Email is required",
//                 pattern: {
//                   value: EMAIL_REGEX,
//                   message: "Invalid email address",
//                 },
//               })}
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//           </div>
//           {errors.email && (
//             <div className="errors-message">{errors.email.message}</div>
//           )}
//           <div className="input-wrapper">
//             <label className="label" htmlFor="phone">
//               Phone:
//             </label>
//             <Input
//               style={{ border: errors.phone && "red 2px solid" }}
//               type="tel"
//               name="phone"
//               ref={register({ required: "Phone is Required", maxLength: 12 })}
//               onChange={(e) => setPhone(e.target.value)}
//               value={phone}
//             />
//           </div>
//           {errors.phone && (
//             <div className="errors-message">Phone is Required</div>
//           )}
//           <div className="input-wrapper message-input-wrapper">
//             <label className="label" htmlFor="Message">
//               Message:
//             </label>
//             <textarea
//               style={{ border: errors.Message && "red 2px solid" }}
//               name="Message"
//               ref={register({ required: "Message is Required" })}
//               onChange={(e) => setMessage(e.target.value)}
//               value={message}
//             />
//           </div>
//           {errors.Message && (
//             <div className="errors-message">{errors.Message.message}</div>
//           )}
//         </div>

//         <div className="button-container">
//           <SubmitButton type="submit">Send</SubmitButton>
//         </div>
//       </form>
//     </ContactContainer>
//   );
// };

// export default ContactForm;

// const ContactContainer = styled(motion.div)`
//     grid-area: form;
//     form{
//       display: flex;
//       flex-direction: column;
//       align-items: flex-end;
//     }
//     .flex-container {
//       width: 100%;
//       .input-wrapper {
//         width: 100%;
//         display: flex;
//         justify-content: space-between;
//         @media screen and (min-width: 768px){
//           justify-content: flex-end;
//         }
//         align-items: center;
//         margin-bottom: 1rem;
//         .label {
//           min-width: 9.428rem;
//           flex-basis: 9.428rem;
//           margin-right: 2rem;
//           word-wrap: nowrap;
//         }
//         input,
//         textarea {
//           flex-basis: 80%;
//           resize: vertical;
//           background-color: var(--lightGray);
//           border-radius: 5px;
//           border: #eaeaea 1px solid;
//           padding: 8px;
//           font-size: 18px;
//           line-height: 22px;
//           font-family: Raleway;
//         }
//         textarea{
//           max-height: 300px;
//           min-height: 180px;
//         }
//       }
//       .errors-message{
//         margin-left: 11.428rem;
//       }
//       .message-input-wrapper{
//         align-items: flex-start;
//       }
//     }
//     .button-container{
//       margin-top: 1rem;
//       width: 100%;
//       display: flex;
//       justify-content: flex-end;
//       .mailing-list-section-wrapper{
//         width: 70%;
//         display: flex;
//         justify-content: flex-end;
//         align-items: center;
//         .mailing-list-label{
//           padding-right: 1rem;
//         }
//         .input-wrapper{
//           margin-bottom: 1rem;
//         }
//       }
//     }
//   }
// `;



import React, { useState } from "react";
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
  const [messageSent, setMessageSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const netlify = useNetlifyForm({
    name: "ReCAPTCHA",
    action: "./thank-you",
    honeypotName: "bot-field",
    enableRecaptcha: true,
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server");
      context.formRef.current.reset();
    },
  });
  const onSubmit = (data) => {
    netlify.handleSubmit(null, data).then(() => {
      console.log("success");
      // setMessageSent(true);
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
React.useEffect(() => {
  if (messageSent) {
    setFirstName(''); 
    setLastName(''); 
    setEmail(''); 
    setPhone(''); 
    setMessage(''); 
  }
}, [messageSent, firstName, lastName, email, phone, message]);
  return (
    <ContactContainer
      initial="hidden"
      animate="visible"
      variants={slideUpDelay2}
      className={className}
    >
      <NetlifyFormProvider className="netlify-form-provider" {...netlify}>
        <NetlifyFormComponent
          onSubmit={handleSubmit(onSubmit)}
          id="form-component"
        >
          <Honeypot />
          
          {netlify.success && <p>Thanks for contacting us!</p>}
          {netlify.error && <p>Sorry, we could not reach servers.</p>}
          <div className="flex-container">
            <div className="input-wrapper">
              <label className="label" htmlFor="firstNameMessage">
                First Name:
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
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            {errors.firstNameMessage && (
              <div className="errors-message">
                {errors.firstNameMessage.message}
              </div>
            )}
            <div className="input-wrapper">
              <label className="label" htmlFor="lastNameMessage">
                Last Name:
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
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            {errors.lastNameMessage && (
              <div className="errors-message">
                {errors.lastNameMessage.message}
              </div>
            )}
            <div className="input-wrapper">
              <label className="label" htmlFor="messageEmail">
                Email:
              </label>
              <Input
                style={{ border: errors.email && "red 2px solid" }}
                type="email"
                name="messsageEmail"
                id="email"
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Invalid email address",
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            {errors.email && (
              <div className="errors-message">{errors.email.message}</div>
            )}
            <div className="input-wrapper">
              <label className="label" htmlFor="phone">
                Phone:
              </label>
              <Input
                style={{ border: errors.phone && "red 2px solid" }}
                type="tel"
                name="phone"
                ref={register({ required: "Phone is Required", maxLength: 12 })}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            {errors.phone && (
              <div className="errors-message">Phone is Required</div>
            )}
            <div className="input-wrapper message-input-wrapper">
              <label className="label" htmlFor="Message">
                Message:
              </label>
              <textarea
                style={{ border: errors.Message && "red 2px solid" }}
                name="Message"
                ref={register({ required: "Message is Required" })}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            {errors.Message && (
              <div className="errors-message">{errors.Message.message}</div>
            )}
          </div>

          <div className="button-container">
          <Recaptcha
            siteKey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
          />
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
        justify-content: space-between;
        @media screen and (min-width: 768px){
          justify-content: flex-end;
        }
        align-items: center;
        margin-bottom: 1rem;
        .label {
          min-width: 9.428rem;
          flex-basis: 9.428rem;
          margin-right: 2rem;
          word-wrap: nowrap;
        }
        input,
        textarea {
          flex-basis: 80%;
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
