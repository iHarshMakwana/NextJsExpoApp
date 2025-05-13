// pages/index.js
import { Button, Container, Typography } from '@mui/material';
import { auth, provider, signInWithPopup } from '../firebase';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Google Sign-In Demo
      </Typography>

      {!user ? (
        <Button variant="contained" onClick={handleGoogleSignIn}>
          Sign in with Google
        </Button>
      ) : (
        <Typography variant="h6" sx={{ mt: 4 }}>
          Welcome, {user.displayName}
        </Typography>
      )}
    </Container>
  );
}
