import React from "react";
import { techIcons } from "../../utils/data";
import { SvgIcon } from "@mui/material";

export default function TechIcon( props ) {
    const { tech } = props;
    const thisIcon = techIcons[ tech ];
    if( thisIcon && !(thisIcon==='') ) {
        return ( <></> );
    }
    return ( <>
        <SvgIcon inheritViewBox>{ techIcons[ tech ] }</SvgIcon>
    </> );
}