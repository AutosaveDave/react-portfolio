import React, { useState } from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard/index.js";

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'map-editor',
            description: 'An orthographic 3d map editor for quick, easy creation of game content. ',
            tech: ['React','React-bootstrap','Three.js','React-three-fiber','Firebase Auth','Firestore'],
            link: "https://autosavedave.github.io/map-editor/",
            repo: "https://github.com/AutosaveDave/map-editor",
            imagePath: `url(${"https://github.com/AutosaveDave/map-editor/blob/main/map-editor-screenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT2**----',
            description: '----**DESCR**----',
            tech: [''],
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT3**----',
            description: '----**DESCR**----',
            tech: [''],
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT4**----',
            description: '----**DESCR**----',
            tech: [''],
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT5**----',
            description: '----**DESCR**----',
            tech: [''],
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
        {
            name: '----**PROJECT6**----',
            description: '----**DESCR**----',
            tech: [''],
            link: "https://github.com",
            repo: "https://github.com",
            imagePath: `url(${"https://github.com/dccoppock/WeatherDashboard/blob/main/assets/images/WDscreenshot.png?raw=true"})`
        },
    ]);

    return <div>
        <Container maxWidth="xl">
            <Paper variant="page" elevation={3} sx={{pb:4, pt:2, minWidth:"sm", minHeight:"600px", maxWidth:"xl"}}>
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