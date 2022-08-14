import React, { useMemo } from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    if (to[0] === '.') {
        to = to.slice(1)
    }
    let match = useMatch(to)

    return (
        <Link
            to={to}
            style={{
                textDecoration: match ? 'underline' : 'none'
            }}
        >{children}
        </Link>
    );
};

export default CustomLink;