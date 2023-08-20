import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.css";
import Snackbar from '@mui/material/Snackbar';
import { Alert, TextField } from "@mui/material";


function ContactForm() {
  const form = useRef();

  const [open, setOpen] = useState(false);
  const [send,setSend] = useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setSend(false);
  };


  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_mcz0f7m",
        "template_o0tkjg6",
        
        form.current,
        
        "B58rrap509ODdh6S7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setSend(true);
      e.target.reset();
  };

  

  return (
    <div className="contact-form">
      <label className="name">Write me a message</label>
      <br></br>
      <br></br>
      <br></br>
      <form ref={form} onSubmit={sendEmail} className="form" id="myForm">
        <TextField
          className="inputt"
          required
          id="standard-basic"
          type="text"
          name="user_name"
          label="Name"
          variant="standard"
        />
        <TextField
          className="inputt"
          required
          id="standard-basic"
          type="text"
          name="user_email"
          label="Email"
          variant="standard"
        />
        <TextField
          className="inputt"
          required
          id="standard-basic"
          type="text"
          name="message"
          label="Message"
          variant="standard"
        />

        <input className="button" type="submit" onClick={handleClick} value='send' />

        {send && <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
            
          >
            message sended ✔︎
          </Alert>
        </Snackbar>}
        
      </form>
    </div>
  );
}

export default ContactForm;
