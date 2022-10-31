import React, { useEffect, useState } from "react";
export const TextContext = React.createContext([]);


function TextHOC({App}){
    const [text, setText] = useState([]);
    useEffect(()=>{
        //get from db 
        setText([{id:1,name:"task 1"}, {id:2,name:"task 2"},{id:3,name:"task 3"}])
    },[]);
    useEffect(()=>{
        //add to db
    },[text])
    return (<>
                <TextContext.Provider value={{text,setText}}>
                    <App/>
                </TextContext.Provider>
            </>
    )
}
export default TextHOC;

