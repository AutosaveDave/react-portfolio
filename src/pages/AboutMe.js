import React from "react";
import { Container, Paper, Typography } from "@mui/material";

const AboutMe = () => {
  return <div>
    <Container max-width="lg">
        <Paper max-width="lg" variant="page" elevation={3} min-width="xs" min-height="600px">
            <Typography variant="h4" pt={2}>About Me</Typography>
            <br/>
            <Typography variant="body1">My name is David, and I write code.</Typography>
            <br/>
            <Typography variant="body1">BIO_PLACEHOLDER</Typography>
        </Paper>
    </Container>
  </div>;
}

export default AboutMe;