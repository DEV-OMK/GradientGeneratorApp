import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff79;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`

export const SubTitle = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`

export const ListContainer = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const ColorAndHexCodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ColorAndHexCodeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-inline: 25px;
`

export const HexCode = styled.p`
  color: #ffffff79;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
`

export const Input = styled.input`
  border: none;
  padding: 0px;
  margin: 0px;
  width: 70px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
`

export const CustomButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding: 8px;
  padding-inline: 15px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 20px;
`
