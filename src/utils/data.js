import React from 'react';
import ReactIcon from './icons/ReactIcon';
import MuiIcon from './icons/MuiIcon';
import ReactBootstrapIcon from './icons/ReactBootstrapIcon';
import FirebaseIcon from './icons/FirebaseIcon';
import ThreeJsIcon from './icons/ThreeJsIcon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CarnegieMellonSeal from './icons/CarnegieMellonSeal';
import UPennSeal from './icons/UPennSeal';

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
const cIconStyle = { height: '1.2em', width: '1.2em', verticalAlign: 'middle' }
const cIconSX = { display: { xs: 'none', sm: 'none', md:'inline-block'} }
export const contactIcons = {
    Email: (<EmailIcon style={ cIconStyle } sx={ cIconSX }/>),
    Phone: (<PhoneIcon style={ cIconStyle } sx={ cIconSX }/>),
    Location: (<LocationOnIcon style={ cIconStyle } sx={ cIconSX }/>),
    LinkedIn: (<LinkedInIcon style={ cIconStyle } sx={ cIconSX }/>),
    Github: (<GitHubIcon style={ cIconStyle } sx={ cIconSX }/>),
}

export const resumeData = {
    // -------------------- NAME
    fullName:  'David Coppock',
    tagline: 'Full-Stack Web Developer',
    // -------------------- CONTACT
    contact: {
        Email: 'AutosaveDave@gmail.com',
        //Phone: '',
        Location: 'Enola, PA',
        //LinkedIn: '',
        Github: 'github.com/autosavedave',
    },
    // -------------------- BRAND STATEMENT
    statement:'Experienced scientist and lab manager looking to join your tram as a recently certified FullStack Web Developer with numerous transferrable skills. 20 years of experience making 2D games for PC and mobile have confirmed a lasting interest in this work. Creative thinker with the ability to manage wide-ranging client demands to build innovative, elegant solutions.',
    //statement: `Full-stack web developer with a B.S. in chemistry from Carnegie Mellon University, a certificate in full stack development from University of Pennsylvania LPS Coding Bootcamp, and over 20 years of experience making 2D games for PC and mobile as a hobby. Always looking for innovative, elegant solutions that take into account future plans for any given project.`,
    // -------------------- TECH SKILLS
    skills: {
        Frontend: [
            { id: 'HTML5', description: '' },
            { id: 'CSS', description: '' },
            { id: 'Javascript', description: '' },
            { id: 'JQuery', description: '' },
            { id: 'Bootstrap', description: '' },
            { id: 'Bulma', description: '' },
            { id: 'React', description: '' },
            { id: 'Material UI', description: '' },
            { id: 'three.js', description: '' },
            { id: 'react-three-fiber', description: '' },
        ],
        Backend: [
            { id: 'Node', description: '' },
            { id: 'Express', description: '' },
            { id: 'MySQL', description: '' },
            { id: 'MongoDB', description: '' },
            { id: 'GraphQL', description: '' },
            { id: 'Handlebars', description: '' },
            { id: 'Google Firebase', description: '' },
        ],
        Software: [
            { id: 'Insomnia', description: '' },
            { id: 'Ableton Live', description: '' },
            { id: 'Adobe Animate', description: '' },
            { id: 'Game Maker Studio 2', description: '' },
        ]
    },
    // -------------------- EDUCATION
    education: [
        { 
            degree: 'B.S. in Chemistry', 
            school: 'Carnegie Mellon University', 
            location: 'Pittsburgh, PA',
            date: '2010',
            seal: ( <CarnegieMellonSeal/> ),
        },
        { 
            degree: 'Certificate in full-stack web development', 
            school: 'University of Pennsylvania LPS Coding Bootcamp', 
            location: 'Philadelphia, PA',
            date: '2022',
            seal: ( <UPennSeal/> ),
        },
    ],
    // -------------------- WORK EXPERIENCE
    experience: [
        {
            company: 'GlaxoSmithKline',
            titles: [
                { 
                    title: 'Quality Assurance Inspector', 
                    date: 'Jan. 2020 - May 2020',
                    start: { year: '2020', month: 'January' }, 
                    end: { year: '2020', month: 'May' }, 
                    location: 'Carlisle, PA',
                    responsibilities: [
                        'Conducted inspections of manufacturing equipment before operator use',
                        'Calibrated equipment used in quality assurance procedures',
                        'Sampled and inspected product to ensure cGMP and SOP compliance',
                        'Conducted routine reviews of records to ensure cGMP compliance',
                    ],
                },
            ],
        },
        {
            company: 'B Positive Plasma',
            titles: [
                { 
                    title: 'Assistant Quality Assurance Manager', 
                    date: 'Feb. 2019 - April 2019',
                    start: { year: '2019', month: 'February' }, 
                    end: { year: '2019', month: 'April' }, 
                    location: 'Glassboro, NJ',
                    responsibilities: [
                        'Oversaw the receipt and investigation of over 100 donor and employee concerns',
                        'Wrote audit reports and coordinated corrective action in response to findings',
                        'Coordinated corrective action for a wide range of policy violations for over 50 staff members',
                        'Performed facility, equipment, and staff audits to ensure SOP and cGMP compliance',
                        'Prepared and performed final review of all outbound sample and product shipments: approximately 30,000 units',
                        'Performed calibration and qualification of center equipment',
                    ],
                },
                { 
                    title: 'Assistant Center Manager', 
                    date: 'Sept. 2018 - Feb. 2019',
                    start: { year: '2018', month: 'September' }, 
                    end: { year: '2019', month: 'February' }, 
                    location: 'Cherry Hill, NJ',
                    responsibilities: [
                        'Directly supervised 70-80 full-time medical professionals and administrative staff',
                        'Oversaw the interviewing, hiring, and onboarding of all staff positions',
                        'Managed multiple aspects of staff operations, schedules, training, and performance reviews',
                        'Created Excel VBA macro to simplify and expedite review of plasma collection records',
                        'Handled positive donor test results and counseled donors on positive results',
                        'Reviewed records to ensure FDA, SOP, and cGMP compliance',
                    ],
                },
                { 
                    title: 'Laboratory Coordinator',
                    date: 'April 2018 - Sept. 2018',
                    start: { year: '2018', month: 'April' }, 
                    end: { year: '2018', month: 'September' }, 
                    location: 'Cherry Hill, NJ',
                    responsibilities: [
                       'Supervised 12 laboratory technicians',
                       'Inspected cases of product in accordance regulatory requirements before shipment',
                       'Documented incidents and deviations in the NextGen issue tracking system',
                       'Worked with QA and management to implement improvements in laboratory efficiency',
                       `Trained laboratory technicians and medical assistants on SOP's`,
                       'Performed all B Positive laboratory technician duties',
                    ],
                },
                { 
                    title: 'Laboratory Technician', 
                    date: 'Oct. 2017 - April 2018',
                    start: { year: '2017', month: 'October' }, 
                    end: { year: '2018', month: 'April' }, 
                    location: 'Cherry Hill, NJ',
                    responsibilities: [
                        'Performed quality control on laboratory equipment and walk-in freezer',
                        'Processed collections per PPTA, SOP, and cGMP requirements',
                        'Extracted samples from plasma collections for testing',
                        'Packed plasma bottles and samples for shipment',
                        'Maintained organization of walk-in freezer used for plasma storage',
                    ],
                },
            ],
        },
        {
            company: 'Strange New Methods',
            titles: [
                { 
                    title: 'Independent Game Developer', 
                    date: 'March, 2013 - Oct. 2017',
                    start: { year: '2013', month: 'March' }, 
                    end: { year: '2017', month: 'Oct.' }, 
                    location: 'Philadelphia, PA',
                    responsibilities: [
                        'Oversaw game design from creation to publication for innovative 2D game',
                        'Composed, recorded, and produced music for published games',
                        'Solicited, compiled, and positively utilized user testing feedback',
                        'Designed game systems and mechanics for three games',
                        'Created graphic and audio assets for games',
                        'Developed games for Android, iOS, HTML5, and PC',
                    ]
                },
            ],
        },
        {
            company: 'Clean Harbors Environmental Services Inc.',
            titles: [
                { 
                    title: 'Lab Pack Chemist', 
                    date: 'June 2012 - Feb. 2013',
                    start: { year: '2012', month: 'June' }, 
                    end: { year: '2013', month: 'February' }, 
                    location: 'Bridgeport, NJ',
                    responsibilities: [
                        'Managed hazardous waste transportation and disposal for more than 30 sites',
                        'Acted as lead lab pack chemist on high profile sites; recognized for following site safety standards professionalism',
                        'Segregated hazardous waste by hazard class for lab packs',
                        'Prepared paperwork for transportation of hazardous waste', 
                        'Determined all applicable DOT and EPA waste codes for lab pack items',
                        'Consolidated hazardous waste into bulk containers',
                    ],
                },
            ],
        },
        {
            company: 'Emory University, Environmental Health & Safety Office',
            titles: [
                { 
                    title: 'Environmental Compliance Specialist', 
                    date: 'Oct. 2010 - Feb.2012',
                    start: { year: '2010', month: 'October' }, 
                    end: { year: '2012', month: 'February' }, 
                    location: 'Atlanta, GA',
                    responsibilities: [
                        'Created an emergency preparedness analysis Excel VBA macro',
                        'Collected and classified chemical waste by DOT and EPA waste codes for disposal',
                        'Oversaw the collection and processing of radioactive waste for decay and disposal',
                        'Served in on-call function for emergency response with laboratory spills and exposures',
                        'Performed weekly radiation contamination surveys and weekly inspections for 8 hazardous waste facilities',
                    ],
                },
            ],
        },
    ],
}