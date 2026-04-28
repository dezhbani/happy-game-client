import React from 'react';

const VisibleIcon = ({ visiblity = false, containerClass="", classes="", ...props }) => {
    return (
        <div {...props} className={containerClass}>
            {

                visiblity ?
                    <svg className={`${classes} h-6`} width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.94557 10.1681C7.41849 9.64191 7.09766 8.92691 7.09766 8.12482C7.09766 6.51791 8.39199 5.22266 9.99799 5.22266C10.7927 5.22266 11.5242 5.54441 12.0422 6.07057" stroke="#98A3B8" stroke-opacity="0.58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12.8451 8.64062C12.6324 9.82312 11.7011 10.7563 10.5195 10.9708" stroke="#98A3B8" stroke-opacity="0.58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.09911 13.0145C3.64436 11.8724 2.41236 10.204 1.51953 8.1241C2.42153 6.03502 3.66178 4.35752 5.1257 3.20619C6.58045 2.05485 8.25887 1.42969 9.9987 1.42969C11.7486 1.42969 13.4261 2.06402 14.89 3.2236" stroke="#98A3B8" stroke-opacity="0.58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.8241 5.24023C17.4548 6.07807 18.0094 7.04515 18.4759 8.12407C16.6729 12.3013 13.4865 14.8176 9.99678 14.8176C9.2057 14.8176 8.42561 14.6892 7.67578 14.439" stroke="#98A3B8" stroke-opacity="0.58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17.229 0.894531L2.76953 15.354" stroke="#98A3B8" stroke-opacity="0.58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg> :
                    <svg className={`${classes} h-6`} width="22" height="24" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M11.9994 10.5886C10.6694 10.5886 9.58838 11.6706 9.58838 13.0006C9.58838 14.3296 10.6694 15.4106 11.9994 15.4106C13.3294 15.4106 14.4114 14.3296 14.4114 13.0006C14.4114 11.6706 13.3294 10.5886 11.9994 10.5886ZM11.9994 16.9106C9.84238 16.9106 8.08838 15.1566 8.08838 13.0006C8.08838 10.8436 9.84238 9.08862 11.9994 9.08862C14.1564 9.08862 15.9114 10.8436 15.9114 13.0006C15.9114 15.1566 14.1564 16.9106 11.9994 16.9106Z" fill="#98A3B8" fill-opacity="0.58"></path>
                            <g>
                                <mask maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="18">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.94751H21.9998V21.0525H2V4.94751Z" fill="white"></path>
                                </mask>
                                <g mask="url(#mask0_33437_4760)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.56975 12.9998C5.42975 17.1088 8.56275 19.5518 11.9998 19.5528C15.4368 19.5518 18.5697 17.1088 20.4298 12.9998C18.5697 8.89177 15.4368 6.44877 11.9998 6.44777C8.56375 6.44877 5.42975 8.89177 3.56975 12.9998ZM12.0017 21.0528H11.9978H11.9967C7.86075 21.0498 4.14675 18.1508 2.06075 13.2958C1.97975 13.1068 1.97975 12.8928 2.06075 12.7038C4.14675 7.84977 7.86175 4.95077 11.9967 4.94777C11.9987 4.94677 11.9987 4.94677 11.9998 4.94777C12.0017 4.94677 12.0017 4.94677 12.0028 4.94777C16.1388 4.95077 19.8527 7.84977 21.9387 12.7038C22.0208 12.8928 22.0208 13.1068 21.9387 13.2958C19.8537 18.1508 16.1388 21.0498 12.0028 21.0528H12.0017Z" fill="#98A3B8" fill-opacity="0.58"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
            }
        </div>
    );
};

export default VisibleIcon;