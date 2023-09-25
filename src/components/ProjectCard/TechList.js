import React from "react";
import { Chip, Box } from "@mui/material";
import { techIcons } from "../../utils/data";

export default function TechList( props ) {
    const { tech, name } = props;
    return ( <>
        <Box>
            { tech.map( thisTech => (
                    <div key={`tech-div-${name}-${thisTech}`} style={{ display:'inline-flex', padding:'5px', verticalAlign:'middle', }}>
                        <Chip variant='techListItem'
                            icon={techIcons[thisTech]} label={thisTech}
                        />
                    </div>
                )
            ) }
        </Box>
    </> );

}