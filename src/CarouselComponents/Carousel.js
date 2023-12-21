import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../App.css";

const Carousel = () => {
  return (
    <AwesomeSlider className="aas">
      <div className="carousel-slide">
        <img src="https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/se-nourrir-au-maroc_1.jpg?itok=MoCChSDy" />
        <div className="carousel-text">
          <p className="big">Welcome to TagineHouse</p>
          <div className="gib">Rabat's best authentic Moroccan restaurant</div>
        </div>
      </div>
      <div className="carousel-slide">
        <img
          src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 2"
        />
        <div className="carousel-text">
          <p className="big">For the love of delecious food </p>
          <div className="gib">come with family and feel the joy of the mouthwatering food</div>
        </div>
      </div>
      <div className="carousel-slide">
        <img
          src="https://www.visitmorocco.com/sites/all/themes/custom/onmt_theme/assets/images/Le-tajine.jpg"
          alt="Slide 3"
        />
        <div className="carousel-text">
     
          <p className="big">
            Perfectly delecious in every single bite
          </p>
          <div className="gib">Tasty with a good price </div>
          <div className="button-car">Our Menu</div>
        </div>

      </div>
    </AwesomeSlider>
  );
};

export default Carousel;

{
  /*import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const CustomSlide = ({ media, caption }) => (
  <div className="custom-slide">
    <img src={media} alt="carousel-slide" />
    <p className="caption">{caption}</p>
  </div>
);


const Carousel = () => {
  const slides = [
    {
      media: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: 'anananan',
    },
    {
      media: 'path/to/image2.jpg',
      caption: 'Caption for Image 2',
    },
    // Add more slides as needed
  ];

  return (
    <AwesomeSlider>
      {slides.map((slide, index) => (
        <div key={index}>
          <CustomSlide media={slide.media} caption={slide.caption} />
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default Carousel*/
}
