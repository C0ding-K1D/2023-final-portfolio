import React from "react";
import { Button, Grid, Typography } from "@mui/material";

function Blog() {
  return (
    <section id="blog">
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">BL</span>OG
        </p>
        <p className="section-subheader">
          Embracing Simplicity: Navigating Complexity with Ease
        </p>
      </div>
      {/* <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <article
              className="card_item"
              style={{
                backgroundColor: "#e5e5e5",
              }}
              key={item?.id}
            >
              <div className="card_item-image">
                <img className="card_img" src={item?.imgSrc} alt="" />
              </div>
              <Typography
                variant="body1"
                component="h3"
                color="#212121"
                sx={{ m: 1 }}
              >
                {item?.title}
              </Typography>
              <a href={item?.href} target="_blank">
                <Button
                  variant="contained"
                  className="btn-cta"
                  fontSize="large"
                >
                  Read More
                </Button>
              </a>
            </article>
          </Grid>
        ))}
      </Grid> */}
    </section>
  );
}

export default Blog;
