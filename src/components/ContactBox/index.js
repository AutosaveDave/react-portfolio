import * as React from 'react';
import { Box, Paper, TextField } from '@mui/material';
import { Container } from '@mui/system';

export default function ContactBox() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
    <Container>
      <br/>
      <div>
        <Paper
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
      <div/>
        <div>
          <TextField 
            id="contact-form-name" 
            label="Name" 
            //variant="outlined"
            defaultValue=""
            />
        </div>
        <div>
          <TextField 
            id="contact-form-email" 
            label="Email" 
            //variant="outlined" 
            defaultValue=""
            />
        </div>
        <div>
          <TextField
            id="contact-form-msg"
            label="Message"
            multiline
            rows={6}
            defaultValue=""
          />
        </div>
        <br/>
        <br/>
        
      </Paper></div>
    </Container>
  </>
  );
}