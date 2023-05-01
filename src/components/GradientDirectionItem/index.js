import {DirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, updateActiveDirectionId} = props
  const {directionId, value, displayText} = details

  const onClickDirection = () => {
    updateActiveDirectionId(directionId)
  }
  return (
    <ListItem>
      <DirectionButton
        value={value}
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
