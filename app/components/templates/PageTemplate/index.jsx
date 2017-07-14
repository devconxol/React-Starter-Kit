import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3.75rem;
    min-height: 100vh;
    box-sizing: border-box;
`;

const Header = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
`;

const Hero = styled.section``;

const Content = styled.section`
    width: 100%;
    box-sizing: border-box;
    margin: 0rem 1rem;
`;

const Footer = styled.footer`
    margin-top: auto;
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