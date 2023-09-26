import { Chip } from "@mui/material";
import { techIcons } from "../../utils/data";

export default function TechChip( { thisTech } ) {
    let chipIcon = null;
    const chipSx = {};
    if( Object.keys( techIcons ).includes( thisTech ) ) {
        chipIcon = techIcons[ thisTech ];
    } else {
        chipSx.pl = 1;
    }
    return <>
        <Chip variant='techListItem'
            icon={ chipIcon } label={ thisTech }
            sx={chipSx}
        />
    </>
}
