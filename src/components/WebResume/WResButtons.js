import React from "react";
import { Box, Typography, Stack, Button, ButtonGroup } from "@mui/material";
import ResumePdf from '../../utils/docs/AutosaveDaveResume.pdf';

const WResButtons = () => {
    const resumePdfUrl = ResumePdf;
    const handleDownloadPdf = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = resumePdfUrl;
        downloadLink.download = `David Coppock's Resume.pdf`;
        downloadLink.target = '_blank';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    const handleViewPdf = () => {
        const viewLink = document.createElement("a");
        viewLink.href = resumePdfUrl;
        viewLink.target = '_blank';
        document.body.appendChild(viewLink);
        viewLink.click();
        document.body.removeChild(viewLink);
    }

  return <>
    <Box position='fixed' bottom='1.5em' left={'2em'} right={'2em'} zIndex={2} textAlign='center'>
        <ButtonGroup variant='resume' >
            <Button onClick={handleViewPdf}
                
            >View pdf</Button>
            <Button onClick={handleDownloadPdf}
            >Download pdf</Button>
        </ButtonGroup>    
    </Box>
  </>;
}

export default WResButtons;