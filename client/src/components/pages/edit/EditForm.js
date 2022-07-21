import React from 'react'

export const EditForm = (props) => {
  return (
    <div>(
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
      )</div>
  )
}
