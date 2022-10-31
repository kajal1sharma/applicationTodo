import React from 'react'
function shuffle(index1, index2, arr){
    let temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}

 const Arrow = ({visible,setText, index, arrowType }) => {
    
    function clickHandler(){
        setText(state=>{
            if(arrowType==="UP")
                shuffle(index, index-1, state);
            else
                shuffle(index, index+1, state);
         return [...state];
        })
    }
    
  return visible?(
                <span>
                   <button onClick={clickHandler}>{arrowType}</button>
               </span>
            ):null
            
}
export default Arrow