import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name ='All'/>
      <Button name='Gaming'/>
      <Button name ='Live'/>
      <Button name ='Songs'/>
      <Button name ='Cricket'/>
      <Button name ='Football'/>
      <Button name ='Tech'/>
      <Button name ='Cooking'/>
    </div>
  )
}

export default ButtonList