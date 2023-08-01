import React, { useState, useRef } from "react";

const Signup = () => {
  const [username, setusername] = useState("");
const [password, setpassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const passwordRef = useRef(null);
//const alphanumericRegex = /^[a-zA-Z0-9]+$/;

const checklogin = (e) => {
  e.preventDefault();
  if (username.trim() === "" && password === "") {setErrorMessage("Please fill in both username and password.");
  } else if (username.trim() === "") {
    setErrorMessage("Please fill in the username.");
  } /*else if (!username.match(alphanumericRegex)) {
    setErrorMessage("Username should contain only alphanumeric characters.");
  }*/ else if (password === "") {
    setErrorMessage("Please fill in the password.");
  } /*else if (password.includes(" ")) {
    setErrorMessage("Password should not contain spaces.");
  } else if (password.length > 15) {
    setErrorMessage("Password should not exceed 15 characters.");
  } */else if (username === "admin" && password === "1111") {
    setErrorMessage("Login successful.");
    setTimeout(() => {
      setErrorMessage("");
      setusername("");
      setpassword("");
    }, 5000);}
    
    else if (username === "admin") {setErrorMessage("Invalid password.");} else if (password === "1111") {setErrorMessage("Invalid username.");} 
    else {setErrorMessage("Invalid username or password.");}
};

const handleKeyDown = (e) => {if (e.key === "Enter") {e.preventDefault();
if (e.target.name === "username") {passwordRef.current.focus(); // Move focus to the password input field 
} 
else {
      checklogin(e); // Trigger the login function when "Enter" is pressed in the password input field
    }
  }
};

return (
  <section className="container" id="login">
<div className="cover-card">
<h1 className="cover-title">Signup</h1>

<form action="" className="cover-group">

<label className="cover-label">MS ID</label>
<input type="text" name="username" placeholder="Enter Unique ID" 
className="form-control"value={username} 
onChange={(e) => setusername(e.target.value)} 
onKeyDown={handleKeyDown} />

<label className="cover-label">Phone Number</label>
<input type="text" name="username" placeholder="Enter your Mobile Number" 
className="form-control"value={username} 
onChange={(e) => setusername(e.target.value)} 
onKeyDown={handleKeyDown} />



<label className="cover-label">Username</label>
<input type="text" name="username" placeholder="Enter username" 
className="form-control"value={username} 
onChange={(e) => setusername(e.target.value)} 
onKeyDown={handleKeyDown} />
        
<label className="cover-label">Password</label>
<input type="password" name="password" placeholder="Enter password" 
className="form-control" value={password} 
onChange={(e) => setpassword(e.target.value)}
onKeyDown={handleKeyDown} ref={passwordRef} />
{errorMessage && <p className="alert alert-danger">{errorMessage}</p>}


<button onClick={checklogin} className="btn btn-primary cover-button">Create user</button>
     
</form>
</div>
</section>
);
};

export default Signup;