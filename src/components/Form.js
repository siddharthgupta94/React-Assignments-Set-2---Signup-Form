import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = ({ target }) => {
    const key = target.getAttribute("data-testid");
    setState((prev) => ({
      ...prev,
      [key]: target.value,
    }));
  };

  const isEmpty = () => {
    for (let key in state) {
      if (state[key] === "") {
        return true;
      }
    }
    return false;
  };

  const isAlphaNumeric = () => {
    let letters = /^[0-9a-zA-Z ]+$/;
    return letters.test(state.name);
  };

  const isValidEmail = () => {
    return state.email.includes("@");
  };

  const hasGender = () => {
    return state.gender !== null;
  };

  const isValidPhoneNumber = () => {
    let numbers = /^[0-9]+$/;
    return numbers.test(state.phoneNumber);
  };

  const isValidPassword = () => {
    return state.password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty()) {
      setMessage("All fields are mandatory");
    } else if (!isAlphaNumeric()) {
      setMessage("Name is not alphanumeric");
    } else if (!hasGender()) {
      setMessage("Please identify as male, female or others");
    } else if (!isValidEmail()) {
      setMessage("Email must contain @");
    } else if (!isValidPhoneNumber()) {
      setMessage("Phone Number must contain only numbers");
    } else if (!isValidPassword()) {
      setMessage("Password must contain atleast 6 letters");
    } else {
      setMessage(`Hello ${state.email.split("@")[0]}`);
    }
  };

  return (
    <div>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={state.name}
            data-testid="name"
            type="text"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            value={state.email}
            data-testid="email"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Gender: </label>
        <label>
          Male:
          <input
            value="male"
            data-testid="gender"
            name="gender"
            type="radio"
            onChange={handleChange}
          />
        </label>
        <label>
          Female:
          <input
            value="female"
            data-testid="gender"
            name="gender"
            type="radio"
            onChange={handleChange}
          />
        </label>
        <label>
          Other:
          <input
            value="other"
            data-testid="gender"
            name="gender"
            type="radio"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            value={state.phoneNumber}
            data-testid="phoneNumber"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={state.password}
            data-testid="password"
            type="password"
            onChange={handleChange}
          />
        </label>
        <br />
        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
