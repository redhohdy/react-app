import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import checklish from '../assets/checklish.png';
import { useNavigate } from 'react-router-dom';
import './ReviewChoiceSuccess.css';

const ReviewChoiceSuccess = ({ open, onClose }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate('/audience-report');
    };
    return (
        <Modal
            open={open}
            aria-labelledby="success-modal-title"
            aria-describedby="success-modal-description"
        >
            <Box className="modal-box-success">
            <img src={checklish} style={{marginBottom:'5px', width:'80px', height:'80px'}}></img>
            <div id="page4">
                <p id="success-modal-description">
                    Audience has been successfully exported!
                </p>
            </div>
                <button className="button-4" onClick={handleClose}>Close</button>
            </Box>
        </Modal>
    );
}

export default ReviewChoiceSuccess;
