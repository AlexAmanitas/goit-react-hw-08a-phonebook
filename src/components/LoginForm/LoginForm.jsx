import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log('LoginFormReset');
    form.reset();
  };

  console.log('LoginFormComponent ');

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField type="email" name="email" label="Email" sx={{ mb: '20px' }} />

      <TextField
        type="password"
        name="password"
        label="Password"
        sx={{ mb: '20px' }}
      />

      <Button type="submit">Log In</Button>
    </Box>
  );
};

export default LoginForm;
