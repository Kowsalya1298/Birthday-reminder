import comcast from "../../assets/images/comcast.png"
import xto from "../../assets/images/xto.png"
import "./header.css";
const Header = () => {
    return (
        <>
            <header className="header">                
                    <img alt="comcastLogo" style={{ height: "50px", weight: "100px"}} src={comcast} ></img>
                <h1  className="headerStyle">Anniversaries and Birthdays</h1>
                    <img alt="comcastLogo" style={{ height: "40px", weight: "100px" }} src={xto}></img>
            </header>
        </>
    )
}
export default Header