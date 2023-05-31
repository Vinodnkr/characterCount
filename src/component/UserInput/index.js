const UserInput = props => {
  const {userInputDetails} = props
  const {userEnterText, textLength} = userInputDetails

  return (
    <li>
      <p>
        {userEnterText} : {textLength}
      </p>
    </li>
  )
}

export default UserInput
