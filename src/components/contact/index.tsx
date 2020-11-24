import React, { FC, useState, ChangeEvent } from "react"
import {
  FlexContainer,
  Form,
  ContactDetails,
  InputGroup,
  InputLabel,
  InputField,
  FormHeading,
  TextArea,
  SubmitButton,
} from "./style"
import { InputTypes } from "./types"
import { Spinner } from "../spinner"
import { useSnackbar } from "notistack"

const INITIAL_STATE = {
  fullName: "",
  phoneNumber: "",
  address: "",
  message: "",
}

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactUs: FC = () => {
  const [input, setInput] = useState<InputTypes>(INITIAL_STATE)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const snackbar = useSnackbar()

  const FormInput = [
    {
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
      name: "fullName",
      onChange: e => handleChange(e),
    },
    {
      type: "number",
      placeholder: "Phone Number",
      label: "Phone Number",
      name: "phoneNumber",
      onChange: e => handleChange(e),
    },
    {
      type: "text",
      placeholder: "Resident Address",
      label: "Resident Address",
      name: "address",
      onChange: e => handleChange(e),
    },
  ]
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...input,
      }),
    })
      .then(() => {
        setIsLoading(false)
        snackbar.enqueueSnackbar(
          "We have received your message, you'll hear from us soon.",
          {
            variant: "success",
            autoHideDuration: 3000,
          }
        )
        setInput({ ...INITIAL_STATE })
      })
      .catch(error => {
        alert(error)
        setIsLoading(false)
        snackbar.enqueueSnackbar(
          "Something went wrong, please resend the message.",
          {
            variant: "error",
            autoHideDuration: 3000,
          }
        )
      })
  }

  return (
    <React.Fragment>
      <FlexContainer>
        <ContactDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          explicabo iste odit voluptates voluptas ut eaque consequuntur cumque
          est recusandae, quod qui inventore dolor consequatur, numquam quisquam
          minus, id ad! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga explicabo iste odit voluptates voluptas ut eaque consequuntur
          cumque est recusandae, quod qui inventore dolor consequatur, numquam
          quisquam minus, id ad!
        </ContactDetails>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <FormHeading>Send us a Message!</FormHeading>
          {Array.isArray(FormInput) && FormInput.length > 0
            ? FormInput.map((input, index) => {
                return (
                  <InputGroup key={index}>
                    <InputLabel htmlFor={input.name}>{input.label}</InputLabel>
                    <InputField
                      type={input.type}
                      required
                      placeholder={input.placeholder}
                      name={input.name}
                      id={input.name}
                      onChange={input.onChange}
                    />
                  </InputGroup>
                )
              })
            : null}
          <InputGroup>
            <InputLabel htmlFor="message">Message</InputLabel>
            <TextArea
              type="text"
              required
              placeholder="Resident address"
              name="message"
              onChange={handleChange}
              id="message"
            />
          </InputGroup>
          <SubmitButton type="submit">
            {isLoading ? <Spinner /> : "Send"}
          </SubmitButton>
        </Form>
      </FlexContainer>
    </React.Fragment>
  )
}

export default ContactUs
