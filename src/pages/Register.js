import { Box, Typography, Alert } from '@mui/material';
import styled from '@emotion/styled';
import RegisterForm from '../components/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from 'redux/auth/operations';

export const CustomBox = styled(Box)`
  max-width: 400px;
  margin: 25px auto 0;
  padding: 15px;
  background-image: linear-gradient(
    rgba(200, 200, 200, 0.7),
    rgba(200, 200, 200, 0.7)
  );
  border-radius: 10px;
`;

export default function Register() {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  if (error) {
    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  }
  console.log('RegisterPage');

  return (
    <CustomBox>
      {error && (
        <Alert severity="info" color="info">
          {error}
        </Alert>
      )}
      <Typography variant="" component="h2" sx={{ mb: '15px' }}>
        Registration
      </Typography>

      <RegisterForm />
    </CustomBox>
  );
}
