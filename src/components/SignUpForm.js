import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import Button from "./SubmitButton";
import styled from "@emotion/styled";

class SignUpForm extends React.Component {
  state = { email: "", firstName: "", lastName: "", result: null , sent: false};
  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email, {
      FNAME: this.state.firstName,
      LNAME: this.state.lastName,
    });
    this.setState({ result: result });
    console.log('submitted email to list');
    this.setState({ email: "", firstName: "", lastName: "", result: null, sent: true }

    )
  };
  render() {
    if(this.state.sent === true){
      return (
        <StyledForm className="sign-up-form" onSubmit={this.handleSubmit}>
        <strong className="sign-up-heading">Thank you for Signing Up</strong>
        </StyledForm>
      )
    }
    else{
    return (
      <StyledForm className="sign-up-form" onSubmit={this.handleSubmit}>
        <strong className="sign-up-heading">Sign up for Email Updates</strong>
        <div className="sign-up-input first-name-input">
          <label htmlFor="newsletterFirstName">First Name</label>
          <input
            id="newsletterFirstName"
            type="text"
            onChange={this.handleFirstNameChange}
            value={this.state.firstName}
          />
        </div>
        <div className="sign-up-input last-name-input">
          <label htmlFor="newsletterLastName">Last Name</label>
          <input
            id="newsletterLastName"
            type="text"
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          />
        </div>
        <div className="sign-up-input email-input">
          <label htmlFor="newsletterEmail" className="sign-up-heading">
            Email
          </label>
          <input id="newsletterEmail" type="email" onChange={this.handleEmailChange} value={this.state.email}/>
        </div>
        <Button  className="sign-up-button">Sign Up</Button>
      </StyledForm>
    );
    }
  }
}

export default SignUpForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23.5rem;
  margin: 3rem 0;
  .sign-up-heading {
    margin-bottom: 1.6rem;
    grid-area: heading;
    color: var(--white);
  }
  .sign-up-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    label {
      margin: 0.8rem 0;
      line-height: 1.8rem;
      color: var(--white);
    }
    input {
      width: 100%;
      color: var(--black);
    }
  }
  .first-name-input {
    grid-area: firstName;
  }
  .last-name-input {
    grid-area: lastName;
  }

  .email-input {
    grid-area: emailAddress;
  }
  .sign-up-button {
    margin-top: 1.6rem;
    grid-area: submitButton;
    color: var(--black);
    background-color: var(--white);
    &:hover {
      background-color: var(--midGray);
      border: none;
    }
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "heading heading" "firstName lastName"
      "emailAddress emailAddress" "submitButton submitButton";
    .first-name-input,
    .last-name-input {
      width: 21.3rem;
    }
    .last-name-input {
      justify-self: end;
    }
    .sign-up-heading {
      justify-self: center;
    }
    .sign-up-button {
      justify-self: center;
    }
  }
`;
