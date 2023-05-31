// eslint-disable-next-line

import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import UserInput from './component/UserInput'

import './App.css'

// Replace your code here
const App = () => {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState([])

  const searchFind = event => {
    setText(event.target.value)
    console.log(text)
  }

  const onAddUserInput = event => {
    event.preventDefault()
    const newUserInput = {
      id: uuid(),
      userEnterText: text,
      textLength: text.length,
    }
    setIsLoading(prevState => [...prevState, newUserInput])
    setText('')
  }

  const renderUserInput = () =>
    isLoading.length === 0 ? (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
          className="logo"
        />
      </div>
    ) : (
      isLoading.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )

  return (
    <div className="bg">
      <div className="bg1">
        <h1>Count the characters like a Boss...</h1>
        {renderUserInput()}
      </div>
      <div className="bg2">
        <h1>Character Counter</h1>
        <form onSubmit={onAddUserInput}>
          <input
            type="text"
            onChange={searchFind}
            placeholder="Enter the Characters here"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}
export default App
