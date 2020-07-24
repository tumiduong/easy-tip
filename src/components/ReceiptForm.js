import React, { useState } from 'react';
import styled from 'styled-components';

export default function Receipt() {
    const [total, setTotal] = useState('')
    const [tip, setTip] = useState('')
    const [split, setSplit] = useState('')

    return (
        <Wrapper>
            <form autoComplete='off'>
                <div>Bill Total 
                    <input 
                        name='total' 
                        type='text' 
                        value={total}
                        onChange={e => setTotal(e.target.value)}
                    />
                </div>
                <div>Tip Amount 
                    <input 
                        name='tip' 
                        type='text' 
                        value={tip}
                        onChange={e => setTip(e.target.value)}
                    />
                </div>
                <div>Split Between 
                    <input 
                        name='split' 
                        type='text' 
                        value={split}
                        onChange={e => setSplit(e.target.value)}
                    />
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`