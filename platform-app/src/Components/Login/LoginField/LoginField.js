import classes from './LoginField.module.css';
const LoginField = () => {
	return (
		<div>
			<div className={classes.LoginField} >
				<input className={classes.UserName} type="text"/>
				<input className={classes.PassWord} type="text"/>
			</div>
			
		</div>
	)
}

export default LoginField;
