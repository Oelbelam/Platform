import classes from './Login.module.css';
import LoginField from './LoginField/LoginField';
const Login = () => {
	return (
		<div className={classes.Login} >
			<div className={classes.WelcomeBack}>welcome back</div>
			<LoginField/>
			
		</div>
	)
}

export default Login;
