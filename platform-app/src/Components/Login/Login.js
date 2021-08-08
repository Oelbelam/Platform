import classes from './Login.module.css';
import LoginField from './LoginField/LoginField';
const Login = () => {
	return (
		<div className={classes.Login} >
			<div className={classes.WelcomeBack}>welcom back</div>
			<LoginField/>
			
		</div>
	)
}

export default Login;
