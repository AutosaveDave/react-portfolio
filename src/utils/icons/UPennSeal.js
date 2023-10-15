import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as UPennSealSvg } from './Shield_of_the_University_of_Pennsylvania.svg';

export default function UPennSeal() {
    // const walrusSx = { alignSelf: 'end', height: '64px', width: '64px', };
    return <SvgIcon component={ UPennSealSvg } inheritViewBox={ true } style={{ height:'100%', width:'100%' }}/>
}