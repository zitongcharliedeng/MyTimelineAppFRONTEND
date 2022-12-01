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

  if (props.editmode === true) { 
    return (
      <Card className={`card_${props.id}`} sx={{width: "400px"}}>
        {console.log(`editing id ${props.id}`)}
        <EventCardEditForm eventlist={props.eventlist} setEventlist={props.setEventlist} id={props.id}/>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={() => {handleMoreVertIconClick(props.id)}}/>
            </IconButton>
          }
          title={props.title}
          subheader={props.subheader}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="Missing Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.typography}
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
              {props.description}
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
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={() => {handleMoreVertIconClick(props.id)}}/>
            </IconButton>
          }
          title={props.title}
          subheader={props.subheader}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="Missing Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.typography}
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
              {props.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
} 
