import React from "react"
import {
  HeaderContainer,
  HeroContent,
  HeroImage,
  HeroImageContainer,
  HeroText,
  Tagline,
  TypeText,
} from "./style"
import TypeWriter from "../typeWriter"
import Wave from "../wave"
import { getHero } from "../../query/getHero"

const texts = [
  " For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. - John 3:16",
  "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is--his good, pleasing and perfect will. - Romans 12:2",
  "And behold, I am coming quickly, and My reward is with Me, to give to every one according to his work. - Revelation 22:12",
]

const LandingComponent = () => {
  const data = getHero()
  const image = data?.avatar?.childImageSharp?.fluid
  return (
    <>
      <HeaderContainer>
        <HeroImageContainer>
          <HeroImage fluid={image} />
        </HeroImageContainer>
        <HeroContent>
          <HeroText>Pentecostal Church of Christ</HeroText>
          <Tagline> - The Junction of the Living God!</Tagline>
          <TypeText>
            {" "}
            <Wave>
              <span aria-hidden>✍️</span>
            </Wave>
            <TypeWriter texts={texts} />
          </TypeText>
        </HeroContent>
      </HeaderContainer>
    </>
  )
}

export default LandingComponent
