import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import NotesCards from "./NotesCards";
function App(){
    var [noteArray,setnoteArray]=useState([]);
    return <div ><Header/>
    <div className="noteContainer">
    <InputArea notearray={noteArray} settingArray={setnoteArray}/>
    <NotesCards notearray={noteArray} settingArray={setnoteArray}/>
    </div>
    
    <Footer/>
    </div>
}
export default App;