import { NavLink, useNavigate } from "react-router-dom"
import { UserIcon, LockIcon, GoogleIcon, VisibilityIcon, VisibilityOffIcon } from "../utils/Icons"
import { useContext, useState } from "react"
import { toast } from 'react-hot-toast';
import { CartContext } from "../context/CartContext";

export function LoginPage() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const { setIsLoggined, setShowModal, showLogin, setShowLogin, handleLoginPoppup, showHidePass, showPassword} = useContext(CartContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userResponse = await fetch('https://dummyjson.com/users')
            const userData = await userResponse.json();
            const userNam = userData.users.find(u=> u.username === userName);

            const loginRes = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: userName,
                    password: passWord,
                    expiresInMins: 30
                })
            });

            const loginData = await loginRes.json();   

            if (loginRes.ok) {
                toast.success('Login Successfull!');
                localStorage.setItem('userId', loginData.id);
                localStorage.setItem('AT', loginData.accessToken);
                localStorage.setItem('RT', loginData.refreshToken);
                localStorage.setItem('userName', loginData.username);
                localStorage.setItem('userImage', loginData.image);
                localStorage.setItem('firstName', loginData.firstName);
                localStorage.setItem('lastName', loginData.lastName);
                navigate('/');
                setIsLoggined(true);
                // setIsRegister(true);
                setShowModal(false);

            } else if(!userNam){
                toast.error('Username is wrong')
                return;
            
            } else if(userNam != userNam.password){
                toast.error('Password is wrong')
                return;
            }
            else {
                toast.error('Invalid login deatails.');
                return;
            }    

        } catch (err) {
            console.error("Fetch failed:", err.message);
        }
    };



    return (
        <>
            <div className="loginformwrap">
                <div className="signin-content grid md:grid-cols-2 gap-8 bg-white dark:border-gray-700 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-t-4 border-primary-600">
                    <div className="signin-image flex flex-col items-center justify-center">
                        <figure className="mb-4">
                            <img src="./images/signin-image.png" alt="sign in" className="w-64" />
                        </figure>
                        <button onClick={() => setShowLogin(!showLogin)} className="signup-image-link text-blue-600 hover:underline">Don't have an account? Register</button>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title text-3xl font-bold text-gray-800 mb-6 text-center dark:text-white">Sign In</h2>
                        <form onSubmit={handleSubmit} className="register-form space-y-6" id="login-form">

                            <div className="form-group py-2 relative z-0 w-full mb-5 group border-b-2 border-gray-300 dark:border-gray-600 focus-within:border-blue-600">
                                <div className='inputwrap flex items-end gap-2 text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-500'>
                                    <UserIcon className="transition-colors peer-focus:text-blue-600 dark:peer-focus:text-blue-500" />
                                    <div className="labelwrap w-full relative">
                                        <input
                                            type="text"
                                            name="floating_email"
                                            id="floating_email"
                                            className="block w-full px-0 text-sm dark:text-white text-black bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                                            placeholder=" "
                                            required
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                        <label
                                            htmlFor="floating_email"
                                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-[-10px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 cursor-text"
                                        >Username
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group py-2 relative z-0 w-full mb-5 group border-b-2 border-gray-300 dark:border-gray-600 focus-within:border-blue-600">
                                <div className='inputwrap flex items-end gap-2 text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-500'>
                                    <LockIcon className="transition-colors peer-focus:text-blue-600 dark:peer-focus:text-blue-500"/>
                                    <div className="labelwrap w-full relative flex gap-1">
                                        <input type={showPassword.field1 ? "text" : "password"} name="your_pass" id="your_pass" className="block w-full px-0 text-sm dark:text-white text-black bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                                        <label htmlFor="your_pass" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-[-10px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 cursor-text">Password</label>
                                        <div onClick={() => showHidePass('field1')} className="eyeiconbox cursor-pointer">
                                            {showPassword.field1 ? <VisibilityOffIcon/> : <VisibilityIcon/>} 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="forgotsec flex align-center justify-between text-primary-500">
                                <div className="form-group flex items-center">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="mr-2" />
                                    <label htmlFor="remember-me" className="text-sm text-gray-600 dark:text-white">Remember me</label>
                                </div>
                                <NavLink className="hover:text-primary-600 text-sm">
                                    Forgot password?
                                </NavLink>
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md cursor-pointer" value="Log in" />
                            </div>
                        </form>

                        <NavLink className="social-login mt-6 text-center flex justify-center gap-2 ">
                            <span className="social-label text-gray-600 inline-block dark:text-white">Or login with</span>
                            <GoogleIcon />
                        </NavLink>
                        <button onClick={handleLoginPoppup} className='close-btn text-white float-right text-6 font-bold hover:text-black focus:text-black cursor-pointer bg-primary-600 w-8 h-8 rounded-full absolute right-[-8px] top-[-8px]' style={{ zIndex: '999' }}>&times;</button>
                    </div>
                </div>
            </div>

        </>

    )
}