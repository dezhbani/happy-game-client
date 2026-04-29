import React from 'react';

const SmileIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-dark-gray dark:text-white"
        >
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="8" x2="9.01" y2="10" />
            <line x1="15" y1="8" x2="15.01" y2="10" />
        </svg>
    );
};

export default SmileIcon;