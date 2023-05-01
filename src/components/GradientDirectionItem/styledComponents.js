import styled from 'styled-components'

export const DirectionButton = styled.button`
  background-color: ${props => (props.isActive ? '#ffffff' : '#00c9b7')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  font-family: "Roboto"
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 110px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const ListItem = styled.li`
  @media screen and (max-width: 767px) {
    width: 46%;
    margin-inline: 2%;
    flex-shrink: 0;
  }
`
