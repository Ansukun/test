import React,{useRef} from 'react'
import "./SignupScreen.css"
import {auth} from "../firebase"
function SignInScreen() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

        ).then(() => {

        }).catch((error) => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

        ).then(() => {

        }).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className = "signupScreen">
            <form>
                <h1>
                    Sign In
                </h1>
                <input ref = {emailRef} placeholder ="email Address" type  = "email"/>
               <input ref = {passwordRef} placeholder = "password" type = "password"/>
               <button type = "submit" onClick ={signIn}  >
                   sign In
               </button>
               <h4> <span className ="signupscreen__gray">New Admin? </span> 
               <span className = "signupscreen__link" onClick = {register}>Sign Up Now </span> </h4>

            </form>
        </div>
    )
}

export default SignInScreen
