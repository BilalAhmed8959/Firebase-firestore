import { createUserWithEmailAndPassword  } from 'firebase/auth'
import React, { useRef } from 'react'
import { auth } from '../config/firebase/firebaseconfig'
import { useNavigate } from 'react-router-dom';

function Register() {
  const emailinput = useRef();
  const passinput = useRef();
 const navigate = useNavigate()


 function registerUser(event){
  event.preventDefault();
  console.log(emailinput.current.value);
  console.log(passinput.current.value);

  createUserWithEmailAndPassword(auth, emailinput.current.value, passinput.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Registered", user);
      navigate('/login');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });

  }
 

  return (
    <>
    <div className='flex justify-center mt-10 gap-10'>
          <form onSubmit={registerUser} className='border border-black w-80 h-80 p-10 rounded-xl'>
            <h2 className='text-3xl text-center font-semibold'>Register</h2>
    <label className="input input-bordered flex items-center gap-2 mt-8">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input  type="text" className="grow" placeholder="Email"  ref={emailinput}/>
</label>
<label className="input input-bordered flex items-center gap-2 mt-6">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" placeholder='enter password' ref={passinput}/>
</label>
<button className="btn btn-outline btn-success mt-4 ml-20" onClick={Register}>Register</button>

{/* <p className='text-red-600'>{errer}</p> */}
</form>
</div>
    {/* <h1 className='text-center'>Register</h1>
    <form onSubmit={registerUser}>
    <input type="email" placeholder="type email" ref={emailinput} />
    <input type="password" placeholder="type password" ref={passinput} />
    <button>Register</button>
    </form> */}
  </>
  )
}

export default Register