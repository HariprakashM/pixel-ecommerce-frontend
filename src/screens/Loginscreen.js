import React, { useState , useEffect} from "react";
import {useDispatch , useSelector} from 'react-redux'
import { loginUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";



export default function Loginscreen() {
 
  const loginreducer = useSelector(state=>state.loginReducer)
  const {loading , error} = loginreducer
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  

  const dispatch = useDispatch()

  function login(e) {

    e.preventDefault()
    const user={
        
        email : email , 
        password : password
    }

    dispatch(loginUser(user))
   
    
  }

  useEffect(() => {

    // if(localStorage.getItem('currentUser'))
    // {
    //     window.location.href='/'
    // }
      
  }, [])

  return (
    <div>
      {loading && (<Loader/>)}
      <div className="row justify-content-center update-bg">
        <div className="col-md-4  p-3 p-3 mb-5 log-body" style={{ marginTop: "150px", color:"white" }}>
          <div className="div">
            <h2 className="text-center m-3" style={{display: "inline"}}>LOGIN</h2>
             <i style={{fontSize:'25px'}} className="fa fa-sign-in" aria-hidden="true"></i>

            {error && (<Error error='Invalid Credentials' />)}
            

              <form onSubmit={login}>
           
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

           

            <div className="text-right">
              <button type='submit' className="btn mt-3">
                LOGIN
              </button>
              
            </div>
            <div className='margin-10'><a  href="/register" >Click Here To Register</a></div>
            <div className="text-right cont mt-1">
                <span>{`User : user@gmail.com`}</span><br/>
                <span>{`Admin : admin@gmail.com`}</span><br/>
                <span>{`Password : 123`}</span>
                </div>
              </form>
              
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

