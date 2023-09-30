import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCoins from '../hooks/useSelectCoins'
import { coins } from '../data/coins'

//styles for the button
const InputSubmit = styled.input`
background-color: #9497FF;
border: none;
width: 100%;
padding: 10PX;
color: #FFF;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
margin-top: 30px;

&:hover{
    cursor: pointer;
    background-color: #7A7DFE;
}
`

const Form = ({setCoins}) => {
    //to state
    const [criptos, setCriptos] = useState([])
    //error
    const [error, setError] = useState(false)
    //to select the coin
    const [coin, SelectCoins] = useSelectCoins('Elige tu Moneda', coins)
    //and the cripto
    const [criptoCoin, SelectCriptoCoin] = useSelectCoins('Elige tu Criptomoneda', criptos)
    //consult API
    const consultAPI = async () =>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      //we need await to read the url, when the fetch url, the asnwer is transform in json.
      const   answer = await fetch(url)
      const result = await answer.json()
      //the result need a one map in Data (value that we need and build a object)
      const arrayCriptos =  result.Data.map( cripto => {

        const object = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName
        }
        return object
      })
      setCriptos(arrayCriptos)
    }

    useEffect (() => {
      consultAPI();
    }, [])
    
    //to validate the submit
    const handleSubmit = e => {
      e.preventDefault()
      //if exist one error
      if([coin, criptoCoin].includes('')){
        setError(true)

        setTimeout(() => {
          setError(false)
        },5000)
      
        return
      } 
      //else validate error is false and integration in setCoins the coin and de criptoCoin
      setError(false)
      setCoins({
        coin,
        criptoCoin
      })
    }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form
        onSubmit={handleSubmit}
      >

          <SelectCoins/>
          <SelectCriptoCoin/>

          <InputSubmit

              type="submit" 
              value="Cotizar" 
          />
      </form>
    </>
  )
}

export default Form