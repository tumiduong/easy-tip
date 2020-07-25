import React, { useState } from 'react';
import styled from 'styled-components';

export default function ReceiptForm() {
    const [total, setTotal] = useState('')
    const [tip, setTip] = useState('')
    const [split, setSplit] = useState('')

    return (
        <Wrapper>
            <form autoComplete='off'>
                <div>Bill Total: $
                    <input 
                        name='total' 
                        type='text' 
                        value={total}
                        onChange={e => setTotal(e.target.value)}
                    />
                </div>
                <div>Tip Percentage: 
                    <input 
                        name='tip' 
                        type='text' 
                        value={tip}
                        onChange={e => setTip(e.target.value)}
                    />
                    %
                </div>
                <div>Split between 
                    <input 
                        name='split' 
                        type='text' 
                        value={split}
                        onChange={e => setSplit(e.target.value)}
                    />
                    people.
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 30px;

input {
    outline: none;
    border: none;
    border-bottom: 1px dotted black;
    margin: 0px 5px;
    width: 55px;
}
`