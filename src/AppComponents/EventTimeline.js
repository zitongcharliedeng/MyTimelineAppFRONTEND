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
          if (!props.currentUser.id) return
          try{
            const response = await axios.get(`http://localhost:4000/eventlists/${props.currentUser.id}`, {headers: {sessionToken: props.currentUser.sessionToken}})
            setEventlist(JSON.parse(response.data.eventlistInJson))
            } catch (error) {
              console.log(error)
          }
        }
        getEventlistBackend()
      }), [props.currentUser])

    React.useEffect((() => {
        const updateEventlistBackend = async () => {
          if (!props.currentUser.id) return
          try{
            const response = await axios.put(`http://localhost:4000/eventlists/${props.currentUser.id}`, {eventlist: {eventlistInJson: JSON.stringify(eventlist)}}, {headers: {sessionToken: props.currentUser.sessionToken}})
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
        <TimelineItem key={event.id}>
            <TimelineSeparator>
              <TimelineSpeedDialRight eventlist={eventlist} setEventlist={setEventlist} id={event.id}/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{marginTop: "55px"}}>
              <EventCard id={event.id}
                title={event.title}
                dateAndTime={event.dateAndTime}
                imageUrl={event.image}
                imageupload={event.imageupload}
                shortDescription={event.shortDescription}
                longDescription={event.longDescription}
                editMode={event.editMode}
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