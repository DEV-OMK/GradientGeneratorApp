import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  ResponsiveContainer,
  Heading,
  SubTitle,
  ListContainer,
  ColorAndHexCodeContainer,
  ColorAndHexCodeItem,
  HexCode,
  Input,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  onClickGenerate = () => {
    const {firstColorInput, secondColorInput, activeDirectionId} = this.state
    const gradientDirectionItem = gradientDirectionsList.find(
      eachItem => eachItem.directionId === activeDirectionId,
    )

    this.setState({
      direction: gradientDirectionItem.value,
      firstColor: firstColorInput,
      secondColor: secondColorInput,
    })
  }

  updateActiveDirectionId = directionId => {
    this.setState({activeDirectionId: directionId})
  }

  onChangeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  render() {
    const {
      direction,
      firstColor,
      secondColor,
      activeDirectionId,
      firstColorInput,
      secondColorInput,
    } = this.state

    return (
      <MainContainer
        data-testid="gradientGenerator"
        direction={direction}
        firstColor={firstColor}
        secondColor={secondColor}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <SubTitle>Choose Direction</SubTitle>
          <ListContainer>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                details={eachDirection}
                isActive={eachDirection.directionId === activeDirectionId}
                updateActiveDirectionId={this.updateActiveDirectionId}
              />
            ))}
          </ListContainer>
          <SubTitle>Pick the Colors</SubTitle>
          <ColorAndHexCodeContainer>
            <ColorAndHexCodeItem>
              <HexCode>{firstColorInput}</HexCode>
              <Input
                type="color"
                value={firstColorInput}
                onChange={this.onChangeFirstColor}
              />
            </ColorAndHexCodeItem>
            <ColorAndHexCodeItem>
              <HexCode>{secondColorInput}</HexCode>
              <Input
                type="color"
                value={secondColorInput}
                onChange={this.onChangeSecondColor}
              />
            </ColorAndHexCodeItem>
          </ColorAndHexCodeContainer>
          <CustomButton onClick={this.onClickGenerate}>Generate</CustomButton>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
