import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../components/assets/logo/logo.png'
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>console.error(error))
}
    return (
        <div className="navbar bg-base-100 font-bold bg-blue-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              {
              user?.uid && <> <li><Link to='/myreview'>My Reviews</Link></li>
              <li><Link to='/addservices'>Add Services</Link></li></>
             } 
            </ul>
          </div>
          <Link to='/' className=" normal-case text-xl"><img className='w-20' src={logo} alt='#'></img></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
         
          {
              user?.uid && <> <li><Link to='/myreview'>My Reviews</Link></li>
              <li><Link to='/addservices'>Add Services</Link></li></>
             }  
              <li><Link to='/blog'>Blog</Link></li>
          
          </ul>
        </div>
        <div className="navbar-end">
        {
           user?.uid ? <button onClick={handleLogOut} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">LogOut</button> :
           <>
           <Link to='/login'><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button></Link>
          <Link to='/register'><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SignUp</button></Link>
           
           </>
        }
          
      

         
         
        </div>
      </div>
    );
};

export default Header;