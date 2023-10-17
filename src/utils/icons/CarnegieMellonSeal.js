import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as CMUSealSvg } from './cmu-seal-r.svg';

export default function CarnegieMellonSeal() {
    return <SvgIcon component={ CMUSealSvg } inheritViewBox={ true } style={{ height:'100%', width:'100%' }}/>
}