import React from 'react';
import styled from 'styled-components';

import PrimaryNavigation from '../../molecules/PrimaryNavigation';
import Block from 'components/atoms/Block';


const Wrapper = styled(Block)`
    padding: 1em
`;

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
    flex: 1
`;


const Header = (props) => {
    return (
        <Wrapper opaque reverse {...props}>
            <StyledPrimaryNavigation reverse />
        </Wrapper>
    )
};

export default Header;