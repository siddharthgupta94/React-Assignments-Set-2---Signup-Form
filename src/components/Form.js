import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    let key = target.getAttribute("data-testid");
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
    return (
      state.gender === "male" ||
      state.gender === "female" ||
      state.gender === "other"
    );
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
    setMessage(null);
    if (isEmpty()) {
      setError("All fields are mandatory");
    } else if (!isAlphaNumeric()) {
      setError("Name is not alphanumeric");
    } else if (!hasGender()) {
      setError("Please identify as male, female or others");
    } else if (!isValidEmail()) {
      setError("Email must contain @");
    } else if (!isValidPhoneNumber()) {
      setError("Phone Number must contain only numbers");
    } else if (!isValidPassword()) {
      setError("Password must contain atleast 6 letters");
    } else {
      setMessage(`Hello ${state.email.split("@")[0]}`);
      setError(null);
    }
  };

  return (
    <div>
      <form>
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
            type="text"
            value={state.email}
            data-testid="email"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            id="gender"
            data-testid="gender"
            value={state.gender}
            onChange={handleChange}
          >
            <option value="male" selected={state.gender === "male"}>
              Male
            </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
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
        <button data-testid="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <h1>{error && error}</h1>
      <h1>{message && message}</h1>
    </div>
  );
};

export default Form;
