import classes from './Main.module.css';
import Login from '../Login/Login';

const Main = () => {
	return (
		<div className={classes.Main} >
			<div className={classes.MainImage}></div>
			<Login/>
		</div>

	)
}

export default Main;
