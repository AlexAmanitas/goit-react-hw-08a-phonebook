import { Typography, Alert } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { CustomBox } from './Register';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux/auth/operations';

export default function Login() {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  if (error) {
    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  }
  console.log('LoginPage');
  return (
    <CustomBox>
      {error && (
        <Alert severity="info" color="info">
          {error}
        </Alert>
      )}

      <Typography variant="" component="h2" sx={{ mb: '15px' }}>
        Login
      </Typography>
      <LoginForm />
    </CustomBox>
  );
}
