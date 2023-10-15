import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const WResExperience = ( { experience } ) => {
  const getLocations = ( expEntry ) => {
    const _titles = expEntry.titles;
    if( _titles.length === 1 ) { return _titles[0].location; }
    const resultArray = [];
    let result = '';
    _titles.forEach( _title => {
      if( !resultArray.includes( _title.location ) ) {
        const _len = resultArray.length;
        resultArray.push( _title.location );
        result += ( _len > 0 ? ` / ${ _title.location }` : _title.location );
      }
    });
    return result;
  };
  const ExpItem = ( { _exp } ) => { 
    const _locationString = getLocations( _exp );
    return (
      <>
        <Box textAlign='start'>
          <Typography variant="body1" justifySelf='start'>
            { `${ _exp.company } | ${ _locationString }` }
          </Typography>
          <Stack>
            { _exp.titles.map( ( _title, _i ) => ( 
              <>
                <Box pl={2} pb='0.75em'>
                  <Stack>
                    <Stack direction='row' justifyContent='space-between'>
                      <Typography variant='body2'>{ _title.title }</Typography>
                      <Typography variant='body2'>{ _title.date }</Typography>
                    </Stack>
                    <Box pl={1} pr={1}>
                      <Stack>
                        { _title.responsibilities.map( ( _resp, i_resp ) => (
                          <>
                            <Stack direction='row' justifyContent='start' py='0.15em' lineHeight='1.2em'>
                              <Typography variant='p' pr={1}>{`• `}</Typography>
                              <Typography variant='p' pr={1}>{ _resp }</Typography>
                            </Stack>
                          </>
                        ) ) }
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </> 
            ) ) }
          </Stack>
        </Box>
      </>
    ); 
  };
  return ( <>
    <Typography variant="h6" textAlign='start' borderBottom='1px solid black' ml={0} mt={2} mb={1}>RELATED EXPERIENCE</Typography>
    <Box pb={3} pr={1}>
      { experience.map( ( exp, i ) => (
        <Box key={`exp-item-${ i }`} pt='0.5em' pl={1}>
          <ExpItem _exp={exp}/>
        </Box>
      ) ) }
    </Box>
  </> );
}

export default WResExperience;