import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import EventCard from './EventTimelineComponents/EventCard';
import TimelineSpeedDialRight from './EventTimelineComponents/TimelineSpeedDialRight';
import templateEvent from './EventTimelineHelpers/templateEvent';

export default function EventTimeline() {
    const [eventlist, setEventlist] = React.useState([templateEvent(1)])
    console.log(eventlist) 

    const createTimeline = () => {
      return eventlist.map((event) => {return(    
        <TimelineItem>
            <TimelineSeparator>
              <TimelineSpeedDialRight eventlist={eventlist} setEventlist={setEventlist} id={event.id}/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{marginTop: "55px"}}>
              <EventCard id={event.id}
                title={event.title}
                dateandtime={event.dateandtime}
                imageurl={event.image}
                imageupload={event.imageupload}
                shortdescription={event.shortdescription}
                longdescription={event.longdescription}
                editmode={event.editmode}
                eventlist={eventlist}
                setEventlist={setEventlist}
              />
            </TimelineContent>
        </TimelineItem>
        )})
    }

  return (
    <Timeline position="alternate" sx={{ maxWidth: "800px", margin: "auto" }}>
      {createTimeline()}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineSpeedDialRight eventlist={eventlist} setEventlist={setEventlist} id={eventlist.length+1}/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{marginTop: "55px"}}>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}