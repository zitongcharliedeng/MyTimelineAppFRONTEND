import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import axios from 'axios';
import React from 'react';
import Alert from '@mui/material/Alert';

function SignUpPage() {
  const [values, setValues] = React.useState({
    username: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [signUpAlert, setSignUpAlert] = React.useState('')

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleSignUp = async () => {
    try{
      const response = await axios.post('http://localhost:4000/users', {user: { username: values.username, password: values.password}})
      setSignUpAlert(response.data.alert)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: 'block' }}>
      <h4> Create an Account below or "Sign in" in the navbar (left)!</h4>
      <div>
        <TextField
          label="Username"
          id="outlined-multiline-flexible"
          sx={{ m: 1, width: '25ch' }}
          value={values.username}
          onChange={handleChange('username')}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <br/>
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
      <div>
        <Alert variant="filled" severity="success" sx={{ display: (signUpAlert === '') ? "none" : "block" }}>
          {signUpAlert}
        </Alert>
      </div>
    </Box>
  )
}

export default SignUpPage