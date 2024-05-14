import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const history = useNavigate();
    const classes = useStyles();

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setSignUpData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
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
            // Redirect to the login page if all conditions are met
            history('/login');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <TextField
                            id="username"
                            name="username"
                            label="Username"
                            variant="outlined"
                            onChange={handleOnChange}
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            onChange={handleOnChange}
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={handleOnChange}
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            onChange={handleOnChange}
                            type="password"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" type="submit">
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default SignUp;
