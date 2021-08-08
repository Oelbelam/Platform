import classes from './NavBar.module.css';
const NavBar = () => {
	return (
		<div className={classes.NavBar} >
			<div><button className={classes.Home}>Home</button></div>
			<div><button className={classes.About}>About</button></div>
			<div><button className={classes.Login}>Login</button></div>
			<div><button className={classes.Signup}>Signup</button></div>
		</div>
	)
}

export default NavBar;
