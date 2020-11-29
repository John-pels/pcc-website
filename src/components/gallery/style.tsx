import styled from "styled-components"
import Image from "gatsby-image"

export const SliderContainer = styled.section`
  display: flex;
  flex-flow: column;
  max-width: 750px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme?.fontFamily?.normal};
`

export const ThumbSection = styled.main`
  .swiper-container {
    width: 100%;
  }
  .main-image {
    .swiper-slide {
      border-radius: 3px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
      object-fit: center;

      @media (max-width: 768px) {
        height: 220px;
      }
    }
    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        opacity: 0.5;
      }
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 18px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      opacity: 0;
      transition: 0.5s;
      @media (max-width: 768px) {
        opacity: 0.5;
      }
    }
  }
  .thumb {
    width: 65%;
    padding: 40px 0;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 0 0 20px 0;
      width: 100% !important;
    }
    .swiper-slide {
      border-radius: 5px;
      height: 60px;
      cursor: pointer;
      @media (max-width: 768px) {
        height: 45px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
      }
      transition: 0.2s;
      opacity: 0.5;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 18px;
    }
    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
`

export const SliderImageWrapper = styled.div`
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    height: 100%;
  }
`

export const SliderImage = styled.img``

export const MoreAnchorTag = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme?.colors?.primary};
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`

export const HeadingText = styled.h2`
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  text-align: center;
  color: ${({ theme }) => theme?.colors?.primary};
  margin: 2.5rem 0;

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(20)};
  }
`
