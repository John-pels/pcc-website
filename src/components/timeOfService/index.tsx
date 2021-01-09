import React from "react"
import {
  ServiceHeading,
  TimeOfServiceContainer,
  Table,
  TableHead,
  TableData,
  TableRow,
  TableBody,
} from "./style"

const DATA = [
  {
    day: "Monday",
    program: "Bible Study ",
    time: "6:00PM - 8:30PM",
  },
  {
    day: "Wednesday",
    program: "Revival Hour",
    time: "6:00PM - 8:00PM",
  },
  {
    day: "Thursday",
    program: "Choir Rehearsal",
    time: "6:00PM - 8:00PM",
  },
  {
    day: "Friday",
    program: "Revival Hour",
    time: "6:00PM - 8:30PM",
  },
  {
    day: "Sunday",
    program: "Sunday Worhsip",
    time: "7:00AM - 11:00PM",
  },
  {
    day: "19th Monthly",
    program: "Anointing Service",
    time: "6:00PM Prompt",
  },
]
const TimeOfService = () => {
  return (
    <React.Fragment>
      <TimeOfServiceContainer>
        <ServiceHeading>Day and Time of Service</ServiceHeading>

        <Table>
          <TableHead>
            <TableRow>
              <TableData>Day</TableData>
              <TableData>Program</TableData>
              <TableData>Time</TableData>
            </TableRow>
          </TableHead>
          <TableBody>
            {DATA.map(({ day, program, time }, index) => (
              <TableRow key={index} style={{ padding: "1rem" }}>
                <TableData>{day}</TableData>
                <TableData>{program}</TableData>
                <TableData>{time}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TimeOfServiceContainer>
    </React.Fragment>
  )
}

export default TimeOfService
