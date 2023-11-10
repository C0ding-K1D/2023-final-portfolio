import React, { useEffect, useState, useRef } from "react";
import testimonial1 from "../assets/testimonial1.jpeg";
import "../styles/Testimonials.css";

function Testimonials() {
  const [curSlide, setCurSlide] = useState(0);
  const slidesRef = useRef(null);
  const dotContainerRef = useRef(null);
  //   const dotContainer = document.querySelector(".dots");

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      setCurSlide(maxSlide - 1);
    } else {
      setCurSlide(curSlide - 1);
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  let maxSlide, goToSlide, activateDot;

  useEffect(() => {
    slidesRef.current = Array.from(
      document.querySelector(".slider").querySelectorAll(".slide")
    );
    dotContainerRef.current = document.querySelector(".dots");

    if (slidesRef.current.length > 0) {
      const slides = slidesRef.current; // Get slides array

      const createDots = function () {
        dotContainerRef.current.innerHTML = ""; // Clear existing content
        slides.forEach(function (_, i) {
          dotContainerRef.current.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
          );
        });
      };

      activateDot = function (slide) {
        document
          .querySelectorAll(".dots__dot")
          .forEach((dot) => dot.classList.remove("dots__dot--active"));

        document
          .querySelector(`.dots__dot[data-slide="${slide}"]`)
          .classList.add("dots__dot--active");
      };

      goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
      };

      maxSlide = slides.length;

      goToSlide(0);
      createDots();
      activateDot(0);
    }
  }, []);

  return (
    <section id="testimonials">
      <div className="section-header_container">
        <p className="logo-text">
          <span className="color-text">TESTIMONIA</span>LS
        </p>
        <p className="section-subheader">
          Simplicity in Praise: Hear from My Colleagues
        </p>
      </div>
      <div className="slider" ref={slidesRef}>
        <div className="slide">
          <div className="testimonial">
            <h5 className="testimonial__header">
              Working with Matt was a true highlight. Put this guy to work!
            </h5>
            <blockquote className="testimonial__text">
              Matthew Alvarez is a high performing software engineer. We worked
              together to define and develop a complex portal to improve
              developer experience across the enterprise. He is fully capable of
              taking abstract requirements and developing a programmatically
              sound application solution. Matt is a smart and passion engineer
              who can 10x on any assigned project. Working with Matt was a true
              highlight. Put this guy to work.
            </blockquote>
            <address className="testimonial__author">
              <img src={testimonial1} alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Allan Latty</h6>
              <p className="testimonial__location">Senior Software Engineer</p>
            </address>
          </div>
        </div>

        <button className="slider__btn slider__btn--left" onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>
        <div className="dots"></div>
      </div>
    </section>
  );
}

export default Testimonials;
