import React from "react"
import { HeaderContainer, HeroText, Tagline, TypeText } from "./style"
import TypeWriter from "../typeWriter"
import Wave from "../wave"

const texts = [
  " For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. - John 3:16",
  "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is--his good, pleasing and perfect will. - Romans 12:2",
  "And behold, I am coming quickly, and My reward is with Me, to give to every one according to his work. - Revelation 22:12",
]

const LandingComponent = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <HeroText>Pentecostal Church of Christ</HeroText>
        <Tagline> - the junction of the living God!</Tagline>
        <TypeText>
          {" "}
          <Wave>
            <span aria-hidden>✍️</span>
          </Wave>
          <TypeWriter texts={texts} />
        </TypeText>
      </HeaderContainer>
    </React.Fragment>
  )
}

export default LandingComponent
