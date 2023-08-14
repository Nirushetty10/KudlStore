import classes from "./NavBar.module.scss";
import Logo from "../../Assets/Logo/logo.png";

const NavBar = () => {
  return (
    <div className={classes.navBar}>
        <div className={classes.navContainer}>
            <img src={Logo} alt="" />
            <input type="text" name="" id="" />
            <button>Login</button>
        </div>
    </div>
  )
}

export default NavBar;