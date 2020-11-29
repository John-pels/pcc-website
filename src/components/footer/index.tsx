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
} from "./style"
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa"

const details = [
  {
    icon: FaEnvelope,
    text: "pccorgintl@yahoo.com",
  },
  {
    icon: FaPhoneAlt,
    text: "+2348188888888, +2348133333333",
  },

  {
    icon: FaMapMarkerAlt,
    text: "Ijora-badia, Lagos State, Nigeria.",
  },
]

const Footer = () => {
  return (
    <FooterContainer>
      <FooterFlex>
        <FooterBrief>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore
          hic asperiores voluptatum laborum, animi eveniet et magni fugit
          perferendis quod sapiente explicabo doloribus molestias cupiditate
          quia blanditiis dolorum eum?
          <SocialHeading>Follow us on Social Media:</SocialHeading>
          <SocialMedia>
            <a href="https://www.linkedin.com/in/ajeigbejohn/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/ajeigbejohn/" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/ajeigbejohn/" target="_blank">
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
                    <DetailText>{detail.text}</DetailText>
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
