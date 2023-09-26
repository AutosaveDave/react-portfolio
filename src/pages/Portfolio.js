import React, { useState } from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard/index.js";
import mapEditorImage from '../utils/projectScreenshots/map-editor-screenshot.png';
import whispsImage from '../utils/projectScreenshots/Whisps-html-screenshot4B.png';
import weatherImage from '../utils/projectScreenshots/WDscreenshot.png';

const Portfolio = () => {
    const [projects] = useState([
        {
            name: '3D Map Editor',
            description: 'An orthographic 3d map editor for quick, easy creation of game content. ',
            tech: ['React','React-bootstrap','Three.js','React-three-fiber','Firebase Auth','Firestore'],
            link: "https://autosavedave.github.io/map-editor/",
            repo: "https://github.com/AutosaveDave/map-editor",
            imagePath: `url(${ mapEditorImage })`
        },
        {
            name: 'Whisps Overlay',
            description: 'A single Javascript file that allows web developers to easily add lighting effects to their projects by adding the whisps.js script to the body of an HTML document.',
            tech: ['HTML', 'Javascript' ],
            link: "https://autosavedave.github.io/visual-overlays/",
            repo: "https://github.com/AutosaveDave/visual-overlays",
            imagePath: `url(${ whispsImage })`
        },
        {
            name: 'Weather Dashboard',
            description: `A web app that allows users to view the current weather and a five-day forecast for any city using openweathermap.org's API.`,
            tech: ['HTML', 'Javascript', 'CSS' ],
            link: "https://autosavedave.github.io/WeatherDashboard/",
            repo: "https://github.com/AutosaveDave/WeatherDashboard",
            imagePath: `url(${ weatherImage })`
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