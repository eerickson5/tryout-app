import React from 'react';

const TryoutVerticalCard = ({ title, description, imageUrl }) => {
    console.log("hello")
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default TryoutVerticalCard;