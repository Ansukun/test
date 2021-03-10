import React,{useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux"
import './App.css';
import HomeScreen from "./screens/AppBar"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection";
import LoginScreen from "./screens/LoginScreen"
import SignupScreen from "./screens/SignupScreen"
import ProfileScreen from "./screens/ProfileScreen"
import AddClient from "./components/ClientDetails"
import {auth} from "./firebase"
import {logout,login, selectUser} from "./features/userSlice"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const user = useSelector(selectUser);
   const dispatch = useDispatch()

  useEffect(() => {
   const unsubsribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth)
      {
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email,
            photoUrl : userAuth.photoURL
          })) 
         
      }
      else{
       dispatch(logout());
      }

    })
    return unsubsribe
  }, [dispatch])
  return (
    <div className="app">
      
      <Router>
        {!user? (
          <LoginScreen/>
        ):(
           <Switch>
          <Route  exact path="/">
          <HomeScreen/>
          </Route>
          <Route path = "/AddClient"  component = {AddClient}>
             <AddClient/>
             </Route>
             
        </Switch>
        )
        }
        
     
    </Router>
    </div>
  );
}

export default App;
