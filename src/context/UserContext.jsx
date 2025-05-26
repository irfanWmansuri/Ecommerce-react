import { createContext, useState, useContext } from "react";
import { Toaster, toast } from 'react-hot-toast';
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserContextProvider({ children }) {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [userData, setUserData] = useState(null);
    const { setIsLoggined, setShowModal, setIsUserName} = useContext(CartContext);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const res = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: userName,
                        password: passWord,
                        expiresInMins: 30
                    })
                });
                const data = await res.json();
                setUserData(data);
                // console.log(userData);
                
                // console.log(userData.image);
                
                if (res.ok) {
                    toast.success('Login Successfull!');
                    localStorage.setItem('AT', data.accessToken);
                    localStorage.setItem('RT', data.refreshToken);
                    localStorage.setItem('userName', data.username);
                    localStorage.setItem('userImage', data.image);
                    localStorage.setItem('firstName', data.firstName);
                    localStorage.setItem('lastName', data.lastName);
                    navigate('/')
                    setIsLoggined(true);
                    setShowModal(false)
                    setIsUserName(data.username);
                    // console.log(data.image);
                    // console.log(data.username);
                } else {
                    toast.error('Invalid login deatails.');
                }
    
            } catch (err) {
                console.error("Fetch failed:", err.message);
            }
        };

  return (
    <UserContext.Provider value={{setUserName, setPassWord, userName, passWord, userData, handleSubmit}}>
        {children}
    </UserContext.Provider>
  )
}
