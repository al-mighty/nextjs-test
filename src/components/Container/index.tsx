import React from "react";
import styled from "styled-components";

export const StyledContainer = styled.div`
    padding:16px;
    background:white;
    max-width:913px;
    margin: 16px 16px 0 16px;
`

const Container = (props: any) => {
    <StyledContainer>{props.children}</StyledContainer>
}

export default Container;