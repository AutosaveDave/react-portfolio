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
    statement: `Full-stack web developer with a B.S. in chemistry from Carnegie Mellon University, a certificate in full stack development from University of Pennsylvania LPS Coding Bootcamp, and over 20 years of experience making 2D games for PC and mobile as a hobby. Always looking for innovative, elegant solutions that take into account future plans for any given project.`,
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
        },
        { 
            degree: 'Certificate in full-stack web development', 
            school: 'University of Pennsylvania LPS Coding Bootcamp', 
            location: 'Philadelphia, PA',
            date: '2022'
        },
    ],
    // -------------------- WORK EXPERIENCE
    experience: [
        {
            company: 'GlaxoSmithKline',
            titles: [
                { 
                    title: 'Quality Assurance Inspector', 
                    start: { year: '2020', month: 'January' }, 
                    end: { year: '2020', month: 'May' }, 
                    location: { city: 'Carlisle', state: 'PA' },
                    responsibilities: [
                        'Conducted inspections of manufacturing equipment before operator use',
                        'Calibrated equipment used in quality assurance procedures',
                        'Sampled and inspected product to ensure cGMP compliance',
                        'Conducted routine reviews of records to ensure cGMP compliance',
                        'Kept detailed records of inspections, test results, and record reviews to ensure cGMP compliance',
                    ]
                },
            ],
        },
        {
            company: 'B Positive Plasma',
            titles: [
                { 
                    title: 'Assistant Quality Assurance Manager', 
                    start: { year: '2019', month: 'February' }, 
                    end: { year: '2019', month: 'April' }, 
                    location: { city: 'Glassboro', state: 'NJ' },
                    responsibilities: [
                        'Performed final review of all records to ensure SOP and regulatory compliance',
                        'Conducted staff training for SOP updates',
                        'Performed final review of all outbound sample and product shipments',
                        'Investigated concerns related to donor and product safety',
                        'Performed final review of outbound correspondence with consignee',
                        'Performed facility, equipment, and staff audits to ensure SOP and regulatory compliance',
                        'Wrote audit reports including recommendations for corrective action',
                        'Coordinated corrective action with management in response to audit findings',
                        'Performed calibration and qualification of center equipment',
                        'Prepared and performed shipment of plasma products',
                        'Managed center reagent inventory lot number control',
                    ],
                },
                { 
                    title: 'Assistant Center Manager', 
                    start: { year: '2018', month: 'September' }, 
                    end: { year: '2019', month: 'February' }, 
                    location: { city: 'Cherry Hill', state: 'NJ' },
                    responsibilities: [
                        'Reviewed records to ensure FDA, SOP, and cGMP compliance',
                        'Counseled employees on errors found during record review',
                        'Handled positive donor test results and counseled donors on positive results',
                        'Investigated donor and employee concerns',
                        'Managed staff schedules and time-off requests',
                        `Trained staff on SOP's and conducted portions of new-hire orientation`,
                        'Conducted staff performance reviews and wrote reports detailing each review',
                        'Managed center inventory and ordered new supplies as needed',
                        'Corresponded with consignee regarding any product safety concerns',
                        'Prepared and performed shipment of plasma products',
                        'Created Excel macro to simplify and expedite review of plasma collection records',
                        'Interviewed job applicants for all staff positions',
                    ],
                },
                { 
                    title: 'Laboratory Coordinator', 
                    start: { year: '2018', month: 'April' }, 
                    end: { year: '2018', month: 'September' }, 
                    location: { city: 'Cherry Hill', state: 'NJ' },
                    responsibilities: [
                        'Supervised laboratory technicians',
                        'Delegated daily tasks to laboratory technicians',
                        'Inspected cases of plasma in preparation for shipment',
                        'Created issues in the NextGen issue tracking system to document incidents and accidents',
                        'Worked with QA and management to implement improvements in laboratory efficiency',
                        `Trained laboratory technicians and medical assistants on SOP's`,
                        'Communicated with members of management and QA via email to ensure smooth center operation',
                        'Performed all B Positive laboratory technician duties outlined below',
                    ],
                },
                { 
                    title: 'Laboratory Technician', 
                    start: { year: '2017', month: 'October' }, 
                    end: { year: '2018', month: 'April' }, 
                    location: { city: 'Cherry Hill', state: 'NJ' },
                    responsibilities: [
                        'Processed collections, compensated donors, and processed plasma bottles per FDA, SOP, and cGMP requirements',
                        'Extracted samples from plasma bottles for further testing and inspected such samples',
                        'Packed plasma bottles and samples for shipment',
                        'Maintained organization of walk-in freezer used for plasma storage',
                        'Performed quality control on laboratory equipment and walk-in freezer',
                    ],
                },
            ],
        },
        {
            company: 'Strange New Methods',
            titles: [
                { 
                    title: 'Independent Game Developer', 
                    start: { year: '2013', month: 'March' }, 
                    end: { year: '2017', month: 'October' }, 
                    location: { city: 'Philadelphia', state: 'PA' },
                    responsibilities: [
                        'Designed game systems and mechanics',
                        'Created graphic and audio assets for games',
                        'Developed games for Android, iOS, and PC',
                        'Published games for Android',
                    ]
                },
            ],
        },
        {
            company: 'Clean Harbors Environmental Services Inc.',
            titles: [
                { 
                    title: 'Lab Pack Chemist', 
                    start: { year: '2012', month: 'June' }, 
                    end: { year: '2013', month: 'February' }, 
                    location: { city: 'Bridgeport', state: 'NJ' },
                    responsibilities: [
                        'Traveled to customer sites to pick up hazardous waste',
                        'Prepared paperwork for transportation of hazardous waste',
                        'Segregated waste by hazard class for lab packs',
                        'Determined all applicable EPA waste codes for lab pack items',
                        'Consolidated waste into bulk containers',
                        'Pumped waste out of bulk containers with vacuum tanker trucks',
                        'Established strong working relationships with customers',
                    ],
                },
            ],
        },
        {
            company: 'Emory University, Environmental Health & Safety Office',
            titles: [
                { 
                    title: 'Environmental Compliance Specialist', 
                    start: { year: '2010', month: 'October' }, 
                    end: { year: '2012', month: 'February' }, 
                    location: { city: 'Atlanta', state: 'GA' },
                    responsibilities: [
                        'Collected and classified chemical waste by EPA waste codes for disposal',
                        'Collected and processed radioactive waste for decay and disposal',
                        'Performed weekly radiation contamination surveys in radioactive waste areas',
                        'Performed weekly inspections of multiple hazardous waste facilities',
                        'Responded to emergency calls for laboratory spills, exposures, etc',
                        'Managed emergency response equipment inventories',
                        'Created an emergency preparedness analysis program using Visual Basic',
                        'Certified chemical fume hoods for sufficient airflow',
                        'Created dynamic database for fume hood data using Visual Basic and Excel',
                        'Surveyed incoming packages of radioactive materials for contamination',
                        'Started acid consolidation/neutralization program to save money on lab packs',
                    ],
                },
            ],
        },
        {
            company: 'Carnegie Mellon University, Environmental Health & Safety',
            titles: [
                { 
                    title: 'Safety Technician', 
                    start: { year: '2009', month: 'June' }, 
                    end: { year: '2009', month: 'August' }, 
                    location: { city: 'Pittsburgh', state: 'PA' },
                    responsibilities: [
                        'Handled and disposed of hazardous waste',
                        'Worked with ChemTracker chemical inventory system',
                        'Performed laboratory inspections to ensure regulatory compliance',
                        'Certified chemical fume hoods for sufficient airflow',
                    ],
                },
            ],
        },
        {
            company: 'Carnegie Mellon University, Chemistry Department',
            titles: [
                { 
                    title: 'Undergraduate Research Assistant', 
                    start: { year: '2008' }, 
                    end: { year: '2009' }, 
                    location: { city: 'Pittsburgh', state: 'PA' },
                    responsibilities: [
                        'Prepared samples for use with Stark spectroscopy',
                        'Performed Stark spectroscopy',
                    ]
                },
            ],
            /*
              
            */
        },
    ],
    /*
    
    */
}