import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './ReviewChoice.css';

const audiences = ['Audience', 'Purchase', 'All Users', 'Android Audience', 'IOS Audience'];
const destinations = ['GAM (Google Ads Manager)'];

export default function AudienceDestinationSelector({ onSelection }) {
    const [selectedAudience, setSelectedAudience] = useState('');
    const [selectedDestination, setSelectedDestination] = useState('');

    const handleAudienceChange = (e) => {
        setSelectedAudience(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setSelectedDestination(e.target.value);
    };

    const handleConfirmSelection = () => {
        onSelection(selectedAudience, selectedDestination);
    };

    return (
        <div className="selection-container">
            <h2>Select Audience and Destination</h2>
            <div className="selection-box">
                <label htmlFor="audience-select">Audience:</label>
                <select id="audience-select" value={selectedAudience} onChange={handleAudienceChange}>
                    <option value="" disabled>Select an audience</option>
                    {audiences.map((audience, index) => (
                        <option key={index} value={audience}>{audience}</option>
                    ))}
                </select>
            </div>
            <div className="selection-box">
                <label htmlFor="destination-select">Destination:</label>
                <select id="destination-select" value={selectedDestination} onChange={handleDestinationChange}>
                    <option value="" disabled>Select a destination</option>
                    {destinations.map((destination, index) => (
                        <option key={index} value={destination}>{destination}</option>
                    ))}
                </select>
            </div>
            <Button variant="contained" onClick={handleConfirmSelection} disabled={!selectedAudience || !selectedDestination}>
                Confirm Selection
            </Button>
        </div>
    );
}
