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
    text: "pccinternational@pccintl.org,",
  },
  {
    icon: FaPhoneAlt,
    text: "+2348034060044, +2348024307774",
  },

  {
    icon: FaMapMarkerAlt,
    text: "No. 13 Odunuga str. Ijora-badia, Lagos State, Nigeria.",
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
