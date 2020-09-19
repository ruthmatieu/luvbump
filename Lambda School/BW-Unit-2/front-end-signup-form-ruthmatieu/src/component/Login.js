import React, { useState, useEffect } from 'react';
import * as yup from 'yup'; 
import axios from 'axios';
import { TextField } from '@material-ui/core';

//comp
import PasswordToggle from './PasswordToggle';
import { Link } from 'react-router-dom';

const formSchema = yup.object().shape({
    username: yup.string()
            .required('Username is required.'),
    password: yup.string()
            .required('Password is required.')
})

function Login() {

    const [passwordInputType, ToggleIcon] = PasswordToggle();

    const styles = {
        links: {
            textDecoration: 'none',
            color: '#63B3ED',
            cursor: 'pointer'
        }
    }

    const [userInput, setUserInput] = useState({
        username: '',
        password: ''
    });

     //state for dislaying user info
     const [data, setData] = useState([]);

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        formSchema.isValid(userInput).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [userInput]);

    const [errorState, setErrorState] = useState({
        username: '',
        password: ''
    });

    const validator = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then( valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ''
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                })
            })
    }

    const submitHandler = e => {
        e.preventDefault();

        //reset form once submitted
        setUserInput({
            username: '',
            password: ''
        });

        //ensure user data is being returned
        axios
            .post('https://reqres.in/api/users', userInput)
            .then( res => setData(res))
            .catch( err => console.log(err.res))

        console.log('login successful')
    };

    const changeHandler = e => {
        e.persist();
        validator(e);

        setUserInput({...userInput, [e.target.name]: e.target.value});
    };

    return(
        <div className="signup-div">
            <div>  
                <div className="form-info">  
                    <h1 className="app-bar">Welcome back!</h1>
                    <p className="member-login-login">Log in using your username and password</p>
                        <div className="form-input">  
                            <form onSubmit={submitHandler}>
                            
                                <div>
                                        <label htmlFor="username"></label><br/>
                                        <TextField
                                            id="standard-basic" 
                                            label="Username"
                                            type="text"
                                            name="username"
                                            fullWidth
                                            value={userInput.username}
                                            onChange={changeHandler}
                                            helperText={errorState.username.length > 0 ? (<p className="error">{errorState.username}</p>) : null}
                                        /><br/>

                                        <label htmlFor="password"></label><br/> 
                                        
                                        <TextField
                                            type={passwordInputType}
                                            id="standard-basic" 
                                            label="Password"
                                            name="password"
                                            fullWidth
                                            value={userInput.password}
                                            onChange={changeHandler}
                                            helperText={errorState.password.length > 0 ? (<p className="error">{errorState.password}</p>) : null}
                                        />
                                        <div><span className="password-icon-login">{ToggleIcon}</span></div>
                                </div>
                                <button disabled={buttonDisabled} className="login-btn">Log In</button>
                                <p>Don't have an account? <Link to="/sign-up" style={styles.links}>Sign Up</Link></p>
                                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                            </form>
                        </div>  
                    </div>  
                </div>    
            <div className="form-graphics">
                    <p>Find your next project.<br/>Engange your followers.<br/>
                        Do it all with <span>HowTo</span>.
                    </p>
            </div>
        </div>
    )
}

export default Login;