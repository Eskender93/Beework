// MeetingRoomsSlider.jsx
import React, { useRef } from "react";
import Slider from "react-slick";
import MeetingRoomCard from "./MeetingRoomCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SlideContainer,
  LeftArrow,
  RightArrow,
} from "./MeetingRoomCard.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MeetingRoomsSlider = ({ rooms }) => {
  const sliderRef = useRef();

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  return (
    <SlideContainer>
      <LeftArrow onClick={handlePrevClick}>
        <IoIosArrowBack size={30} />
      </LeftArrow>
      <Slider ref={sliderRef} {...settings}>
        {rooms.map((room, index) => (
          <MeetingRoomCard key={index} room={room} />
        ))}
      </Slider>
      <RightArrow onClick={handleNextClick}>
        <IoIosArrowForward size={30} />
      </RightArrow>
    </SlideContainer>
  );
};

export default MeetingRoomsSlider;
