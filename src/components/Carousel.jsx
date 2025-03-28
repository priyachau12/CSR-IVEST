import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import corporateImage from "../assets/corporate.webp";
import socialImage from "../assets/Social.webp";
import responsiblityImage from "../assets/Responsiblity.webp";

const images = [
  
  { src: corporateImage, text: "Creating Sustainable Responsibility" },
  { src: socialImage, text: "Contributing to Social Reform" },
  { src: responsiblityImage, text: "Corporate Stewardship for Renewal" }
];


// const images = [
//   { src: "/assets/corporate.webp", text: "Empowering Change" },
//   { src: "/assets/corporate.webp", text: "Sustainable Growth" },
//   { src: "/assets/corporate.webp", text: "Innovate for Impact" },
// ];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="carousel"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <div className="carousel-overlay">
              <h2 className="carousel-text">{item.text}</h2>
            </div>
            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
