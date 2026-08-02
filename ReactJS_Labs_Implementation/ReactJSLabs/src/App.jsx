import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello People!</h1>
      <h3>Remove all the content from App.jsx.We wil use this page as central hub for all of our content which we will be learning in lab.</h3>
      <p>Remove the following import statement from main.jsx: import './index.css'</p>
    </>
  )
}

export default App
