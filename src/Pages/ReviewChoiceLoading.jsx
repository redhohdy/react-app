import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import { OrbitProgress } from 'react-loading-indicators';
import './ReviewChoiceLoading.css';

const ReviewChoiceLoading = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="loading-modal-title"
            aria-describedby="loading-modal-description"
        >
            <Box className="modal-box-loading">
            <OrbitProgress variant="track-disc" color="#000000" size="medium" speedPlus="-2" text="" textColor="" />
                <h3 id="loading-modal-title">Please wait a moment</h3>
                <p id="loading-modal-description">
                    We are processing to export audience
                </p>
            </Box>
        </Modal>
    );
}

export default ReviewChoiceLoading;
