import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AddBoxIcon from '@mui/icons-material/AddBox';
import templateEvent from '../EventTimelineHelpers/templateEvent';

export default function TimelineSpeedDialRight(props) {
  const {id, eventlist, setEventlist} = props

  const addEvent = () => {
      const eventlistLocal = [...eventlist]
      if (id === (eventlist.length+1)) {
        eventlistLocal.push(templateEvent(eventlist.length + 1))
      } else {
        eventlistLocal.splice((eventlist.findIndex(object => object.id === id)), 0, templateEvent(eventlist.length + 1))
      }
      setEventlist(eventlistLocal)
    }

  const actions = [
    { 
      icon: <AddBoxIcon />, 
      name: 'Add a new event here', 
      clickAction: addEvent,
    },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

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
