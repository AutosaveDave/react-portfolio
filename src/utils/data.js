import React from 'react';
import ReactIcon from './icons/ReactIcon';
import MuiIcon from './icons/MuiIcon';
import ReactBootstrapIcon from './icons/ReactBootstrapIcon';
import FirebaseIcon from './icons/FirebaseIcon';
import ThreeJsIcon from './icons/ThreeJsIcon';

export const techIcons = {
    'React': (<ReactIcon/>),
    'React-bootstrap': (<ReactBootstrapIcon/>),
    'Three.js': (<ThreeJsIcon/>),
    'React-three-fiber': (<ThreeJsIcon/>),
    'Firebase Auth': (<FirebaseIcon/>),
    'Firestore': (<FirebaseIcon/>),
    'Mui': (<MuiIcon/>),
    default: (<></>)
}