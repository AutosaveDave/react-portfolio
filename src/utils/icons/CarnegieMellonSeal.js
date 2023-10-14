import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as CMUSealSvg } from './cmu-seal-r.svg';

export default function CarnegieMellonSeal() {
    // const walrusSx = { alignSelf: 'end', height: '64px', width: '64px', };
    return <SvgIcon component={ CMUSealSvg } inheritViewBox={ true }  />
}