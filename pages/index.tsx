import React from 'react';
import {StyledContainer} from "../src/components/Container";



export default function Home() {
    return (
        <StyledContainer>
            <p>long content</p>
            {
                // indicates very long content
                Array.from({length: 100}, (_, index) => (
                    <React.Fragment key={index}>
                        {index % 20 === 0 && index ? 'more' : '...'}
                        <br/>
                    </React.Fragment>
                ))
            }
        </StyledContainer>
    )
}