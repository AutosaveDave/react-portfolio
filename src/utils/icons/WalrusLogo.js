import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as WalrusLogoSvg } from './walrusicon-transparent.svg';

export default function WalrusLogo( { hMirror } ) {
    const walrusSx = { alignSelf: 'end', height: '64px', width: '64px', };
    if( hMirror === true ) {
        Object.assign( walrusSx, { 
            transformOrigin: '50% 50%', 
            transform: 'scale(-1,1)', 
            display: { xs: 'flex', md: 'none' },
        } );
    } else {
        Object.assign( walrusSx, { 
            justifySelf: 'start', 
            display: { xs: 'none', md: 'flex' },
        } );
    }
    return <SvgIcon component={ WalrusLogoSvg } inheritViewBox={ true } sx={ walrusSx } />
}