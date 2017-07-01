import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';

import Link from '../../atoms/Link';

const Nav = styled.nav`
    
`;

const PrimaryNavigation = (props) => {
    return (
        <Nav {...props}>
            <li><Link  to="/" exact activeClassName="active">Home</Link></li>
            <li><Link  to="/signin" activeClassName="active">Sign In</Link></li>
        </Nav>
    )
};


PrimaryNavigation.propTypes = {
    reverse: PropTypes.bool,
};

export default PrimaryNavigation;