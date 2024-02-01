import logo from "../../assets/images/logo.jpg";
import './NavBar.scss';

export default function NavBar() {
    return(
        <div className="navbar">
            <img src={logo} alt="logo image" className="navbar__logo"/>
            <p className="navbar__title">Code Tracker</p>
        </div>
    )
}