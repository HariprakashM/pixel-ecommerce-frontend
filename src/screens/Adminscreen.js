import React , {useState, useEffect} from 'react'
import { Link , Switch , Route, Routes} from 'react-router-dom'
import Swal from 'sweetalert2';
import {useSelector , useDispatch} from 'react-redux'
export default function Adminscreen(props) {
    const path=window.location.pathname;
    const userstate = useSelector(state=>state.loginReducer)

    const currentUser = userstate.currentUser
    useEffect(() => {

        if(currentUser)
        {
            if(!currentUser.isAdmin){
                Swal.fire('Oops', 'You Are Not An Admin', 'error').then(result => { window.location.href = '/' });
                
            }
        }
        else{
            Swal.fire('Oops', 'You Are Not An Admin', 'error').then(result => { window.location.href = '/' });

        }

        
       
    }, [])


    return (
        <div className='container'>
            
            <div className="row justify-content-center  mt-2">
                <div className="col-md-10">
                       <h2 className='text-center'>Admin Panel</h2>
                       <ul className='admin py-2 px-1'>
                           <li className={`${path=='/admin/userslist' && 'active'}`}><Link to='/admin/userslist' style={{color:'black'}}>UsersList</Link></li>
                           <li className={`${path=='/admin/productslist' && 'active'}`}><Link to='/admin/productslist' style={{color:'black'}}>Products List</Link></li>
                           <li className={`${path=='/admin/addnewproduct' && 'active'}`}><Link to='/admin/addnewproduct' style={{color:'black'}}>Add New Product</Link></li>
                           <li className={`${path=='/admin/orderslist' && 'active'}`}><Link to='/admin/orderslist' style={{color:'black'}}>Orderslist</Link></li>
                       </ul>


                       
                       {/* <Routes>
                       <Route path='/admin' element={<Userslist/>}  />
                          <Route path='/admin/userslist' element={<Userslist></Userslist>} />
                          <Route path='/admin/orderslist' element={<Orderslist></Orderslist>} />
                          <Route path='/admin/addnewproduct' element={<Addproduct></Addproduct>} />
                          <Route path='/admin/productslist' element={<Productslist></Productslist>} />
                          <Route path='/admin/editproduct/:productid' element={<Editproduct></Editproduct>} />
                         
                       </Routes> */}

                       

                </div>
                <div className='col-md-10'>
                    {props.children}
                </div>
            </div>

        </div>
    )
}
