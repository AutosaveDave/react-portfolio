import React from "react";
import { Container, Paper, Box } from "@mui/material";
import WebResume from "../components/WebResume";

const Resume = () => {
  return <div>
    <Container max-width="lg">
        <Box max-width="lg" backgroundColor='#ffffff' mb={3}>
            <WebResume/>
        </Box>
    </Container>
  </div>;
}

export default Resume;