import React from 'react';

const ShareIcon = ({ stroke = 'currentColor', strokeWidth = 2.5, ...props }) => {
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
            <path fillRule="evenodd" clipRule="evenodd" d="M25.75 14.9998L17 7.49976V12.541C12.2738 12.541 7 14.3748 7 22.4998C9.46125 18.5148 13.25 17.4998 17 17.4998V22.4998L25.75 14.9998Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default ShareIcon;