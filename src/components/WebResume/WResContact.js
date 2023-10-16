import React from "react";
import { Box, Typography } from "@mui/material";
import { contactIcons } from "../../utils/data";

const WResContact = ( {contact} ) => {
  const _entries = Object.entries( contact );
  const ContactItem = ( { _key, _value } ) => {
    if( Object.keys( contactIcons ).includes( _key ) ) {
      return (<>
        <div>
          { contactIcons[ _key ] }
          <Typography key={`contact-info-${ _key }`} variant='p' 
              style={{ verticalAlign:'middle', wordWrap: 'break-word' }} 
          > { _value }</Typography>
        </div>
      </>);
    }
    return (<>
      <Typography key={`contact-info-${ _key }`} variant='p' 
          style={{ wordWrap: 'break-word' }}
      >{ _key }: { _value }</Typography>
    </>);
  }
  return <>
    <Typography variant="h6" borderBottom='1px solid black' 
        sx={{ textAlign: { xs: 'center', md: 'start' }, mr: { xs: 0, md: 3 } }}
    >DETAILS</Typography>
    <Box max-width="lg" textAlign='start' pl={0}
        sx={{ textAlign: { xs: 'center', md: 'start' }, mr: { xs: 0, md: 3 } }}
    >
      { _entries.map( ( [ key, value ] ) => (
        <div key={`contact-item-${key}`} style={{ padding: '0.25em 0 0.25em 0' }}>
          <ContactItem _key={key} _value={value}/>
        </div>
      ) ) }
    </Box>
  </>;
}

export default WResContact;