import React, { useState } from "react";


const Loginpage = () =>{
   
   const[username,setusername] = useState("");
   const[password,setpassword] = useState("");
   
   const checklogin = () =>{
    if (username==="admin"&& password==="1111"){alert("loginsuccessful")}
    else{alert("invaliduser") }}
    return(
        <section class="login container" id="loginpage">
        
<section class="container cover">
    <div className="cover" >

    <form action="">
    

            <h1>Login</h1>
  
  <label>Username</label>
  <input type="text" placeholder="username" onChange={(e) => setusername(e.target.value)} />
 <label>Password</label>
 <input type="Password" placeholder="password" onChange={(e) => setpassword(e.target.value)}/>

<button class="bttn" onClick={checklogin}>Login</button>


</form>
</div>
</section>

</section>







)
}
   
export default Loginpage;