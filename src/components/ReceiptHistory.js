import React from 'react';
import styled from 'styled-components';

export default function ReceiptHistory() {
    return (
        <Wrapper>
            <div className='history-header'>History</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 30px;

.history-header {
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
}

`