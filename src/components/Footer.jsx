import React from "react";
function Footer(){
    var d=new Date();
    var year=d.getFullYear();
    return <footer><p>Copyright By MK © {year} </p></footer>
}
export default Footer;