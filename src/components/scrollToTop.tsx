import { useEffect, useState } from "react"
import { FaChevronUp } from "react-icons/fa"
import React from "react"
import styled from "styled-components"

const Container = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme?.colors?.primary};
  color: #fff;
  padding: 12px;
  border-radius: 50%;
  * {
    vertical-align: middle;
  }
  transition: 0.8s;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(10rem)")};
  & > * {
    transition: 0.3s;
  }
  &:hover > * {
    transform: translateY(-5px);
  }
`

const ScrollToTop = ({ location }: any) => {
  const [show, setShow] = useState(false)
  const [disable, setDisable] = useState(false)
  const onScroll = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const router = location
  useEffect(() => {
    if (router?.pathname === undefined) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [router])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const handleRestore = () => {
    if (typeof window === "undefined") {
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <>
      {disable && (
        <Container show={show} onClick={handleRestore}>
          <FaChevronUp />
        </Container>
      )}
    </>
  )
}

export default ScrollToTop
