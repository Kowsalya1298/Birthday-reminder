import comcast from "../../assets/images/comcast-black.png"
import "./footer.css";
const Footer = ()=>{
    return(
        <footer className="footer">
             <img alt="comcastLogo" src={comcast} height="60px" width="100px"></img>
             <p>This information is confidential and strictly intended for Comcast and CIEC internal use. Sharing of this information outside is prohibited.</p>
             <p>© 2023 Comcast All Rights Reserved</p>
        </footer>
    )
}
export default Footer