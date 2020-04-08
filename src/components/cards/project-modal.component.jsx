import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ProjectCard from './project-card.component';
import './project-modal.style.scss'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProjectModal = (props) => {
  const [main, setMain] = React.useState(props.modal.main[0]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleMain = index => {
    setMain(props.modal.main[index])
  }

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <span onClick={handleOpen}>
        <ProjectCard title={props.title} imageUrl={props.imageURL} status={props.status} location={props.location} />
      </span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className='modal'>
            <div className='hero-image' style={{backgroundImage:`url(${main})`}}>

            </div>
            <div className='section-right'>
              <div className='modal-title'><h2>{props.title}</h2></div>
              <div className='images-grid'>
              {
                props.modal.tile.map(
                  (tile, index) => 
                    <div 
                    className='modal-tile' 
                    style={{ backgroundImage:`url(${tile})`}} 
                    onClick={()=>handleMain(index)}></div>
                  )
              }

              </div>
              <div className='description'></div>
            </div>

            {/* <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProjectModal