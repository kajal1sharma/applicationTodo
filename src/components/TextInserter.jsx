import React from 'react'
import { useContext } from 'react';
import { TextContext } from '../Context/TextContext';
const TextInserter = () => {
    const setText = useContext(TextContext).setText;
    let input ="";
    
    function inputHandler(e){
        input = e.target.value;
    }

    function saveHandler(){
        setText(state=>[...state,{name: input, id:input}])
    }

  return (
    <div>
      <input onChange={inputHandler}/>
      <button onClick={saveHandler}>Save</button>
    </div>
  )
}

export default TextInserter
