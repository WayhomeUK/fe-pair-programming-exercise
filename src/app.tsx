import React from "react";
import styled from "styled-components";
import logo from "components/media/logo.svg";
import { GlobalStyles } from "components/global-styles";
import { PropertyList } from "components/property-list";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Header>
                <LogoImg src={logo} alt="logo" />
                <Heading>Property List</Heading>
            </Header>
            <main>
                <PropertyList />
            </main>
        </>
    );
};

const Header = styled.header`
    display: flex;
`;

const LogoImg = styled.img`
    height: 48px;
`;

const Heading = styled.h1`
    margin: 8px 16px;
`;

export default App;
