import React from "react";
import "./reviews.css";
import reviewAva1 from "../../assets/img/avatar1.jpg";
import reviewAva2 from "../../assets/img/avatar2.jpg";
import reviewAva3 from "../../assets/img/avatar3.jpg";
import reviewAva4 from "../../assets/img/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: reviewAva1,
    title: "avatar 1",
    name: "Adane Rimae",
    mass: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eveniet accusamus ullam voluptas recusandae quaerat perferendis optio blanditiis architecto praesentium, vel nam laudantium porro harum, at suscipit dolorum unde doloribus. ",
  },
  {
    image: reviewAva2,
    title: "avatar 2",
    name: "Mikale Fozi",
    mass: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eveniet accusamus ullam voluptas recusandae quaerat perferendis optio blanditiis architecto praesentium, vel nam laudantium porro harum, at suscipit dolorum unde doloribus. ",
  },
  {
    image: reviewAva3,
    title: "avatar 3",
    name: "Rania Gomes",
    mass: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eveniet accusamus ullam voluptas recusandae quaerat perferendis optio blanditiis architecto praesentium, vel nam laudantium porro harum, at suscipit dolorum unde doloribus. ",
  },
  {
    image: reviewAva4,
    title: "avatar 4",
    name: "Bobi Rioer",
    mass: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eveniet accusamus ullam voluptas recusandae quaerat perferendis optio blanditiis architecto praesentium, vel nam laudantium porro harum, at suscipit dolorum unde doloribus. ",
  },
];

const Reviews = () => {
  return (
    <section id="reviews">
      <h5>Review from clients</h5>
      <h2>Reviews</h2>
      <Swiper
        className="container reviews-box"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, title, name, mass }, index) => {
          return (
            <SwiperSlide key={index} className="review">
              <div className="review-avatar">
                <img src={image} alt={title} />
              </div>
              <h5 className="review-name">{name}</h5>
              <p className="review-mas">{mass}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reviews;
