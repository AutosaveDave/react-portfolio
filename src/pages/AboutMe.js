import React from "react";
import { Container, Paper, Typography } from "@mui/material";

const AboutMe = () => {
  return <div>
    <Container max-width="lg">
        <Paper max-width="lg" variant="page" elevation={3} min-width="xs" min-height="600px" sx={{padding:4}}>
            <Typography variant="h4" >About Me</Typography>
            <br/>
            <Typography variant="body1">My name is Dave, and I write code.</Typography>
            <br/>
            <Typography variant="body1" textAlign='start'>
              Full-stack web developer with a B.S. in chemistry from Carnegie Mellon University who has been making 2D games for PC and mobile as a hobby for over 20 years. 
              Recently earned a certificate in full stack development from University of Pennsylvania LPS Coding Bootcamp and honed new skills in JavaScript, CSS, React.js, and responsive web design. 
              Always looks for innovative, elegant solutions that take into account future plans for any given project. 
              Worked in a team of four to develop a single-page MERN app where users can play an original card game, and single-handedly wrote all the server-side code. 
              I am excited to hit the ground running and contribute my skills and creativity to a fast-paced team.
            </Typography>
        </Paper>
    </Container>
  </div>;
}

export default AboutMe;