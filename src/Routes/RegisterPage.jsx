import { NavLink, useNavigate } from "react-router-dom"
import { UserIcon, LockIcon, LockIconDark, MailIcon, VisibilityIcon, VisibilityOffIcon } from "../utils/Icons"
import { CartContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import { Toaster, toast } from 'react-hot-toast';

export function RegisterPage() {
  const { showLogin, setShowLogin, handleLoginPoppup, setIsLoggined, setShowModal, showHidePass, showPassword } = useContext(CartContext);
  const navigate = useNavigate();
  const [isName, setIsName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');


  const userResgister = (e)=> {
     e.preventDefault();

    if (password !== cPassword) {
      toast.error('Passwords does not match');
      return;
    }

    const existngUser = JSON.parse(localStorage.getItem('RegiteredUser')) || [];
    const userExist = existngUser.find((ue) => ue.email === email);

    if(userExist) {
      toast.error('User already exists');
      return;
    }
    
    existngUser.push({user: isName, email, password});
    localStorage.setItem('RegiteredUser', JSON.stringify(existngUser));
    localStorage.setItem('user', email)

    toast.success('Register Successfully');
    setIsName('');
    setEmail('');
    setPassword('');
    setCPassword('');
    navigate('/');
    setIsLoggined(true);
    setShowModal(false)
  }

  useEffect(()=>{
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
          setIsLoggined(true);
      } else {
          setIsLoggined(false);
      }
  }, []);




  return (
    <>

      {/* Sign up form */}
      <div className="signupformwrap">
        <div className="signup-content grid md:grid-cols-2 gap-8 bg-white dark:border-gray-700 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-t-4 border-primary-600">

          <div className="signup-image flex flex-col items-center justify-center">
            <figure className="mb-4">
              <img src="./images/signup-image.png" alt="sign up" className="w-64" />
            </figure>
            <button onClick={() => setShowLogin(!showLogin)} className="signup-image-link text-blue-600 hover:underline">Already have an account? Login</button>
          </div>
          <div className="signup-form">
            <h2 className="form-title text-3xl font-bold text-gray-800 mb-6 text-center dark:text-white">Sign Up</h2>
            <form onSubmit={userResgister} method="POST" className="register-form space-y-6" id="register-form">
              <div className="form-group py-2 relative z-0 w-full mb-5 group border-b-2 border-gray-300 dark:border-gray-600 focus-within:border-blue-600">
                <div className="inputwrap flex items-end gap-2 text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-500">
                  <UserIcon className="transition-colors peer-focus:text-blue-600 dark:peer-focus:text-blue-500"/>
                  <div className="labelwrap w-full relative">
                    <input type="text" name="name" id="name" placeholder=" "  className="block w-full px-0 text-sm dark:text-white text-black bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer" value={isName} onChange={(e)=> {setIsName(e.target.value)}} required/>
                    <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-[-10px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 cursor-text">Your Name</label>
                  </div>
                </div>
              </div>

              <div className="form-group py-2 relative z-0 w-full mb-5 group border-b-2 border-gray-300 dark:border-gray-600 focus-within:border-blue-600">
                <div className="inputwrap flex items-end gap-2 text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-500">
                  <MailIcon className="transition-colors peer-focus:text-blue-600 dark:peer-focus:text-blue-500"/>
                  <div className="labelwrap w-full relative">
                    <input type="email" name="email" id="email-primary" placeholder=" " className="block w-full px-0 text-sm dark:text-white text-black bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer" value={email} onChange={(e)=> {setEmail(e.target.value)}} required/>
                    <label htmlFor="email-primary" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-[-10px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 cursor-text">Your Email</label>
                  </div>
                </div>
              </div>

              <div className="form-group py-2 relative z-0 w-full mb-5 group border-b-2 border-gray-300 dark:border-gray-600 focus-within:border-blue-600">
                <div className="inputwrap flex items-end gap-2 text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-500">
                  <LockIcon className="transition-colors peer-focus:text-blue-600 dark:peer-focus:text-blue-500"/>
                  <div className="labelwrap w-full relative flex gap-1">
                    <input type={showPassword.field2 ? "text" : "password"} name="pass" id="pass" placeholder=" " className="block w-full px-0 text-sm dark:text-white text-black bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer" value={password} onChange={(e)=> {setPassword(e.target.value)}} required/>
                    <label htmlFor="pass" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-[-10px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 cursor-text">Password</label>
                    <div onClick={() => showHidePass('field2')} className="eyeiconbox cursor-pointer">
                        {showPassword.field2 ? <VisibilityOffIcon/> : <VisibilityIcon/>} 
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group py-2 relative z-0 w-full mb-5 group border-b-2 border-gray-300 dark:border-gray-600 focus-within:border-blue-600">
                <div className="inputwrap flex items-end gap-2 text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-500">
                  <LockIconDark className="transition-colors peer-focus:text-blue-600 dark:peer-focus:text-blue-500"/>
                  <div className="labelwrap w-full relative flex gap-1">
                    <input type={showPassword.field3 ? "text" : "password"} name="re_pass" id="re_pass" placeholder=" " className="block w-full px-0 text-sm dark:text-white text-black bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer" value={cPassword} onChange={(e)=> {setCPassword(e.target.value)}} required/>
                    <label htmlFor="re_pass" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-[-10px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 cursor-text">Confirm password</label>
                    <div onClick={() => showHidePass('field3')} className="eyeiconbox cursor-pointer">
                        {showPassword.field3 ? <VisibilityOffIcon/> : <VisibilityIcon/>} 
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group flex items-center">
                <input type="checkbox" name="agree-term" id="agree-term" className="mr-2" />
                <label htmlFor="agree-term" className="text-sm text-gray-600 dark:text-white">I agree all statements in <NavLink to="/" className="text-blue-600 hover:underline">Terms of Service</NavLink></label>
              </div>

              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md cursor-pointer" value="Register" />
              </div>
            </form>
          </div>
          <button onClick={handleLoginPoppup} className='close-btn text-white float-right text-6 font-bold hover:text-black focus:text-black cursor-pointer bg-primary-600 w-8 h-8 rounded-full absolute right-[-8px] top-[-8px]' style={{ zIndex: '999' }}>&times;</button>
        </div>
      </div>

    </>
  )
}
