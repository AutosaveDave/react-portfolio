import React from 'react';
import ReactIcon from './icons/ReactIcon';
import MuiIcon from './icons/MuiIcon';
import ThreeJsIcon from './icons/ThreeJsIcon';
import FirebaseIcon from './icons/FirebaseIcon';
import ReactBootstrapIcon from './icons/ReactBootstrapIcon';

export default function TechIcon( props ) {
    const { tech } = props;
    switch( tech ) {
    case 'React': return (<ReactIcon/>);
    case 'React-bootstrap': return (<ReactBootstrapIcon/>);
    case 'Three.js': return (<ThreeJsIcon/>);
    case 'React-three-fiber': return(<></>);
    case 'Firebase Auth': return (<FirebaseIcon/>);
    case 'Firestore': return (<FirebaseIcon/>);
    case 'Mui': return (<MuiIcon/>);
    default: return (<></>);
    }
}