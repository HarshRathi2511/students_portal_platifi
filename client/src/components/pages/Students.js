import React, { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router";
import "./Modal.css";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import {
  Snackbar,
  Button,
  Alert,
  AlertProps,
  useScrollTrigger,
} from "@mui/material";

import { forwardRef } from "react";
import { Component } from "react";
import Axios from "axios";
import { addUser } from "./Service/api.js";
import { getUsers } from "./Service/api.js";
import { deleteUser } from "./Service/api.js";
import { Link } from "react-router-dom";
import Edit from "./edit";
import { useHistory } from "react-router";
import LoadingSpinner from "../spinner/spinner";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [users, setUsers] = useState([]);

  // state for loading the screen
  const [isLoading, setIsLoading] = useState(false);

  const { name, EmailID, contactno, gender, branch, USN } = users;

  const onValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  const addUserDetails = async (e) => {
    setOpen(true);
    setModal(!modal);
    setUsers([]);
    e.preventDefault();
    await addUser(users);
    window.location.reload(false);
  };

  useEffect(() => {
    
    getAllUsers();
    
  }, []);

  const getAllUsers = async () => {
    setIsLoading(true)
    let response = await getUsers();
    setUsers(response.data);
    setIsLoading(false)
  };

  const deleteUserDetails = async (_id) => {
    await deleteUser(_id);
    window.location.reload(false);
  };

  const toggleModal = () => {
    setModal(!modal);
    setUsers([]);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
    setOpen(false);
  };

  const handleClickEvent = (e) => {
    setOpen(true);
    setModal(!modal);
    e.preventDefault();
    setUsers();
  };

  return (
    <>
      <div className="Main">
        <div className="addition-container">
          <h1> Student Details Portal</h1>
          <button onClick={toggleModal} className="btn-modal">
            Add Student
          </button>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Gender</th>
                  <th>Branch</th>
                  <th>USN</th>
                  <th> Actions </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) ? (
                  isLoading === true ? (
                    <LoadingSpinner />
                  ) : users.length === 0 ? (
                    <p>No students are in the database ...</p>
                  ) : (
                    users.map((user) => {
                      return (
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.EmailID}</td>
                          <td>{user.contactno}</td>
                          <td>{user.gender}</td>
                          <td>{user.branch}</td>
                          <td>{user.USN}</td>
                          <td>
                            <Button
                              color="primary"
                              component={Link}
                              to={`/students/edit/${user._id}`}
                            >
                              <FaIcons.FaEdit />{" "}
                            </Button>

                            <Button
                              color="primary"
                              onClick={() => deleteUserDetails(user._id)}
                            >
                              <AiIcons.AiFillDelete />{" "}
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  )
                ) : null}
              </tbody>
            </table>
          </div>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <header>
                  Add Student
                  <div className="close-button">
                    <AiIcons.AiOutlineClose onClick={toggleModal} />
                  </div>
                </header>

                <form className="regform" onSubmit={addUserDetails}>
                  <div className="form first">
                    <div className="details personal">
                      <span className="title">Personal Details</span>

                      <div className="fields">
                        <div className="input-field">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            onChange={(e) => onValueChange(e)}
                            value={name}
                          ></input>
                        </div>

                        <div className="input-field">
                          <label htmlFor="EmailID">Email</label>
                          <input
                            type="text"
                            placeholder="Enter your email"
                            required
                            name="EmailID"
                            id="EmailID"
                            onChange={(e) => onValueChange(e)}
                            value={EmailID}
                          ></input>
                        </div>

                        <div className="input-field">
                          <label htmlFor="contactno">Mobile Number</label>
                          <input
                            type="text"
                            placeholder="Enter mobile number"
                            required
                            name="contactno"
                            pattern="[0-9]+"
                            title="Please enter Numbers only."
                            id="contactno"
                            onChange={(e) => onValueChange(e)}
                            value={contactno}
                          ></input>
                        </div>

                        <div className="input-field">
                          <label htmlFor="gender">Gender</label>
                          <select
                            required
                            name="gender"
                            id="gender"
                            onChange={(e) => onValueChange(e)}
                            value={gender}
                          >
                            <option selected>Select gender</option>
                            <option disabled placeholder="Select Gender">
                              Select Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Othes</option>
                          </select>
                        </div>

                        <div className="input-field">
                          <label htmlFor="branch">Branch</label>
                          <select
                            required
                            name="branch"
                            id="branch"
                            onChange={(e) => onValueChange(e)}
                            value={branch}
                          >
                            <option disabled selected>
                              Select branch
                            </option>
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
                          <input
                            type="text"
                            placeholder="Enter your USN"
                            required
                            name="USN"
                            id="USN"
                            onChange={(e) => onValueChange(e)}
                            value={USN}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="close-modal"
                      type="button"
                      onClick={toggleModal}
                    >
                      CANCEL
                    </button>

                    <button className="submit-modal">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className="snacky">
            <Snackbar
              ContentProps={{
                sx: {
                  background: "green",
                },
              }}
              anchorOrigin={{
                horizontal: "right",
                vertical: "top",
              }}
              open={open}
              autoHideDuration={3000}
              message="Student Successfully Added"
              onClose={handleToClose}
              action={<AiIcons.AiOutlineClose onClick={handleToClose} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
