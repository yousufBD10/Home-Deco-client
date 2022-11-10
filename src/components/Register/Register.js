import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../Hooks/useTitle';

const Register = () => {
    useTitle("Register")

    const navigate = useNavigate()
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';
    
        const {createUser,updateUserProfile} = useContext(AuthContext);
        const [userInfo, setUserInfo] = useState({
            email: '',
            password: ''
        });
        const [errors, setErrors] = useState({
            email: '',
            password: ''
        });
        
        const handleEmailChange = (e) =>{
            setUserInfo({...userInfo, email: e.target.value})
        };
        const handlePassChange = (e) =>{
            const password = e.target.value;
            if(password.length < 6){
                setErrors({...errors,password:"Password must be 6 characters"})
                setUserInfo({...userInfo, password: e.target.value})
            }
            else{
                setErrors({...errors,password:''})
                setUserInfo({...userInfo, password: e.target.value})
            }
        };
    

        
    const handleUpdateUserProfile = (name, photoURL,country) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
            country: country
        }
  
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    };
  
      
    
       
        const handleSubmit = (e) =>{
            e.preventDefault();
            const form =  e.target
            const email = form.email.value;
            const password = form.password.value;
              const name = form.name.value;
              const photoURL = form.photoURL.value;
              const country = form.country.value;
               console.log(name,photoURL,country,password);
              createUser(email,password)
              .then(result =>{
                  const user = result.user;
                 console.log(user);
                 setErrors('');
                  form.reset();
                  if(user.uid){
                    navigate(from , {replace: true})
            
                  }
                  else{
                  
                  }
                  handleUpdateUserProfile(name,photoURL,country)
                })
                .catch(error => {
                    console.error(error)
                    setErrors(error.message)
                    if(error === "FirebaseError: Firebase: Error (auth/email-already-in-use)."){
                      setErrors({...errors,email:'User already register used this email'})
                    }
                  })
         
    
        }

    return (
        <div className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
        <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
            <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                Registration Form 
            </div>
            <form onSubmit={handleSubmit} className="">
                <div>
                     <input type="text" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500" name='name'  placeholder="Name "/>
                </div>
                 <div>
                     <input type="text" name='photoURL'  className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"  placeholder="photoURL "/>
                </div>
                 <div>
                     <input type="text" name='country' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"  placeholder="Country "/>
                </div>
                
                 <div>
                <input onChange={handleEmailChange} type="email" name='email' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Email Adress "/>
                </div>
               
                
                <div className="">
                    <input onChange={handlePassChange} type="password" name='password' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Password " />
                </div>
                <div className="flex">
                    <input type="checkbox" className="border-sky-400 " value="" />
                    <div className="px-3 text-gray-500">
                        I accept terms & conditions 
                    </div>
                </div>
                <div className="flex justify-center my-6">
                    <button type='submit' className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                        Create Account
                    </button>
                </div>
                <div className="flex justify-center ">
                    <p className="text-gray-500">Already have an acount? </p>
                    <Link to="/login" className="text-sky-600 pl-2"> Sign In</Link>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;