import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import everythingCookies from "../assets/everythingCookies.jpg";
import expenseBuddy from "../assets/expenseBuddy.jpg";
import forkify from "../assets/forkify.jpg";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">PROJEC</span>TS
        </p>
        <p className="section-subheader">My Portfolio: Explore My Work</p>
      </div>
      <div className="project-card_container">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <article
              className="portfolio_item"
              style={{
                backgroundColor: "#37383d",
              }}
            >
              <div className="portfolio_item-image">
                <img className="portfolio_img" src={everythingCookies} alt="" />
              </div>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  marginTop: "-1rem",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
                color="#eee"
              >
                E-Comm Store
              </Typography>
              <Button
                href="https://github.com/C0ding-K1D/everything-cookies-"
                target="_blank"
                variant="outlined"
                className="btn-outline"
                fontSize="large"
                sx={{ mr: 1, color: "#eee" }}
              >
                Github
              </Button>
              <Button
                href="https://celadon-melomakarona-8d53df.netlify.app/"
                target="_blank"
                variant="contained"
                className="btn-cta"
                fontSize="large"
              >
                Demo
              </Button>
            </article>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <article
              className="portfolio_item"
              style={{
                backgroundColor: "#37383d",
              }}
            >
              <div className="portfolio_item-image">
                <img className="portfolio_img" src={expenseBuddy} alt="" />
              </div>
              <Typography
                variant="h5"
                component="h3"
                color="#eee"
                sx={{
                  marginTop: "-1rem",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Expense Tracker
              </Typography>
              <Button
                variant="outlined"
                className="btn-outline"
                fontSize="large"
                sx={{ mr: 1, color: "#eee" }}
              >
                Github
              </Button>
              <Button
                href="https://preeminent-brigadeiros-8c5419.netlify.app"
                target="_blank"
                variant="contained"
                className="btn-cta"
                fontSize="large"
              >
                Demo
              </Button>
            </article>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <article
              className="portfolio_item"
              style={{
                backgroundColor: "#37383d",
              }}
            >
              <div className="portfolio_item-image">
                <img src={forkify} alt="" className="portfolio_img" />
              </div>
              <Typography
                variant="h5"
                component="h3"
                color="#eee"
                sx={{
                  marginTop: "-1rem",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Recipe App
              </Typography>
              <Button
                href="https://github.com/C0ding-K1D/forkify-recipes"
                target="_blank"
                variant="outlined"
                className="btn-outline"
                fontSize="large"
                sx={{ mr: 1, color: "#eee" }}
              >
                Github
              </Button>
              <Button
                href="https://forkifytherecipeapp.netlify.app"
                target="_blank"
                variant="contained"
                className="btn-cta"
                fontSize="large"
              >
                Demo
              </Button>
            </article>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Projects;
