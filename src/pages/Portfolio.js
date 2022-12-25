import React, { useState } from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard/index.js";


const Portfolio = () => {
    const [projects] = useState([
        {
            name: '----**PROJECT1**----',
            description: '----**DESCR**----',
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT2**----',
            description: '----**DESCR**----',
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT3**----',
            description: '----**DESCR**----',
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT4**----',
            description: '----**DESCR**----',
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT5**----',
            description: '----**DESCR**----',
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT6**----',
            description: '----**DESCR**----',
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
    ]);

    return <div>
        <Container maxWidth="xl">
            <Paper elevation={3} sx={{pb:4, pt:2, minWidth:"sm", minHeight:"600px", maxWidth:"xl"}}>
                <><Typography variant="h4">Portfolio</Typography></>
                <br/>
                <Container maxWidth='95%'>
                    <Grid container 
                        spacing={2} 
                        columns={{ xs: 1, sm: 2, md: 3 }}
                        sx={{alignItems: 'center', justifyContent: 'space-evenly'}}
                    >
                            {projects.map((project, i) => (
                                <Grid item
                                    xs={1} sm={1} md={1} 
                                    key={"projectGrid" + i}
                                >
                                    <ProjectCard
                                        project={project}
                                        key={"project" + i}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Container>
            </Paper>
        </Container>
    </div>;
}

export default Portfolio;