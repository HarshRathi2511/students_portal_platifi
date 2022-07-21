import React, { useState } from "react";
import  { useEffect } from "react";
import { Redirect } from 'react-router'
import "./Modal.css";
import * as AiIcons from 'react-icons/ai';

import { Snackbar, Button, Alert, AlertProps, useScrollTrigger } from '@mui/material';

import {forwardRef } from 'react';
import  { Component } from 'react';
import Axios from 'axios'; 
import {addUser} from './Service/api.js';
import {getUsers} from './Service/api.js';
import {deleteUser} from './Service/api.js';
import { editUser } from "./Service/api.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { getUser } from "./Service/api.js";

import { useParams } from "react-router-dom";

export default function Edit() {
    const initialValue = {
        name: " ", EmailID: " ",contactno: " ", gender: " ", branch: " ", USN: " "
    }
  const [modal, setModal] = useState(true);
  const [user, setUser] = useState(initialValue);
  
  const {id} = useParams();
  const [open, setOpen] = useState(false);
 
  

  const {name, EmailID,contactno, gender, branch, USN} = user;
  const history = useHistory()
  useEffect ( () => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async() => {
    const response = await getUser(id);
    console.log(response.data);
    setUser(response.data);
   
}
const editUserDetails= async() => {
    await editUser(user, id);
    history.push("/students") 
    
    window.location.reload(false);
}


 
  const onValueChange = (e) => {
    console.log(e.target.value);
   
  setUser({...user, [e.target.name]: e.target.value})
    
    // e.preventDefault()
    
}

  const toggleModal = () => {
    setModal(!modal);
    history.push("/students") 
    setUser([]);
    
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')}
    
  



return(
    <>
{modal && (
    <div className="modal">
      <div onClick={toggleModal} className="overlay">Edit Student</div>
      <div className="modal-content">
 
    <header>You are editing
    <div className = "close-button">
       <AiIcons.AiOutlineClose onClick={toggleModal}/>
       </div>
       </header>
    
    <form className ="regform"   >
        <div className="form first">
            <div className="details personal">
                <span className="title">Personal Details</span>

                <div className="fields">
                    <div className="input-field">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name"  onChange={(e) => onValueChange(e)} value = {user.name}  />
                    </div>

                    

                    <div className="input-field">
                        <label htmlFor="EmailID">Email</label>
                        <input type="text" placeholder="Enter your email" required name ="EmailID" id="EmailID" onChange={(e) => onValueChange(e)} value = {user.EmailID} ></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="contactno">Mobile Number</label>
                        <input type="text" placeholder="Enter mobile number" required name="contactno" pattern="[0-9]+" title="Please enter Numbers only." id="contactno" onChange={(e) => onValueChange(e)} value={user.contactno} ></input>
                    </div>
                    
                     <div className="input-field">
                        <label htmlFor = "gender">Gender</label>
                        <select required name = "gender" id="gender" onChange={(e) => onValueChange(e)} value={user.gender}>
                            <option selected >Select gender</option>
                            <option disabled placeholder="Select Gender">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Othes</option>
                     
                
                        </select>
                        
        
                    </div>


                    <div className="input-field">
                        <label htmlFor = "branch">Branch</label>
                        <select required name = "branch" id="branch" onChange={(e) => onValueChange(e)} value={user.branch} >
                            <option disabled selected >Select branch</option>
                            <option>CSE</option>
                            <option>ECE</option>
                            <option>EEE</option>
                            <option>ENI</option>
                            <option>Mechanical</option>
                            <option>Civil</option>
                            <option>Chemical</option>
                
                        </select>
                        
        
                    </div>

                    <div className="input-field">
                        <label htmlFor="USN">USN</label>
                        <input type="text" placeholder="Enter your USN" required name="USN" id="USN" onChange={(e) => onValueChange(e)} value={user.USN} ></input>
                    </div>
                </div>
            </div>
             </div>
        <div>
            <button className="close-modal" type="button" onClick={toggleModal} >
          CANCEL
        </button>
          
           <button className="submit-modal" onClick={() => editUserDetails()} >
          Submit
        </button>

  </div>   
            </form>
            

            </div>
            </div>
            )}</> );}



      