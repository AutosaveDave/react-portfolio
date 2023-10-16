import React from "react";
import { Container, Paper, Box } from "@mui/material";
import WebResume from "../components/WebResume";

const Resume = () => {
  return <>
    <Container maxWidth='lg'
        sx={{ width: { xs: '100%', sm: '95%', md: '90%' }, px:0 }}
    >
      <Box width='100%' backgroundColor='#ffffff' mb={3} mx={0}>
        <WebResume/>
      </Box>
    </Container>
  </>;
}

export default Resume;