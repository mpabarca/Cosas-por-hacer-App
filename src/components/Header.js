import React from 'react';

const Header = ({title, actualDate}) => (
    <header>
        <h1 className="text-center">
            {title}
        </h1>
        <h5 className="text-center">{actualDate}</h5>
    </header>
);

export default Header;