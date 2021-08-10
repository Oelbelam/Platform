import classes from './Main.module.css';
import Login from '../Login/Login';

const Main = () => {
	return (
		<div className={classes.Main} >
			<div className={classes.MainImage}></div>
			<div className = {classes.loginwrapper}>
				<Login/>
			</div>
		</div>

	)
}

export default Main;
