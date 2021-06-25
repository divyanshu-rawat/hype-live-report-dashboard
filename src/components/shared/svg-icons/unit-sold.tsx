/* eslint-disable max-len */
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const UnitSold: React.FC = ({ title = 'UnitSold', ...rest }: Props) => (
    <svg viewBox="0 0 68 68" fill="none" aria-label={title} xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path
            d="M65.249 32.0333L35.8157 2.59999C34.5823 1.36666 32.8823 0.666656 31.1157 0.666656H7.21568C3.54901 0.666656 0.549011 3.66666 0.549011 7.33332V31.2333C0.549011 33 1.24901 34.7 2.51568
            35.9333L31.949 65.3667C34.549 67.9667 38.7823 67.9667 41.3824 65.3667L65.2824 41.4667C67.8824 38.8667 67.8824 34.6667 65.249 32.0333ZM36.649 60.6667L7.21568 31.2333V7.33332H31.1157L60.549 36.7667L36.649 60.6667Z"
            fill="#0CA84D"
            fillOpacity="0.25"
        />
        <title>{title}</title>
        <path d="M15.549 20.6667C18.3104 20.6667 20.549 18.4281 20.549 15.6667C20.549 12.9052 18.3104 10.6667 15.549 10.6667C12.7876 10.6667 10.549 12.9052 10.549 15.6667C10.549 18.4281 12.7876 20.6667 15.549 20.6667Z" fill="#0CA84D" fillOpacity="0.25" />
    </svg>
);