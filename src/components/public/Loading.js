import React from 'react';

// Images
import Logo from '../../assets/Logo.svg'

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-white dark:bg-dark-gray'>
            <img className='animate-pulse h-12' src={Logo} />
            <div class="card">
                <div class="loader">
                    <p>Loading</p>
                    <div class="words">
                        {
                            ["games", "trailers", "news", "reviews", "guides"].map(word => <span class="word">{word}</span>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Loading;