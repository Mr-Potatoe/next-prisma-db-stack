'use client';

import { Box, Button, Typography } from '@mui/material';
import MapComponent from '@/components/leaflet/MapComponent'
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        User and Post Management
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" component={Link} href="/users">
          Create User
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="primary" component={Link} href="/posts">
          Create Post
        </Button>
      </Box>
    </Box>
    <MapComponent/>
    </>
  );
};

export default HomePage;
