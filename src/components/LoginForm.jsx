import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    displayy: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      top: 5,
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;

    setLoginData((prev) => ({
        ...prev,
        [name]: value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    if(loginData.username === 'username' && loginData.password === 'password'){
        history('/home')
    } else {
        window.alert("Wrong Credentials big dawg")
    }
  };
  

  const handleSignUp = (e) => {
    e.preventDefault();
    history('/signup')
  }
  
return (
    <div>
        <h2>Login</h2>
        <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                <TextField
                    id="username"
                    name='username'
                    label="Username"
                    variant="outlined"
                    onChange={handleOnChange}
                    required
                />
                </Grid>
                <Grid item>
                <TextField
                    id="password"
                    name='password'
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={handleOnChange}
                    required
                />
                </Grid>
                <Grid container item justify="center" spacing={2}>
                <Grid item>
                    <Button variant="contained" color="primary" type="submit">
                    Login
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleSignUp} variant="contained" color="primary">
                    Sign up
                    </Button>
                </Grid>
                </Grid>
            </Grid>
        </form>
    </div>
  );
}

export default LoginForm;