import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ReviewChoiceConfirmation from './ReviewChoiceConfirmation';
import ReviewChoiceLoading from './ReviewChoiceLoading';
import ReviewChoiceSuccess from './ReviewChoiceSuccess';
import AudienceDestinationSelector from './AudienceDestinationSelector';
import './ReviewChoice.css';

export default function ReviewChoice() {
    const [open, setOpen] = React.useState(false);
    const [loadingOpen, setLoadingOpen] = React.useState(false);
    const [successOpen, setSuccessOpen] = React.useState(false);
    const [selectedAudience, setSelectedAudience] = React.useState('');
    const [selectedDestination, setSelectedDestination] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    const handleLoadingOpen = () => {
        setLoadingOpen(true);
    };
    const handleLoadingClose = () => {
        setLoadingOpen(false);
    };

    const handleSuccessOpen = () => {
        setSuccessOpen(true);
    };
    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };

    const handleProcess = () => {
        handleClose();
        handleLoadingOpen();

        setTimeout(() => {
            handleLoadingClose();
            handleSuccessOpen();
        }, 2000);
    };

    const handleSelection = (audience, destination) => {
      setSelectedAudience(audience);
      setSelectedDestination(destination);
      handleOpen();
  };

  return (
    <div>
      <AudienceDestinationSelector onSelection={handleSelection} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="modal-box">
          <h2 id="parent-modal-title" style={{ textAlign: 'center' }}>Double check your selection data</h2>
          <CancelOutlinedIcon
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 20,
                top: 15,
                color: (theme) => theme.palette.grey[500],
                cursor: 'pointer',
            }}
        ></CancelOutlinedIcon>
          <div id='page1'>
          <p id="parent-modal-description" style={{ textAlign: 'center' }}>
            Please double-check your data. Ensure audience is correct
          </p>
          <div className='container'>
            <div className="box box1">
                <h2>Audience</h2>
                <ul>
                    <li><p>{selectedAudience}</p></li>
                </ul>
            </div>
            <div className="box box2">
                <h2>Destination</h2>
                <ul>
                    <li><p>{selectedDestination}</p></li>
                </ul>
            </div>
          </div>
          </div>
          <ReviewChoiceConfirmation onProcess={handleProcess} onClose={handleClose}/>
        </Box>
      </Modal>
      <ReviewChoiceLoading open={loadingOpen} handleClose={handleLoadingClose} />
      <ReviewChoiceSuccess open={successOpen} onClose={handleSuccessClose} />
    </div>
  );
}
