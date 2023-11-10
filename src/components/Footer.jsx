import React from "react";
import { Typography, Box } from "@mui/material";
import footerImg from "../assets/nav_logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import medium from "../assets/medium.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        src={footerImg}
        alt=""
        style={{
          maxHeight: "120px",
          display: "block",
          margin: "0 auto",
          paddingTop: "3rem",
        }}
      />
      <div className="navlogo-text_container">
        <p className="logo-subtext_footer">MATTHEW ALVAREZ</p>
        <p className="logo-text">
          <span className="color-text">DEVELOP</span>ER
        </p>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "80%",
            marginTop: "3rem",
            marginBottom: "3rem",
            "& > *": {
              textDecoration: "none",
            },
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <a href="#">
            <Typography
              variant="body2"
              component="p"
              color="#eee"
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Home
            </Typography>
          </a>
          <a href="#about">
            <Typography
              variant="body2"
              component="p"
              color="#eee"
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              About
            </Typography>
          </a>
          <a href="#experience">
            <Typography
              variant="body2"
              component="p"
              color="#eee"
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Experience
            </Typography>
          </a>
          <a href="#blog">
            <Typography
              variant="body2"
              component="p"
              color="#eee"
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Blog
            </Typography>
          </a>
          <a href="#projects">
            <Typography
              variant="body2"
              component="p"
              color="#eee"
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Projects
            </Typography>
          </a>
          <a href="#contact">
            <Typography
              variant="body2"
              component="p"
              color="#eee"
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Contact
            </Typography>
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "5rem",
            justifyContent: "space-between",
          }}
        >
          <a
            href="https://medium.com/@Matthew_Alvarez"
            target="_blank"
            className="medium-icon_footer"
          >
            <img src={medium} alt="" />
          </a>
          <a href="https://github.com/C0ding-K1D" target="_blank">
            <GitHubIcon className="footer-icon" fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-alvarez-778b3a22b/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" className="footer-icon" />
          </a>
        </Box>
      </Box>
      <Typography
        variant="body2"
        component="p"
        sx={{
          color: "#aaa",
          textAlign: "center",
          p: 3,
        }}
      >
        Created by Matthew Alvarez All Rights Reserved Copyright{" "}
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
}

export default Footer;
