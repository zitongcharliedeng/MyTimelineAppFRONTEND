import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EventCard from './EventCard';
import MultilineTextFields from './MultilineTextFields';
import TimelineSpeedDialRight from '../TimelineSpeedDialRight';

export default function ColorsTimeline() {
    const eventlist = [
        {title: "i borned",
          subheader: "hi",
          image: "{image}",
          typography: "{typography}",
          description: "{description}",
          id: 1},
        {name: 2}, {name: 3}, {name: 4}
      ]

    const displayEventCreationBox = (id) => {
      console.log("display event creation clicked")
      return <MultilineTextFields />
      // return pop up with creation box to create event BEFORE given id (relative button rendered before any given timeline item)
    }

    const CreateTimeline = () => {
        const createdTimeline = eventlist.map((event) => {return(    
                <TimelineItem>
                    <TimelineSeparator>
                      <TimelineSpeedDialRight />
                      {/* <TimelineDot sx={{borderWidth: "10px" }} onClick={() => displayEventCreationBox(event.id)}/>  */}
                      {/* replaced ^ with speeddial */}
                      <TimelineConnector onClick={displayEventCreationBox}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{marginTop: "55px"}}>
                      <EventCard
                        title={event.title}
                        subheader={event.subheader}
                        image={event.image}
                        typography={event.typography}
                        description={event.description}
                      />
                    </TimelineContent>
                </TimelineItem>
        )})
        return( 
          <>
            {createdTimeline}
            <TimelineDot sx={{borderWidth: "10px" }} onClick={() => displayEventCreationBox()}/>
          </>
        )
    }



  return (
    <Timeline position="alternate" sx={{ maxWidth: "800px", margin: "auto" }}>

      <CreateTimeline />

    </Timeline>
  );
}