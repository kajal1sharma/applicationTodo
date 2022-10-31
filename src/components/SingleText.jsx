import React from 'react'

const SingleText = ({text, index, setText}) => {
  
  function deleteHandler(){
    setText(state=>{
      state.splice(index, 1)
      return [...state];
    })
  }
  return (
    <div >
      <span>{text}</span>
      <button onClick={deleteHandler} >cut</button>
    </div>
  )
}

export default SingleText
