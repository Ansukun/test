import{ React, useState,useEffect} from 'react'
import "./LoginScreen.css"
import bg from "../screens/baground.jpg"
import cinelfix from "../NextStack Logo.png"
import SignupScreen from  "../screens/SignupScreen"

function LoginScreen() {
    const [signIn,setSignIn] =  useState(false);
    return (
        <div className = "loginScreen" >
        <div className = "LoginScreen__background">
                <img  className = "loginScreen__logo"src= {cinelfix} alt = "cineflix" />
                <button  onClick ={() => setSignIn(true)}  className ="loginScreen__button">
                    sign in
                </button>
                <div className = "loginScreen__gradient"/>
            </div>
            <div className = "loginScreen__body">
            
                <SignupScreen/>
               
                    <>
                    <h1>Welcome to NextStacks Invoice App</h1>
                     
                     <div className = "loginScreen__input">
                    <form>
                        <button onClick ={() => setSignIn(true)} className = "login__button">
                            Get Started
                        </button>
                    </form>
                   
                     </div>
                     </>
                
                
               
                
            </div>
           

        </div>
    )
}

export default LoginScreen
