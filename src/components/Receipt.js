import React from 'react';
import styled from 'styled-components';
import ReceiptForm from './ReceiptForm';
import ReceiptHistory from './ReceiptHistory';
import { useSelector, useDispatch } from 'react-redux';
import { addToHistory, deleteHistory, tipHistory } from '../app/historySlice';

export default function Receipt() {
    const history = useSelector(tipHistory);
    const dispatch = useDispatch();

    console.log(history)

    return (
        <Wrapper>
            <div className='receipt-paper'>
                <div className='header'>Easy Tip</div>
                <div className='subheader'>- Tip Calculator -</div>
                <ReceiptForm/>
                <ReceiptHistory />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #C2C5BB;
    height: 100vh;
    padding: 100px 0px;
    text-align: center;

    .header {
        font-family: 'Press Start 2P', cursive;
        font-size: 30px;
    }

    .subheader {
        font-size: 13px;
        margin-top: 10px;
    }

    .receipt-paper {
        background-color: #fff;
        margin: auto;
        width: 500px;
        border-top: 1px dashed #C2C5BB;
        border-bottom: 1px dashed #C2C5BB;
        padding: 30px 0;
    }
`