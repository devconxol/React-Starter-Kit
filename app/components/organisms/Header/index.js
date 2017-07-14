import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {palette} from 'styled-theme';


import PrimaryNavigation from '../../molecules/PrimaryNavigation';
import UserButton from '../../../containers/UserButton';
import Block from 'components/atoms/Block';


const Wrapper = styled(Block)`
    display: flex;
    align-items: center;
    padding: 1em;
    background-color: ${palette(0)};
`;

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
    flex: 1;
`;


const Header = (props) => {
    return (
        <Wrapper opaque  {...props}>
            <StyledPrimaryNavigation  />
            <UserButton history={props.history}/>
        </Wrapper>
    )
};

Header.propTypes = {
    palette: PropTypes.string,
    history: PropTypes.object.isRequired
};

Header.defaultProps = {
    palette: 'primary'
};

export default Header;