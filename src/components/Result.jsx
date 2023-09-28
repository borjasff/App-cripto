import styled from "@emotion/styled"

const Container = styled.div`
    color: #FFF;
    font-family: 'lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Text = styled.p`
    font-size: 18px;
    span{
      font-weight: 700;
    }
`
const Price = styled.p`
  font-size: 24px;
    span{
      font-weight: 700;
    }
`
const Image = styled.img`
  display: block;
  width: 100px;
`

const Result = ({result}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, MKTCAP, SUPPLY, IMAGEURL, LASTUPDATE} = result
  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image cripto" />
       <div>
          <Price>El Precio es de: <span>{PRICE}</span></Price>
          <Text>El Precio más alto del día: <span>{HIGHDAY}</span></Text>
          <Text>El Precio más bajo del día: <span>{LOWDAY}</span></Text>
          <Text>Cambios en las ultimas 24 horas: <span>{CHANGEPCT24HOUR} %</span></Text>
          <Text>Marketcap: <span>{MKTCAP}</span></Text>
          <Text>Disponible: <span>{SUPPLY}</span></Text>
          <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
       </div>
    </Container>
  )
}

export default Result