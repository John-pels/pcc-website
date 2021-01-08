import React from "react"

import {
  FooterContainer,
  Copyright,
  FooterFlex,
  FooterBrief,
  InquiryDetails,
  DetailIcon,
  DetailText,
  DetailsContainer,
  SocialMedia,
  SocialHeading,
  Image,
  ImageWrapper,
  AnchorTag,
} from "./style"
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa"
import images from "../../assets/svg"

const { BrandLogo } = images

const details = [
  {
    icon: FaEnvelope,
    text: "pccinternational@pccintl.org",
    linkPrefix: "mailto:pccinternational@pccintl.org",
  },
  {
    icon: FaPhoneAlt,
    text: "+2348034060044, +2348024307774",
    linkPrefix: "tel:+2348034060044",
  },

  {
    icon: FaMapMarkerAlt,
    text: "No. 13 Odunuga str. Ijora-badia, Lagos State, Nigeria.",
    linkPrefix: "#",
  },
]

const Footer = () => {
  return (
    <FooterContainer>
      <FooterFlex>
        <FooterBrief>
          <ImageWrapper>
            <Image src={BrandLogo} alt="logo" />
          </ImageWrapper>
          <SocialHeading>Follow us on Social Media:</SocialHeading>
          <SocialMedia>
            <a
              href="https://web.facebook.com/groups/332246887472748"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a href="#" target="_blank">
              <FaTwitter />
            </a>
            <a href="#" target="_blank">
              <FaInstagram />
            </a>
          </SocialMedia>
        </FooterBrief>
        <DetailsContainer>
          {Array.isArray(details) && details.length
            ? details.map((detail, index) => {
                return (
                  <InquiryDetails key={index}>
                    <DetailIcon>
                      <detail.icon />
                    </DetailIcon>
                    <AnchorTag href={detail.linkPrefix} target="_blank">
                      <DetailText>{detail.text}</DetailText>
                    </AnchorTag>
                  </InquiryDetails>
                )
              })
            : null}
        </DetailsContainer>
      </FooterFlex>
      <Copyright>
        © {new Date().getFullYear()}, Built with ❤️ by &nbsp;
        <a href="https://www.linkedin.com/in/ajeigbejohn/" target="_blank">
          Pels-Tech.
        </a>
      </Copyright>
    </FooterContainer>
  )
}
export default Footer
