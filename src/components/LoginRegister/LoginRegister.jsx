import React, {useState} from 'react';
import './LoginRegister.css'
import { FaUser, FaEnvelope, FaUnlock, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    });
    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    
  const history = useNavigate();

    const handleInputChangeLogin = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleInputChangeRegister = (e) => {
        const { name, value } = e.target;
        setSignUpData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const registerLink = () => {
        setAction(' active')
    }

    const loginLink = () => {
        setAction('')
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if(loginData.username === 'username' && loginData.password === 'password'){
            history('/home')
        } else {
            window.alert("Wrong Credentials big dawg")
        }
      };
      
    
      const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if(signUpData.username.length === 0) {
            window.alert("Please enter a username");
        } else if(signUpData.email.length === 0) {
            window.alert("Please enter an email");
        } else if(signUpData.password.length === 0) {
            window.alert("Please enter a password");
        } else if(signUpData.confirmPassword.length === 0) {
            window.alert("Please enter a confirmed password");
        } else if(signUpData.password !== signUpData.confirmPassword) {
            window.alert("Please make sure password matches with confirm password");
        } else {
            window.alert("User has been created, please login.");
            setAction('')
            //history('/login');
        }
      }

      return (
        <div className='login-container'>
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={loginData.username}
                            onChange={handleInputChangeLogin}
                            required
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={handleInputChangeLogin}
                            required
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" />Remember me</label>
                        <a href='#' style={{color: 'white'}}>Forgot Password?</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href='#' style={{color: 'white'}} onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={signUpData.username}
                            onChange={handleInputChangeRegister}
                            required
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signUpData.email}
                            onChange={handleInputChangeRegister}
                            required
                        />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signUpData.password}
                            onChange={handleInputChangeRegister}
                            required
                        />
                        <FaUnlock className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={signUpData.confirmPassword}
                            onChange={handleInputChangeRegister}
                            required
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" />I agree to the terms and conditions</label>
                    </div>
                    <button type='submit'>Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href='#' style={{color: 'white'}} onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default LoginRegister