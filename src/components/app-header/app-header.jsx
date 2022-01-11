import React from "react";
// import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'}
    }
    h2,a {
        font-size: 1.2rem;
        color: grey !important;
        cursor: pointer;
        :hover {
            color: black !important;
        }
    }
`

const HOneBlock = styled.h1`
   opacity: 1;
    `

const HTwoBlock = styled(HOneBlock)`
    opacity: 0.8;
`

export const AppHeader = ({liked, posts}) => {
    return (
        <Header colored>
            <HOneBlock>Il Mar</HOneBlock>
            <HTwoBlock as='a'>Понравилось: {liked}, всего: {posts} </HTwoBlock>
        </Header>
    )
}