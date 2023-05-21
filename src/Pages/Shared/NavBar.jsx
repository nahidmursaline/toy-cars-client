import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/car-logo.png'
import { AuthContext } from '../../Providers/AuthProvider';

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = ()=> {
    logOut()
    .then(()=> {})
    .catch(error=> console.log(error))
  }

    const navItems = 
    <>
     <li><Link className="btn btn-outline btn-error border-none   me-3" to='/'>Home</Link></li>
     <li><Link className="btn btn-outline btn-error border-none me-3" to='/blogs'>Blog</Link></li>
   
     
      <li><Link className="btn btn-outline btn-error border-none me-3" to='/allToy'>All Toy</Link></li>

     
     {user?.email? <>
      <li><Link className="btn btn-outline btn-error border-none me-3" to='/addToy'>Add Toy</Link></li>
      <li><Link className="btn btn-outline btn-error border-none me-3" to='/myToy'>My Toys</Link></li>
      <li><button onClick={handleLogOut} className="btn btn-outline btn-error border-none me-3">Log Out</button></li>
     
     </>:
    
    <li><Link className="btn btn-outline btn-error border-none me-3" to='/login'>Log In</Link></li>}
     {
              user && <img className='ms-4 rounded-full' title= {user.displayName}style={{"height" : "38px", "width" : "38px"}} src={user.photoURL} alt="" />
            }
    
    </>


    return (
        <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              
             {navItems}
             
            </ul>
          </div>
          <Link to='/' className=" mr-2 rounded-full "><img style={{ width:150}} src={logo} alt="" /></Link>
          <h5 className='text-3xl font-bold '>Car Toy House</h5>
        </div>
          
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
       
      </div>
    );
};

export default NavBar;