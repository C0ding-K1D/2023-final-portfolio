import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="testimonials">
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">CONTA</span>CT
        </p>
        <p className="section-subheader">Get in Touch: Reach Out to Me</p>
      </div>
      <div className="contact_container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 140,
              height: 140,
            },
            "@media (max-width: 1000px)": {
              flexDirection: "row",
              marginBottom: "1rem",
            },
            "@media (max-width: 500px)": {
              flexDirection: "column",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="circle">
              <a href="mailto:mattalvarez354@yahoo.com">
                <EmailIcon fontSize="large" className="contact-icon" />
              </a>
            </div>
            <p className="contact-icon-text">
              <span className="color-text">EMA</span>IL
            </p>
            <Typography
              variant="body2"
              component="p"
              sx={{
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Leave a message
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="circle">
              <a href="tel:+15162522329">
                <CallIcon fontSize="large" className="contact-icon" />
              </a>
            </div>
            <p className="contact-icon-text">
              <span className="color-text">PHO</span>NE
            </p>
            <Typography
              variant="body2"
              component="p"
              sx={{
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Leave a message
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="circle">
              <a
                href="https://www.linkedin.com/in/matthew-alvarez-778b3a22b/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" className="contact-icon" />
              </a>
            </div>
            <p className="contact-icon-text">
              <span className="color-text">LINKED</span>IN
            </p>
            <Typography
              variant="body2"
              component="p"
              sx={{
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Leave a message
            </Typography>
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "75ch",
              "@media (max-width: 768px)": {
                width: "50ch",
                "@media (max-width: 500px)": {
                  width: "40ch",
                },
              },
            },
          }}
          noValidate
          autoComplete="off"
          //   onSubmit={}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="filled"
              //   color="#ef9441"
              //   value={formData.name}
              //   onChange={handleChange}
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              placeholder="email@gmail.com"
              variant="filled"
              //   color="#ef9441"
              //   value={formData.email}
              //   onChange={handleChange}
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={8}
              variant="filled"
              //   color="#ef9441"
              //   value={formData.message}
              //   onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            size="large"
            className="btn-cta form-btn"
          >
            Send Message
          </Button>
        </Box>
      </div>
    </section>
  );
}

export default Contact;
