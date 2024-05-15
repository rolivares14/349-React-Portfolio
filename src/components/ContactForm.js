import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {setStateMessage(null);}, 5000);
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {setStateMessage(null);}, 5000);
          }
        );
      // Clears the form after sending the email
      e.target.reset();
    };

    return (
      <Box component="form" onSubmit={sendEmail} sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Contact Me
        </Typography>
        <TextField
          label="Name"
          name="user_name"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="user_email"
          type="email"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} fullWidth>
          {isSubmitting ? <CircularProgress size={24} /> : 'Send'}
        </Button>
        {stateMessage && <Typography color="secondary" sx={{ mt: 2 }}>{stateMessage}</Typography>}
      </Box>
    );
  };

  export default ContactForm;