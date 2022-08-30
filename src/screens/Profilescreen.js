import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { ToastContainer, toast } from 'react-toastify';
export default function Profilescreen() {
  const loginstate = useSelector((state) => state.loginReducer);
  const updateuserstate = useSelector((state) => state.updateReducer);
  const currentUser = loginstate.currentUser;
  const {loading , success,error} = updateuserstate
  const dispatch = useDispatch()
  const [name, setname] = useState(currentUser.name);
  const [email, setemail] = useState(currentUser.email);
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const notify = () => toast.success('Profile Updated, Kindly Login', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
  function update(e) {
   
    e.preventDefault()
    if (password == cpassword) {
      const updateduser = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(updateUser(currentUser._id , updateduser));
      
      
      
      
    }
    else{
        alert('Passwords Not matched')
    }
  }

  return (
    <>
    <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
    <div>
      <div className="row justify-content-center update-bg">
        <div className="col-md-5 p-3" style={{ marginTop: "125px", color:"white"}}>
          <div className="div">
            <h2 className="text-center m-3">Update Profile</h2>

            {loading && <Loader />}
            {error && (
              <Error error="Something went wrong"></Error>
            )}
            {success && <Success success="Your Details updated succes , please re-login" />}

            <form onSubmit={update}>
              <input
                type="text"
                placeholder="name"
                className="form-control"
                required
                
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="email"
                className="form-control"
                value={email}
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />

              <input
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />

              <input
                type="password"
                placeholder="confirm password"
                className="form-control"
                value={cpassword}
                required
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />

              <div className="text-right">
                <button type="submit" className="btn mt-3" onClick={notify}>
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
