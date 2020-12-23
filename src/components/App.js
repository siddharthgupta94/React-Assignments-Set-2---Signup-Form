import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleGender = (evt) => {
    setGender(evt.target.value);
  };

  const handlePhoneNumber = (evt) => {
    setPhoneNumber(evt.target.value);
  };

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const isNameValid = (nameValue) => {
    const regex = /^[a-zA-Z0-9 ]*$/;
    return regex.test(nameValue);
  };

  const isEmailValid = (emailValue) => {
    return emailValue.includes("@");
  };

  const isGenderValid = (genderValue) => {
    return (
      genderValue === "male" ||
      genderValue === "female" ||
      genderValue === "others"
    );
  };

  const isPhoneNumberValid = (phoneNumberVal) => {
    const regex = /^\d+$/;
    return regex.test(phoneNumberVal);
  };

  const isPasswordValid = (passwordVal) => {
    return passwordVal.length >= 6;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setWelcomeMessage("");
    if (!name || !email || !gender || !phoneNumber || !password) {
      setErrorMessage("All fields are mandatory");
      return;
    } else if (!isNameValid(name)) {
      setErrorMessage("Name is not alphanumeric");
      return;
    } else if (!isEmailValid(email)) {
      setErrorMessage("Email must contain @");
      return;
    } else if (!isGenderValid(gender)) {
      setErrorMessage("Please identify as male, female or others");
      return;
    } else if (!isPhoneNumberValid(phoneNumber)) {
      setErrorMessage("Phone Number must contain only numbers");
      return;
    } else if (!isPasswordValid(password)) {
      setErrorMessage("Password must contain atleast 6 letters");
      return;
    } else {
      setErrorMessage("");
    }

    const userName = email.split("@")[0];
    setWelcomeMessage(`Hello ${userName}`);
  };
  return (
    <div id="main">
      <div>
        <input
          placeholder="Enter Name"
          data-testid="name"
          value={name}
          onChange={handleName}
        />
      </div>

      <div>
        <input
          placeholder="Enter Email"
          data-testid="email"
          value={email}
          onChange={handleEmail}
        />
      </div>

      <div>
        <input
          placeholder="Enter Gender"
          data-testid="gender"
          value={gender}
          onChange={handleGender}
        />
      </div>

      <div>
        <input
          placeholder="Enter Phone Number"
          data-testid="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />
      </div>

      <div>
        <input
          placeholder="Enter Password"
          data-testid="password"
          value={password}
          onChange={handlePassword}
          type="password"
        />
      </div>

      <div>{errorMessage}</div>
      <div>
        <button data-testid="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>{welcomeMessage}</div>
    </div>
  );
};

export default App;
