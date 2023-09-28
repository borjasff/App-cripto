import {useState} from 'react'
import styled from '@emotion/styled'
//styles
const Label =styled.label`
    color: #FFF;
    display: block;
    font-family: 'lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0 ;
`

const Select =styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`
//declarate the coin and the cripto
const useSelectCoins = (label, options) => {

    //initialization whit one stete clean
    const [state, setState] = useState('')

    //select the coin and the cripto
    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {options.map(option => (
                    <option
                    key = {option.id}
                    value={option.id}
                    >{option.name}</option>
                ))}
            </Select>
        </>
    )

    return [state, SelectCoins]
}

export default useSelectCoins