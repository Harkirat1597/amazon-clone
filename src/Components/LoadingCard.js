import React from 'react';
import './LoadingCard.css';

const LoadingCard = () => {
    return (
        <>
            <div className="card is-loading" aria-hidden="true"
                style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "400px", padding: "20px"}}
            >
                <div className="image"></div>
                <div className="content">
                    <h2></h2>
                </div>
            </div>
        </>
    );
}

export default LoadingCard;