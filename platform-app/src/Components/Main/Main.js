import classes from './Main.module.css';
import Login from '../Login/Login';

const Main = () => {
	return (
		<div className={classes.Main} >
			<div className={classes.MainImage}>
				<img className= {classes.loginImage} src={require('../../assets/loginImage.svg').default} alt='login'/>
			</div>
			<div className = {classes.loginwrapper}>
				<Login/>
			</div>
		</div>

	)
}

export default Main;
