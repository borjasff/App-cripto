import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'
import ImgCripto from './img/imagen-criptos.png'

//styles
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
const Heading = styled.h1`
font-family: 'lato', sans-serif;
color: #FFF;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 50px;
font-size: 34px;
  &::after {
    content: '';
    width: 150px;
    height: 8px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
}
`

function App() {

  const [coins, setCoins] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  const quoteCripto = async () => {
    setLoading(true)
    setResult({})
    const { coin, criptoCoin} = coins
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}`

    const answer = await fetch(url)
    const result = await answer.json()
    setResult(result.DISPLAY[criptoCoin][coin])

    setLoading(false)
  }

  //to consult the cripto in the API
  useEffect(() =>{
    if(Object.keys(coins).length > 0){

      quoteCripto()
    }
  }, [coins])
  
  return (
    <>
      <Container>
        <Image
        src={ImgCripto}
        alt='Image cripto'
        />
        <div>
          <Heading>Cotiza criptomonedas al instante</Heading>
          <Form
          setCoins={setCoins}
          />

          {loading && <Spinner/>}
          {result.PRICE && <Result result={result}/>}
        </div>
      </Container>
    </>
  )
}

export default App
