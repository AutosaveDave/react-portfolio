import React from 'react';
import ReactIcon from './icons/ReactIcon';
import MuiIcon from './icons/MuiIcon';
import ReactBootstrapIcon from './icons/ReactBootstrapIcon';
import FirebaseIcon from './icons/FirebaseIcon';

export const techIcons = {
    'React': (<ReactIcon/>),
    'React-bootstrap': (<ReactBootstrapIcon/>),
    'Three.js': (<></>),
    'React-three-fiber': (<></>),
    'Firebase Auth': (<></>),
    'Firestore': (<FirebaseIcon/>),
    'Mui': (<MuiIcon/>),
    default: (<></>)
}