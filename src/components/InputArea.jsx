import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
function InputArea(props){
    var [noteObj,setnoteObj]=useState({
        title:"",
        content:""
    })
    
    function handleChange(event){
        var {name,value}=event.target
        setnoteObj(prevObj=>{
            return {
                ...prevObj,
                [name]:value
            }
        })
    }
    function handleClick(){
        props.settingArray(previtem=>{
            return [...previtem,noteObj]
        });
        setnoteObj({
            title:"",
            content:""
        })
        console.log(props.notearray);
    }
    return <div className="InputAreaDiv">
        <input placeholder="Enter title here" name="title" onChange={handleChange} value={noteObj.title}></input>
        <textarea placeholder="Enter Description Here" rows="3" name="content" onChange={handleChange} value={noteObj.content}></textarea>
        <Fab color="primary" aria-label="add" onClick={handleClick}>
  <AddIcon />
</Fab>
        {/* <button>ADD</button> */}
    </div>
}
export default InputArea;