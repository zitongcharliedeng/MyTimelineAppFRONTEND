import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import EventCard from './EventTimelineComponents/EventCard';
import TimelineSpeedDialRight from './EventTimelineComponents/TimelineSpeedDialRight';
import templateEvent from './EventTimelineHelpers/templateEvent';
import axios from 'axios';

export default function EventTimeline(props) {
    const [eventlist, setEventlist] = React.useState([templateEvent(1)])
   
    React.useEffect((() => {
      const getEventlistBackend = async () => {
        try{
          const response = await axios.post(`/eventlists/:${props.currentUser.id}`, {params: {user: props.currentUser}})
          console.log(response)
        } catch (error) {
          console.log(error);
        }
      }
        getEventlistBackend()
      })
      , [props.currentUser]
    )

    React.useEffect((() => {
        const updateEventlistBackend = async () => {
          try{
            const response = await axios.put(`/eventlists/:${props.currentUser.id}`, {eventlist: {eventlistInJson: JSON.stringify(eventlist)}, user: props.currentUser})
            console.log(response.data.alert)
          } catch (error) {
            console.log(error);
          }
        }
        updateEventlistBackend()
      })
    )

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
    <div className='timelinePage'>
      <h2> Remember to login to autosave your timeline to your account!</h2>
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
    </div>
  );
}