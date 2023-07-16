import * as React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Stack, Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

export default function ContactBox() {
  const form = useRef();

  const [sent, setSent] = useState(false);
  const handleSent = () => {
    setSent(true);
    setSending(false);
  }

  const [sending, setSending] = useState(false);

  const [alertText, setAlertText] = useState('');
  const [subalertText, setSubalertText] = useState('');
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [msgText, setMsgText] = useState('');

  const handleNewMsg = () => setSent(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if( !sending ) {
      setSending(true);
      
      console.log(form);
      emailjs.sendForm('service_cmithwf', 'template_ycck05x', form.current, '3sT8DPqMiYIEweupm')
        .then((result) => {
            setAlertText('Your message was sent successfully!');
            setSubalertText(`A confirmation email has been sent to ${fromEmail}.`);
            handleSent();
        }, (error) => {
          setAlertText('An error occurred, and your message was not sent.');
          setSubalertText(`AutosaveDave can be contacted at AutosaveDave@gmail.com.`);
          handleSent();
          console.error(error.text);
        });
    }
  };

  const inputSX = { 
    "& .MuiFilledInput-root": { backgroundColor: "primary.light", color: "primary.contrastText",},
    "& .MuiFilledInput-root:hover": { backgroundColor: "secondary.main", color: "primary.contrastText",
        "@media (hover: none)": { backgroundColor: "primary.light", color: "primary.contrastText",}, },
    "& .MuiFilledInput-root.Mui-focused": { backgroundColor: "text.primary", color: "primary.contrastText",},

    "& .MuiFormLabel-root": { color: "primary.contrastText" },
    "& .MuiFormLabel-root:hover": { color: "primary.contrastText",
        "@media (hover: none)": { color: "primary.contrastText",}, },
    "& .MuiFormLabel-root.Mui-focused": { color: "primary.contrastText", },
  };

  const iconSX = {color: 'info.main', '&:hover': { color:'error.main'} };

  return (
    <>
      <Container sx= {{ flexWrap: 'nowrap', justifyContent:'center' }}>
        <Stack
          display='flex'
          boxSizing='border-box'
          alignItems='stretch'
          component='form'
          autoComplete="off"
          ref={form} 
          onSubmit={sendEmail}
          spacing={2}
          mx={'20%'}
        >
          {!sent && <>
            <TextField 
              required
              variant="filled"
              id="contact-form-name"
              label="Name"
              type="text"
              name="from_name"
              defaultValue=""
              sx={ inputSX }
              onChange={(e) => {
                setFromName(e.target.value);
              }}
            />
            <TextField 
              required
              variant="filled"
              id="contact-form-email"
              label="Email"
              type="email"
              name="from_email"
              defaultValue=""
              sx={ inputSX }
              onChange={(e) => {
                setFromEmail(e.target.value);
              }}
            />
            <TextField 
              required
              variant="filled"
              id="contact-form-message"
              label="Message"
              multiline
              rows={6}
              name="message"
              defaultValue=""
              sx={ inputSX }
              onChange={(e) => {
                setMsgText(e.target.value);
              }}
            />
            { !sending && <>
              <Button 
                variant="contained"
                type="submit"
              >
                SEND
              </Button>
            </>}
            { sending && <>
              <Button
                variant="contained"
                type="submit"
              >
                <CircularProgress color='inherit' fontSize='inherit' />
              </Button>

            </>}
          </>}
          { sent && <>
            <Typography variant='h4' color='secondary.main'>
              {alertText}
            </Typography>
            <Typography variant='h5' color='secondary.main'>
              {subalertText}
            </Typography>
            <Typography variant='h6' textAlign='left'>
              Name:  {fromName}
            </Typography>
            <Typography variant='h6' textAlign='left'>
              Email:  {fromEmail}
            </Typography>
            <Typography variant='h6' textAlign='left'>
              Message:  {msgText}
            </Typography>
          </>}
        </Stack>
      </Container>
      
    </>
  );
}