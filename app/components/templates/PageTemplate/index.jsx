import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 100vh;
    box-sizing: border-box;
`;

const Header = styled.header`
    position: fixed;
    top: 0;
`;

const Hero = styled.section``;

const Content = styled.section`
    width: 100%;
    box-sizing: border-box;
`;

const Footer = styled.footer`
    margin-top: auto
`;



const PageTemplate = ({header, hero, children, footer}) => {
    return (
        <Wrapper>
            <Header>{header}</Header>
            {hero && <Hero>{hero}</Hero>}
            <Content> {children} </Content>
            <Footer> {footer} </Footer>
        </Wrapper>
    )
};


PageTemplate.propTypes = {
    header: PropTypes.node.isRequired,
    hero: PropTypes.node,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node
};


export default PageTemplate;