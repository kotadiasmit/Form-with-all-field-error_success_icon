import classNames from 'classnames';
import { useState } from 'react';
import { AiFillCheckCircle, AiFillExclamationCircle } from 'react-icons/ai';
import './App.css';

// eslint-disable-next-line react/prop-types
const InputIcon = ({ valid }) =>
  valid ?
    <AiFillCheckCircle className="input-icon success" />
    :
    <AiFillExclamationCircle className="input-icon error" />

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkInputs();
  };

  const checkInputs = () => {
    const isUsernameValid = username !== '';
    const isEmailValid = email !== '' && isEmail(email);
    const isPasswordValid = password !== '';
    const isPassword2Valid = password2 !== '' && password === password2;
    setIsSubmitted(true)

    if (isUsernameValid && isEmailValid && isPasswordValid && isPassword2Valid) {
      // All inputs are valid, perform further actions
    }
  };

  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  return (
    <div className="container">
      <h2 className="heading">Create Account</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <div className="input-container">
            <input
              type="text"
              placeholder="coding_dev_"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={classNames({
                'input-field': true,
                success: username !== '',
                error: username === '',
              })}
            />
            {isSubmitted &&
              <InputIcon valid={username !== ''} />}
          </div>

          {username === '' && isSubmitted && <small>Username cannot be blank</small>}

        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <div className="input-container">
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classNames({
                'input-field': true,
                success: email !== '' && isEmail(email),
                error: email === '' || !isEmail(email),
              })}
            />
            {isSubmitted &&
              <InputIcon valid={email !== '' && isEmail(email)} />}
          </div>

          {email === '' && isSubmitted ? (
            <small>Email cannot be blank</small>
          ) : !isEmail(email) && isSubmitted ? (
            <small>Not a valid email</small>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classNames({
                'input-field': true,
                success: password !== '',
                error: password === '',
              })}
            />
            {isSubmitted &&
              <InputIcon valid={password !== ''} />}
          </div>
          {password === '' && isSubmitted && <small>Password cannot be blank</small>}
        </div>
        <div className="form-control">
          <label htmlFor="password2">Password check</label>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password two"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className={classNames({
                'input-field': true,
                success: password2 !== '' && password === password2,
                error: password2 === '' || password !== password2,
              })}
            />
            {isSubmitted &&
              <InputIcon valid={password2 !== '' && password === password2} />}
          </div>
          {password2 === '' && isSubmitted ? (
            <small>Password2 cannot be blank</small>
          ) : password !== password2 && isSubmitted ? (
            <small>Passwords do not match</small>
          ) : null}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
