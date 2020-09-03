import React, { useState } from 'react';
import './App.css';
import { useForm, getValues } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { DisplayData } from './components';

function App() {
  const { register, handleSubmit, getValues, errors } = useForm();

  const [showData, setShowData]= useState(false);
  const [fullName, setFullName]= useState('');
  const [userName, setUserName]= useState('');
  const [email, setEmail]= useState('');
  const [dateofBirth, setDateofBirth]= useState('');
  const [password, setPassword]= useState('');
  const [password1, setPassword1]= useState('');


  const onSubmit = (data) => {
    console.log(data)
    console.log(errors.message)
    if(errors.message===undefined)
    {
      setShowData(true);
    }
    else
    {
      setShowData(false);
    }
    //if(setFullName(true) && setUserName(true) && setEmail(true) && setDateofBirth(true) && setPassword(true) && (errors==="null")){
     // setShowData(true);
     // }
      //else{
     //   setShowData(false);
     // };
  }

   //handleSubmit = (e) =>{

   // e.preventDefault();
  //}

  return (
        <div>
        { !showData?
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main_header">
        <h1 className="main_header1"> Escape the mundane.</h1>
        <h2 className="main_header2">A one-stop destination for all your favourite movies, music, audiobooks, guided meditations, podcasts and more</h2></div>
        <div className="container">
        <div className="App">
        <h2 className="header">Create your account today</h2><br/>
        <div className="form_content">
        <div className="row mx-md-n5">
        <div className="col px-md-5"><div className="p-3">
        <label>Full name:</label><br/>
        <input type="text" autoComplete="on" name='fullname' id='fullname' className='fullname'  
        onChange={e => setFullName(e.target.value)}
        ref={register({required:"This is a required field."})}/><br/>
        {errors.fullname && <div id="errorMsg" className="errorMsg">{errors.fullname.message}</div>}
        </div></div></div>
        <div className="row mx-md-n5">
        <div className="col px-md-5"><div className="p-3">
        <label>Username:</label><br/>
        <input type="text" autoComplete="on"  name="username" id="username" className="username" 
        onChange={e => setUserName(e.target.value)}
        ref={register({required:"This is a required field.", pattern:{value:/^\S*$/gm, message:"Username must contain no whitespaces."}})}/><br/>
        {errors.username && <div id="errorMsg" className="errorMsg"> {errors.username.message}</div>}
        </div></div></div>
        <div className="row mx-md-n5">
        <div className="col px-md-5"><div className="p-3">
        <label>Email:</label><br/>
        <input type="email"  autoComplete="on" name="email" id="email"  placeholder="name@example.com" className="email" 
        onChange={e => setEmail(e.target.value)}
        ref={register({required:"This is a required field.", pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g, message:"Invalid email format."}})}/><br/>
        {errors.email && <div id="errorMsg" className="errorMsg">{errors.email.message}</div>}
        </div></div></div>
        <div className="row mx-md-n5">
        <div className="col px-md-5"><div className="p-3">
        <label>Date of Birth:</label><br/>
        <input type="date" name="dob" id="dob" className="react-datepicker" 
        onChange={e => setDateofBirth(e.target.value)}
        ref={register({required:"This is a required field."})}/> <br/>
        {errors.dob && <div id="errorMsg" className="errorMsg">{errors.dob.message}</div>}
        </div></div></div>
        <div className="row mx-md-n5">
        <div className="col px-md-5"><div className="p-3">
        <label>Password:(8 or more characters)</label><br/>
        <input type="password" name="password" id="password" className="password" 
        onChange={e => setPassword(e.target.value)}
        ref={register({required:"This is a required field.", minLength: {value:8, message:"Invalid password - must contain minimum 8 characters."}})}/><br/>
        {errors.password && <div id="errorMsg" className="errorMsg">{errors.password.message} </div>}
        </div></div></div>
        <div className="row mx-md-n5">
        <div className="col px-md-5"><div className="p-3">
        <label>Re-enter password:</label><br/>
        <input type="password"  name="password1" id="password1" className="password1" 
        onChange={e => setPassword1(e.target.value)}
        ref={register({validate:(password1)=> password1 === getValues('password')})}/><br/>
        {errors.password1 && <div id="errorMsg" className="errorMsg">Passwords do not match.</div>}
        </div></div></div><br/>
        <div className="row mx-md-n5">
        <div className="col px-md-5"><div className="p-3">
        <input type="submit" value="Sign Up" className="submit"/>
           </div></div></div>
         <br/>
        </div> </div></div>
      </form> :
      <div className="container">
      <div className="App">
      <h1 className="header1">Account details:</h1>
            <div className="label1">Fullname: </div><div className="value">{fullName}</div> <br/><br/>
            <div className="label1">Username:</div><div className="value"> {userName} </div><br></br>
            <div className="label1">Email:</div><div className="value">{email}</div><br/><br/>
            <div className="label1">Date of Birth:</div><div className="value">{dateofBirth}</div> <br/><br/>
            </div></div>}
      {/*<DisplayData data={fullName, userName, email, dateofBirth}></DisplayData>*/}
      
    </div>
  );
};

export default App;
