import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselLap.css'


export default function CarouselLap() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block carousellap-img"
              src={require('../Images/LapSlide1.png').default}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousellap-img"
              src={require('../Images/LapSlide2.png').default}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
  )
}
