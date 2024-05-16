import SignUp from './pages/SignUp';
import Home from './pages/Home';
import LoginRegister from './components/LoginRegister/LoginRegister';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          {/* <Route path='/login' element={<LoginForm />} /> */}
          <Route path='/login' element={<LoginRegister />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Navigate to='/login' />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

//Find a Login Scheme that would match our vision
//No api for now so just have login button redirect to home page
//Login style

//Michael
//Functionality for Sign up, redirect to sign in