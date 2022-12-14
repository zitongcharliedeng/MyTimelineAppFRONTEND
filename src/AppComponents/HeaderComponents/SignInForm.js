import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button } from '@mui/material';
import axios from 'axios';

export default function SignInForm(props) {
  const [values, setValues] = React.useState({
    username: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [signInAlert, setSignInAlert] = React.useState('')

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

  const handleSignIn = async () => {
    props.setView('timeline')
    try{
      const response = await axios.post('http://localhost:4000/login', {user: { username: values.username, password: values.password}})
      props.setCurrentUser(response.data.user)
      setSignInAlert(response.data.alert)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
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
        <Button variant="contained" onClick={handleSignIn}>
          Sign In
        </Button>
        <Alert variant="filled" severity={(signInAlert === "Successful sign in :)")? "success" : "error"} sx={{ display: (signInAlert === '') ? "none" : "block" }}>
          {signInAlert}
        </Alert>
      </div>
    </Box>
  );
}
