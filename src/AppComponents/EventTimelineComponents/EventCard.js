import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EventCardEditForm from './EventCardComponents/EventCardEditForm';
import dayjs from 'dayjs';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function EventCard(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMoreVertIconClick = () => {
    console.log(`handleMoreVertIconClick for id ${props.id}`)
  }

  if (props.editMode === true) { 
    return (
      <Card className={`card_${props.id}`} sx={{width: "400px"}}>
        <EventCardEditForm eventlist={props.eventlist} setEventlist={props.setEventlist} id={props.id} imageupload={props.imageupload} updateEventlistBackend={props.updateEventlistBackend}/>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => {handleMoreVertIconClick(props.id)}}>
              <MoreVertIcon/>
            </IconButton>
          }
          title={props.title}
          subheader={props.dateAndTime}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.imageUrl}
          alt="Missing Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.shortDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              {props.longDescription}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
  } else {
    return(
      <Card className={`card_${props.id}`}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => {handleMoreVertIconClick(props.id)}}>
              <MoreVertIcon/>
            </IconButton>
          }
          title={props.title}
          subheader={dayjs(props.dateAndTime).format('DD/MM/YYYY | HH:mm:ss | [UTC] Z')}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.imageUrl}
          alt="Missing Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.shortDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              {props.longDescription}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
} 
