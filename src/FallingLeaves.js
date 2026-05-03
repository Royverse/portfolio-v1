import React from 'react';
import './Assets/FallingLeaves.css';

const FallingLeaves = () => {
    // 18 leaves as requested for an organic, lush feel
    const leaves = Array.from({ length: 18 });

    return (
        <div id="leaves">
            {leaves.map((_, index) => (
                <i key={index}></i>
            ))}
        </div>
    );
};

export default FallingLeaves;
