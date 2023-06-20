import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PushPinIcon from '@mui/icons-material/PushPin';
function NotesCards(props){

    function cardGenerator(obj,index){
        return <div className="card" id={index} key={index} style={{borderColor:randomrgb(),backgroundColor:"transparent"}}>
            <PushPinIcon style={{marginBottom:"10px",position:"absolute",top:"-19px"}}/>
        <h4>{obj.title}</h4>
        <p>{obj.content}</p>
        <IconButton aria-label="delete" onClick={()=>deleteButton(index)}>
        <DeleteIcon /> </IconButton>
    </div>

    function deleteButton(i){
        props.settingArray(props.notearray.filter((item,index)=>{
            return index!==i
        }))
    }
    }

    function randomrgb(){
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;
        return rgb;
    }
    return <div className="notesCardsDiv">
        {props.notearray.map((obj,index)=> cardGenerator(obj,index))}
    </div>
}
export default NotesCards;