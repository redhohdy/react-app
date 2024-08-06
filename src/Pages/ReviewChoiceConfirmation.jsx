import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ReviewChoiceConfirmation.css';

function ReviewChoiceConfirmation({onProcess, onClose}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      onClose();
    };
  
    return (
      <React.Fragment>
      <div className="button-container">
        <button className='button-1' onClick={handleOpen}>Continue</button>
      </div>
        <Modal
          open={open}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box className="modal-box-confirmation">
          <h4 id="confirmation-modal-title" style={{ textAlign: 'center' }}>Are you sure to continue?</h4>
          <div id='page2'>
          <p id="confirmation-modal-description" style={{ textAlign: 'center' }}>
              Make sure to audience are correctly
          </p>
          <div className="buttton-container">
            <button className='button-2' onClick={handleClose}>Edit</button>
            <button className='button-2' onClick={onProcess}>Process</button>
          </div>
          </div>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
 
export default ReviewChoiceConfirmation;