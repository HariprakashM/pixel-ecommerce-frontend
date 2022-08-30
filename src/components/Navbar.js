import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GradingIcon from '@mui/icons-material/Grading';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Filter1 from "./Filter1";
export default function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);

  const { cartItems } = cartreducer;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg">
    //     <a className="navbar-brand" href="/">
    //       PIXEL SHOPS
    //     </a>
       
        
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"><i class="fas fa-bars" style={{color:'white'}}></i></span>
    //     </button>



    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <div className="navbar-nav ">
    //       {/* <Filter1/> */}
    //         {currentUser ? (
    //            <li className="card profile-out">

    //            <Button 
    //              id="basic-button"
    //              aria-controls={open ? 'basic-menu' : undefined}
    //              aria-haspopup="true"
    //              aria-expanded={open ? 'true' : undefined}
    //              onClick={handleClick}
    //            >
    //              <AccountCircleIcon className="profile-btn"/>{currentUser.name}
    //              {/* <i style={{color:'white'}} className="fa fa-user" aria-hidden="true"></i>{currentUser.name} */}
    //            </Button>
    //            <Menu
    //              id="basic-menu"
    //              anchorEl={anchorEl}
    //              open={open}
    //              onClose={handleClose}
    //              MenuListProps={{
    //                'aria-labelledby': 'basic-button',
    //              }}
    //            >
    //              <MenuItem  onClick={handleClose}><a href="/profile"><ContactPageIcon className="margin-less-10"/>Profile</a></MenuItem>
    //              <MenuItem onClick={handleClose}><a href="/admin/userslist"><AdminPanelSettingsIcon className="margin-less-10"/>Admin Pannel</a></MenuItem>
    //              <MenuItem onClick={handleClose}><a href="/orders"><GradingIcon className="margin-less-10"/>Orders</a></MenuItem>
    //              <MenuItem onClick={()=>{dispatch(logoutUser())}}><ExitToAppIcon/>Logout</MenuItem>
    //            </Menu>
    //          </li>
             
    //         ) : (
    //           <li className="nav-item ">
    //             <a className="nav-link" href="/login">
    //               Login
    //             </a>
    //           </li>
    //         )}

    //         <li className="nav-item  ">
    //           <a className="nav-link" href="/cart">
    //             <AddShoppingCartIcon/> {cartItems.length}
    //           </a>
    //         </li>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a className="navbar-brand" href="/"><Diversity2Icon className="main-icon"/>PIXEL SHOPS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fas fa-bars" style={{color:'white'}}></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li className="nav-item  ">  <Filter1/> </li>
      {currentUser ? (

               <li className="card profile-out">

               <Button 
                 id="basic-button"
                 aria-controls={open ? 'basic-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}
               >
                 <AccountCircleIcon className="profile-btn"/>{currentUser.name}
                 {/* <i style={{color:'white'}} className="fa fa-user" aria-hidden="true"></i>{currentUser.name} */}
               </Button>
               <Menu
                 id="basic-menu"
                 anchorEl={anchorEl}
                 open={open}
                 onClose={handleClose}
                 MenuListProps={{
                   'aria-labelledby': 'basic-button',
                 }}
               >
                 <MenuItem  onClick={handleClose}><a href="/profile"><ContactPageIcon className="margin-less-10"/>Profile</a></MenuItem>
                 <MenuItem onClick={handleClose}><a href="/admin/userslist"><AdminPanelSettingsIcon className="margin-less-10"/>Admin Pannel</a></MenuItem>
                 <MenuItem onClick={handleClose}><a href="/orders"><GradingIcon className="margin-less-10"/>Orders</a></MenuItem>
                 <MenuItem onClick={()=>{dispatch(logoutUser())}}><ExitToAppIcon/>Logout</MenuItem>
               </Menu>
             </li>
             
            ) : (
              <li className="nav-item ">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item  ">
              <a className="nav-link" href="/cart">
                <AddShoppingCartIcon/> {cartItems.length}
              </a>
            </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
