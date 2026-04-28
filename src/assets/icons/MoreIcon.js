import React from 'react';

const MoreIcon = ({ stroke = 'currentColor', strokeWidth = 2.5, ...props }) => {
    return (
        <svg
            {...props}
            width="28" 
            height="24" 
            fill="none" 
            stroke={stroke} // Apply stroke color here
            viewBox="0 0 28 24" 
            strokeWidth={strokeWidth} // Apply stroke width here
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="14" cy="12.0002" r="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="5" cy="12.0002" r="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="23" cy="12.0002" r="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default MoreIcon;
