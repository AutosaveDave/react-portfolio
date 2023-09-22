import React, { useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import ContactBox from "../components/ContactBox/index.js";
const Contact = () => {
    
  return <div>
    <Container max-width="lg">
        <Paper variant="page" max-width="md" elevation={3} mt={2} min-width="sm" min-height="600px">
            <><Typography variant="h4" pt={2}>Contact</Typography></>
              <br/>
                <ContactBox />
            <br/>
            {/* <Typography variant="body2">My name is David, and I write code.</Typography> */}
            {/* <br/> */}
            
        </Paper>
    </Container>
  </div>;
}

export default Contact;