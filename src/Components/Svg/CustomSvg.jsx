import React from 'react';

const CustomSvg = ({fill='#fff', viewBox, children, className}) => {
    return <svg viewBox={viewBox} fill={fill} className={className}>
        {children}
    </svg>
};

export default CustomSvg;