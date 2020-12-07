import React, { useState } from "react"
import SwiperCore, { Navigation, Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaArrowCircleRight } from "react-icons/fa"
import "swiper/swiper-bundle.css"
import {
  SliderContainer,
  ThumbSection,
  SliderImage,
  SliderImageWrapper,
  MoreAnchorTag,
  HeadingText,
} from "./style"

SwiperCore.use([Thumbs, Navigation])

const SliderItems = [
  "https://res.cloudinary.com/john-pels/image/upload/v1579443938/Rectangle_86.png",
  "https://res.cloudinary.com/john-pels/image/upload/v1579475979/Rectangle_86_1.png",
  "https://res.cloudinary.com/john-pels/image/upload/v1579475979/Rectangle_86.png",
  "https://res.cloudinary.com/john-pels/image/upload/v1579475979/Rectangle_86_1.png",
  "https://res.cloudinary.com/john-pels/image/upload/v1579475979/Rectangle_86.png",
  "https://res.cloudinary.com/john-pels/image/upload/v1579475979/Rectangle_86_1.png",
]

const GallerySlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <SliderContainer>
      <HeadingText>Gallery Section</HeadingText>
      <ThumbSection>
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
          className="main-image"
        >
          {Array.isArray(SliderItems) && SliderItems.length > 0
            ? SliderItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <SliderImageWrapper>
                    <SliderImage src={item} alt="slider" />
                  </SliderImageWrapper>
                </SwiperSlide>
              ))
            : null}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          slidesPerView={5}
          spaceBetween={10}
          className="thumb"
        >
          {Array.isArray(SliderItems) && SliderItems.length > 0
            ? SliderItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <SliderImage src={item} alt="slider" />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </ThumbSection>

      <MoreAnchorTag
        href="https://drive.google.com/drive/folders/1G4D6uB4xVEQqWDyGPl1VIKzeedE_ZqUH"
        target="_blank"
      >
        View more photos &nbsp; <FaArrowCircleRight />
      </MoreAnchorTag>
    </SliderContainer>
  )
}

export default GallerySlider
