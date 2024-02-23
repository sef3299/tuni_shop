import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import BasicExample from './component/Navbar';
import {Routes,Route} from 'react-router-dom'
import Cart from './component/Card';
import SignInSide from './component/Login';
import SignUp from './component/Registre';
import UserProfile from './component/Userprofile';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrentuser } from './Redux/Action';
import { useEffect } from 'react';
import Footer from './component/Footer';
import Succses from './component/Succses';



function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    
  dispatch(getcurrentuser())
  
  }, [])
  const user=useSelector(state=>state.userReducer.user)
  console.log(user)
  return (
    <div className="App">
      <BasicExample/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/sendemail' element={<sendEmail/>}/>
        <Route path='/Userprofile' element={<UserProfile user={user}/> }/>
        

        <Route path='/Cart' element={<Cart/>}/>
        <Route path="/login" element={<SignInSide/>}/>
        <Route path="/success" element={<Succses/>}/>
        
      <Route path="/Registre" element={<SignUp/>}/>
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
