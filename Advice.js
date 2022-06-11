import React from 'react'
import divider from './pattern-divider.svg'
import iconDice from './icon-dice.svg'

function Advice({advice, getAdvice}) {

  return (
    <div className='advice'>
        <div className='header'>ADVICE #{advice.id}</div>
        <div className='content'>{advice.advice}</div>
        <img src={divider} alt='divider' />
        <img src={iconDice} onClick={getAdvice} alt='dice' />
    </div>
  )
}

export default Advice
