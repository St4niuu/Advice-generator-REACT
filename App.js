import React, {useEffect, useState} from 'react'
import './index.css'
import Advice from './Advice'

function App() {

  const [advice, setAdvice] = useState()
  // function getAdvice()
  // {
  //   const request = new XMLHttpRequest()
  //   request.onload = function() {
  //     return setAdvice(this.responseText)
  //   }
  //   request.open('GET', 'https://api.adviceslip.com/advice')
  //   request.send()
  //   console.log(advice)
  // }
  async function getAdvice()
  {
    let adviceData = await fetch('https://api.adviceslip.com/advice')
    adviceData = await adviceData.json()
    setAdvice(adviceData.slip)
  }

  useEffect(() => {
    getAdvice()
  }, [])
  if(advice)
  {
    return <Advice advice={advice} getAdvice={getAdvice}/>
  }
}

export default App
