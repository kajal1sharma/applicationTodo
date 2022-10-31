import React ,{ useContext } from 'react';
import SingleText from './SingleText';
import {TextContext} from '../Context/TextContext';
import Arrow from './Arrow';

const Displayer = () => {
  
  const context = useContext(TextContext);
  const list =context.text;
  const setText =context.setText;
 
  return (
    <div>
      {list.map((ele,index)=>{
        return (
            <>
                <SingleText text={ele.name} key={ele.id} setText={setText} index={index}/>            
                <Arrow visible ={index===0?false:true} setText={setText} index={index} arrowType="UP"/>
                <Arrow visible={index===list.length-1?false:true} setText={setText} index={index} arrowType="DOWN"/>
            </>
        )
      })}
    </div>
  )
}

export default Displayer
