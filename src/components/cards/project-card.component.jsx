import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import './project-card.scss';

const useStyles = makeStyles({
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  media: {
    width: '100%',
  },
});

const ProjectCard = (props)=> {
  const classes = useStyles();

  return (
    <div className='project-card'>
    <Card className={classes.root}>
      <CardActionArea>
      
        <CardMedia
          component="div"
          alt={props.title}
          height="100%"
          image={props.imageUrl}
          title={props.title}
        >
        <div className='card-cover'>
            <div className='card-description'>
              <h2 className='card-font-h'>{props.title}</h2>
              <div className='card-hover-description'>
                <p className='card-font'>Project Status: {props.status}</p>
                <p className='card-font'>Project Location: {props.location}</p>
              </div>
            </div>
        </div>
        </CardMedia> 
               
      </CardActionArea>
    </Card>
    </div>
  );
}

export default ProjectCard