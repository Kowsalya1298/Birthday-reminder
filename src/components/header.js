import comcast from "../assets/images/comcast.png"
import xto from "../assets/images/xto.png"
import "./header.css";
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="imgStyle" >
                    <img alt="comcastLogo" style={{ height: "60px", weight: "100px"}} src={comcast} ></img>
                    <img alt="comcastLogo" style={{ height: "60px", weight: "100px" }} src={xto}></img>
                </div>
                <h2 style={{flex:1}} className="headerStyle">Anniversaries and Birthdays</h2>
            </header>
        </>
    )
}
export default Header