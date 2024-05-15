import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status
    const [stateMessage, setStateMessage] = useState(null); // State for message display

    const sendEmail = (e) => { // Function to send email
      e.persist();
      e.preventDefault(); // Prevent default form submission behavior
      setIsSubmitting(true); // Set submission status to true
      emailjs.sendForm( // Sending email using emailjs library
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => { // If email is sent successfully
            setStateMessage('Message sent!'); // Set success message
            setIsSubmitting(false); // Set submission status to false
            setTimeout(() => {setStateMessage(null);}, 5000); // Clear message after 5 seconds
          },
          (error) => { // If there's an error sending the email
            setStateMessage('Something went wrong, please try again later'); // Set error message
            setIsSubmitting(false); // Set submission status to false
            setTimeout(() => {setStateMessage(null);}, 5000); // Clear message after 5 seconds
          }
        );
      e.target.reset(); // Clears the form after sending the email
    };

    return (
      <Box component="form" onSubmit={sendEmail} sx={{ mt: 4 }}> {/* Form for contact */}
        <Typography variant="h6" gutterBottom> {/* Title */}
          Contact Me
        </Typography>
        <TextField
          label="Name"
          name="user_name"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        /> {/* Name input field */}
        <TextField
          label="Email"
          name="user_email"
          type="email"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        /> {/* Email input field */}
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        /> {/* Message input field */}
        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} fullWidth>
          {isSubmitting ? <CircularProgress size={24} /> : 'Send'}
        </Button> {/* Submit button */}
        {stateMessage && <Typography color="secondary" sx={{ mt: 2 }}>{stateMessage}</Typography>} {/* Displaying message */}
      </Box>
    );
  };

  export default ContactForm;