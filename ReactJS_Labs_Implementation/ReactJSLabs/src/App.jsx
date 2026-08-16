import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import A3 from './Lab16/A3'
import L16_A1 from './Lab16/propDemo'
import './App.css'
import Event from './Lab16/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Lab15></Lab15> */}
      {/* <h1>Hello People!</h1>
      <h3>Remove all the content from App.jsx.We wil use this page as central hub for all of our content which we will be learning in lab.</h3>
      <p>Remove the following import statement from main.jsx: import './index.css'</p> */}


      {/* Lab16 */}
        {/* <L16_A1 name="Rohaan" n1={10} n2={20} isStudent={true}/> */}

      {/* <A3 isDisplay={true} />
       */}
       <Event/>
       {/* <propDemo name="Rohaan" n1={10} n2={20} isStudent={true}/> */}
      
    </>
  )
}

export default App
