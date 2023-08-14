import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={classes.navBar}>
        <div className={classes.navContainer}>
            <h2>KudlaStore</h2>
            <input type="text" name="" id="" />
            <button>Login</button>
        </div>
    </div>
  )
}

export default NavBar;