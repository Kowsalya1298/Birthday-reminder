import comcast from "../assets/images/comcast.png"
import "./footer.css";
const Footer = ()=>{
    return(
        <footer className="footer">
             <img alt="comcastLogo" src={comcast} height="60px" width="100px"></img>
             <p>For any questions/clarifications/feedback please send your email to <a href="mailto:CIEC_Human_Resources@comcast.com" >CIEC_Human_Resources@comcast.com</a></p>
             <p>© 2022 Comcast All Rights Reserved</p>
        </footer>
    )
}
export default Footer