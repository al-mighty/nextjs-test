import React from 'react';


export default function Home() {
    return (
        <div className={'container'}>
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
        </div>
    )
}