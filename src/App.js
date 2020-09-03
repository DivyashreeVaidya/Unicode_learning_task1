import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useForm } from 'react-hook-form';
import { render } from '@testing-library/react';
import { DisplayData } from './components';

function App() {
  const { register, handleSubmit, getValues, errors } = useForm();

  const [showData, setShowData]= useState(false);
  const [fullName, setFullName]= useState();
  const [userName, setUserName]= useState();
  const [email, setEmail]= useState();
  const [dateofBirth, setDateofBirth]= useState();
  const [password, setPassword]= useState();
  const [password1, setPassword1]= useState();


  const onSubmit = (data) => {
    console.log(data)
  }

   handleSubmit = (e) =>{
    if(fullName && userName && email && dateofBirth && password && password1 && (errors==="null")){
    setShowData(true);
    }
    else{
      setShowData(false);
    }
    e.preventDefault();
  }

  return (
    <div className='container'>
    <div className="App">
        {!showData ? <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create your account today</h1><br/>
        <label>Full name:</label><br/>
        <input type="text" autoComplete="on" name='fullname' id='fullname' className='fullname'  ref={register({required:true})}/><br/>
        <label>Username:</label><br/>
        <input type="text" autoComplete="on"  name="username" id="username" className="username" ref={register({required:true, pattern:/^\S*$/gm})}/><br/>
        {errors.username && <div id="errorMsg" className="errorMsg"> Username must contain no whitespaces .Please re-enter!</div>}
        <label>Email</label><br/>
        <input type="email"  autoComplete="on" name="email" id="email"  placeholder="eg. name@example.com" className="email" ref={register({required:true, pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g})}/><br/>
        {errors.email && <div id="errorMsg" className="errorMsg"> Invalid email format. Please re-enter!</div>}
        <label>Date of Birth:</label><br/>
        <input type="date" name="dob" name="dob" id="dob" className="dob" ref={register({required:true})}/> <br/>
        {/*<label>Phone no.:</label><br/>
        <input type="phone" autoComplete="on" name="phone" id="phone" className="phone" ref={register({required:true, pattern:/^\+([0-9]{2})[-. ]([0-9]{10}$)/g})}/><br/>
        <small className="inst">(Valid formats are: +91-/./ 5553344211) </small><br/>
        {errors.phone && <p id="errorMsg" className="errorMsg"> Invalid format.Please re-enter!</p>}*/}
        <label>Password:(8 or more characters)</label><br/>
        <input type="password" name="password" id="password" className="password" ref={register({required:true, minLength: 8})}/><br/>
        {errors.password && <div id="errorMsg" className="errorMsg"> Invalid password - must be minimum 8 characters.Please re-enter!</div>}
        <label>Re-enter password:</label><br/>
        <input type="password"  name="password1" id="password1" className="password1" ref={register({required:true})}/><br/>
        <input type="submit" value="Join Now"
         onClick={() => {
           const fullName = getValues("fullname");
           const userName = getValues("username");
           const email = getValues("email");
           const dateofBirth= getValues("dob");
         }}/><br/>
      </form> :
      <DisplayData data={fullName, userName, email, dateofBirth}></DisplayData>
      }
    </div>
    </div>
  );
}

export default App;
