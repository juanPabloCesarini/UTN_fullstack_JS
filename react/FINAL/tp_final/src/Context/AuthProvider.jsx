import React,{useState} from "react";
import AuthContex from './AuthContext';

function AuthProvider(props){
    const [userLogin, setUserLogin]=useState(localStorage.getItem("login"))
    const [userInfo,setUserInfo]=useState(localStorage.getItem("userInfo"))

    const loginUser = (userInfo)=>{
        localStorage.setItem("login",true)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        setUserLogin(true)
        setUserInfo(userInfo)
    }

    const logoutUser = () => {
        localStorage.removeItem("login")
        localStorage.removeItem("UserInfo")
        setUserLogin(false)
        setUserInfo(false)
    }

    return (
        <AuthContex.Provider value={{userLogin, loginUser, logoutUser, userInfo }}>{props.children}</AuthContex.Provider>
    )
}
export default AuthProvider