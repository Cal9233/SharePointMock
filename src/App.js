import './App.css';
import LoginForm from './components/LoginForm';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Navigate to='/login' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Find a Login Scheme that would match our vision
//No api for now so just have login button redirect to home page
//Login style

//Michael
//Functionality for Sign up, redirect to sign in