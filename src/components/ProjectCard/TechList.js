import React from "react";
import { Chip, Box } from "@mui/material";
import { techIcons } from "../../utils/data";
import TechChip from "./TechChip";

export default function TechList( props ) {
    const { tech, name } = props;
    return ( <>
        <Box>
            { tech.map( thisTech => (
                    <div key={`tech-div-${name}-${thisTech}`} style={{ display:'inline-flex', padding:'5px', verticalAlign:'middle', }}>
                        <TechChip thisTech={ thisTech }/>
                    </div>
                )
            ) }
        </Box>
    </> );

}