import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy', clickAction: ()=>{console.log(`Hi i am copy`)}},
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function TimelineSpeedDialRight() {
  return (
        <SpeedDial
          ariaLabel="TimelineSpeedDialRight"
          icon={<SpeedDialIcon />}
          direction="right"
          sx={{
            position: "absolute",
            left: "46.375%",
          }}
          
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.clickAction}
            />
          ))}
        </SpeedDial>
  );
}
