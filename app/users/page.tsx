'use client';

import { useState } from 'react';
import { Button, TextField, Box, Typography, Modal, Fade, Backdrop } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


 

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateUser = async () => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    console.log('Created User:', data);
    setName('');
    setEmail('');
  };

  return (
    <>
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Create User
      </Typography>
      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateUser}
        sx={{ width: '100%' }}
      >
        Create User
      </Button>
    </Box>
       <div>
       <Button onClick={handleOpen}>Open modal</Button>
       <Modal
         aria-labelledby="transition-modal-title"
         aria-describedby="transition-modal-description"
         open={open}
         onClose={handleClose}
         closeAfterTransition
         slots={{ backdrop: Backdrop }}
         slotProps={{
           backdrop: {
             timeout: 500,
           },
         }}
       >
         <Fade in={open}>
           <Box sx={style}>
             <Typography id="transition-modal-title" variant="h6" component="h2">
               Text in a modal
             </Typography>
             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
             </Typography>
           </Box>
         </Fade>
       </Modal>
     </div>
     </>
  );
};

export default CreateUser;
