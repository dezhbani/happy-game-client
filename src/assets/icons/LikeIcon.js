import React from 'react';

const LikeIcon = ({ stroke = 'currentColor', strokeWidth = 2.5, ...props }) => {
    return (
        <svg
            {...props}
            width="31"
            height="30"
            viewBox="0 0 31 30"
            xmlns="http://www.w3.org/2000/svg"
            stroke={stroke} // Apply stroke color here
            strokeWidth={strokeWidth} // Apply stroke width here
            fill="none" // Usually icons have fill="none" when stroke is the primary visual
        >
            <rect
                x="6.125"
                y="14.3748"
                width="3.75"
                height="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.375 24.3748H21C22.1715 24.3746 23.1858 23.5609 23.44 22.4173L24.8288 16.1673C24.9935 15.4262 24.8126 14.6505 24.3371 14.0587C23.8615 13.467 23.1429 13.1234 22.3837 13.1248H17.375V8.12476C17.375 6.74404 16.2557 5.62476 14.875 5.62476L12.375 13.1248"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default LikeIcon;
