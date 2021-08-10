import classes from './Login.module.css';
import LoginField from './LoginField/LoginField';
const Login = () => {
	return (
		<div className={classes.Login} >
			<div className={classes.welcomebackwrapper}>
				<p className = {classes.welcomeback}>Welcome Back</p>
				<h3 className = {classes.logintocontinue}>Login to Continue</h3>	
			</div>
			<LoginField/>
		</div>
	)
}

export default Login;
