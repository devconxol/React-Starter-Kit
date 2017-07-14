import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {palette} from 'styled-theme';

import Link from '../../atoms/Link/index';

const Nav = styled.nav`
    display:flex;
    
    list-style:none;
    > :not(:first-child){
        margin-left:1em;
    };
    text-align:center;
    align-items:center;
`;

const PrimaryNavigation = (props) => {
    return (
        <Nav {...props}>
            <li><Link palette='white'  to="/" exact activeClassName="active">Acceuil</Link></li>
            <li><Link palette='white'  to="/about" activeClassName="active">Nous Connaitre</Link></li>
            <li><Link palette='white'  to="/blog" activeClassName="active">Blog</Link></li>
        </Nav>
    )
};


PrimaryNavigation.propTypes = {
    reverse: PropTypes.bool
};


export default PrimaryNavigation;