import React from "react";
import NotesIcon from '@mui/icons-material/Notes';
function Header(){
    return <nav className="navbar" style={{backgroundColor:"#73BBC9",width:"100vw"}}>
    <div className="container-fluid"style={{justifyContent:"center"}} >
      <a className="navbar-brand" href="#" style={{color:"white"}}>
            NotesKeeper <NotesIcon style={{color:"black"}}/>
      </a>
    </div>
  </nav>  
}
export default Header;
