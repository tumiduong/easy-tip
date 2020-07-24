import React from 'react';
import styled from 'styled-components';
import ReceiptForm from './ReceiptForm';
import ReceiptHistory from './ReceiptHistory';

export default function Receipt() {
    return (
        <Wrapper>
            <div className='receipt-paper'>
                <ReceiptForm/>
                <ReceiptHistory/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #C2C5BB;
    height: 100vh;
    padding: 100px 0px;

    .receipt-paper {
        background-color: #fff;
        margin: auto;
        width: 500px;
    }
`