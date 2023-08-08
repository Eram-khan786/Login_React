import React, { useState } from 'react';
import styles from "./LoginForm.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword1, setShowPassword1] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password.length < 7) {
      alert('Password too short');
      return;
    } 
  
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let numberCount = 0;
    let specialCharCount = 0;
  
    for (const char of password) {
      if (char >= "A" && char <= "Z") {
        uppercaseCount += 1;
      } else if (char >= "a" && char <= "z") {
        lowercaseCount += 1;
      } else if (char >= "0" && char <= "9") {
        numberCount += 1;
      } else {
        specialCharCount += 1;
      }
    }
  
    if (uppercaseCount < 1 || lowercaseCount < 1 || numberCount < 1 || specialCharCount < 1) {
      alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }
  
    if (password !== confirm) {
      alert('Password and conform password do not match.Please Check Your Password once!');
      return;
    }
  
    console.log(name, email, password, confirm);
  };
  

  return (
    <>
    
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>🔏Login Form🔏</h1>
        <div className={styles.inputContainer}>
          <AccountCircleIcon className={styles.icon} />
          <input
            className={styles.inputBOX}
            type="text"
            placeholder='Enter your fullname...'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <EmailIcon className={styles.icon} />
          <input
            className={styles.inputBOX}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your Email...'
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <HttpsIcon className={styles.icon} />
          <input
            className={styles.inputBOX}
            type={showPassword ? "password" : "text"}
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password...'
            required
          />
          {showPassword ? (
            <VisibilityIcon className={styles.icon} onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <VisibilityOffIcon className={styles.icon} onClick={() => setShowPassword(!showPassword)} />
          )}
        </div>
        <div className={styles.inputContainer}>
          <HttpsIcon className={styles.icon} />
          <input
            className={styles.inputBOX}
            type={showPassword1 ? "password" : "text"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder='Confirm your password...'
            required
          />
          {showPassword1 ? (
            <VisibilityIcon className={styles.icon} onClick={() => setShowPassword1(!showPassword1)} />
          ) : (
            <VisibilityOffIcon className={styles.icon} onClick={() => setShowPassword1(!showPassword1)} />
          )}
        </div>
        <div className={styles.signUpbtn}>
          <button type="submit">Signup</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
