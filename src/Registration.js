import React from "react";

const Registration = () => {
   return (


<div className="signupcontainer container mt-4">
<div className="cover-card">
   <h2 className="sig">Registration Form</h2>
   <form action="" className="reg-group">

    <div className="row">
        <div className="col-md-3 mb-3">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" id="firstName" /></div>
          
          
    <div className="col-md-4 mb-3">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" id="lastName" /></div>
            

   <div className="col-md-2 mb-3">
   <label htmlFor="gender">Gender</label>
   <select className="form-control" id="gender">
     <option value="male">Male</option>
     <option value="female">Female</option>
     <option value="other">Other</option></select></div>
    
    
    
        <div className="col-md-2 mb-3">
     <label htmlFor="admissionDate">Date of Birth</label>
     <input type="date" className="form-control" id="admissionDate" /></div>


     {/* <div className="col-md-2 mb-3">
        <label htmlFor="age">Age</label>
        <input type="number" className="form-control" id="age" /></div> */}

        <div className="col-md-2 mb-3">
   <label htmlFor="gender">ID Proof</label>
   <select className="form-control" id="idproof">
     <option value="pan">Pan</option>
     <option value="aadhar">Aadhar</option>
     <option value="otherid">Other ID's</option></select></div>

     <div className="col-md-3 mb-3">
    <label htmlFor="number">ID number</label>
    <input type="tel" className="form-control" id="idnumber" /></div>

    <div className="col-md-3 mb-3">
    <label htmlFor="phone">Phone number</label>
    <input type="tel" className="form-control" id="phone" /></div>

    <div className="col-md-3 mb-3">
    <label htmlFor="phone">Whatsapp number</label>
    <input type="tel" className="form-control" id="phone" /></div>




</div>
          
          
<div className="row">
  
      
  <div className="col-md-8 mb-3">
  <label htmlFor="address">Address1(Street)</label>
  <input type="text" className="form-control" id="address" /></div>

  <div className="col-md-3 mb-3">
  <label htmlFor="address">Address2(Area)</label>
  <input type="text" className="form-control" id="address" /></div>

</div>
         

<div className="row">
    
  
<div className="col-md-2 mb-3">
     <label htmlFor="gpa">Pincode</label>
     <input type="number" className="form-control" id="pincode" /></div>
    
    

    <div className="col-md-4 mb-3">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control" id="email" /></div>
            
    <div className="col-md-2 mb-3">
   <label htmlFor="gender">Pament Mode</label>
   <select className="form-control" id="gender">
     <option value="upi">UPI</option>
     <option value="neft/rtgs">NEFT/RTGS</option>
     <option value="card">Debit/Credit Card</option></select></div>
   
       
        <div className="col-md-3 mb-3">
        <label htmlFor="emnumber">Emergency Contact no</label>
        <input type="tel" className="form-control" id="emnumber" /></div>
    


</div>
          
<div className="row">
    <div className="col-md-3 mb-3">
    <label htmlFor="membership">Membership Period</label>
    <select className="form-control" id="membership">
    
    <option value="monthly">Monthly</option>
     <option value="quarterly">Quaterly</option>
     <option value="halfyearly">Halfyearly</option>
     <option value="yearly">Yearly</option></select>
</div>
    

    {/* <div className="col-md-2 mb-3">
     <label htmlFor="gpa">Height in cm's</label>
     <input type="number" className="form-control" id="height" /></div>
            
     <div className="col-md-2 mb-3">
     <label htmlFor="gpa">Weight in kg's</label>
     <input type="number" className="form-control" id="weight" /></div>
     */}
     <div className="col-md-2 mb-3">
     <label htmlFor="admissionDate">Date of Joining</label>
     <input type="date" className="form-control" id="admissionDate" /></div>
        

    
    
    
          
</div>


<div className="row">
    
     {/* <div className="col-md-2 mb-3">
     <label htmlFor="graduationDate">Graduation Date</label>
     <input type="date" className="form-control" id="graduationDate" /></div>
             */}
          
</div>
          

{/* <div className="row">
    
            
    <div className="col-md-11 mb-3">
    <label htmlFor="comments">Comments</label>
    <textarea className="form-control" id="comments" rows="3"></textarea></div>

</div> */}

   
   <div class="d-grid gap-1 col-2 mx-auto">
   <button className="btn2 btn-primary">Create Account</button></div>
        


</form>
</div>
</div>

);
}

export default Registration;