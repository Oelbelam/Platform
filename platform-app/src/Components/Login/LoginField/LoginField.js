import classes from './LoginField.module.css';

const LoginField = () => {
	return (
		<div className = {classes.LoginFieldwrapper}>
			<div className={classes.LoginField}>
				<div className = {classes.usernamewrapper}>
					<svg height="40" viewBox="0 0 122 122" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m64 17.43a46.754 46.754 0 0 0 -27.4 84.638l.043.03.008.006a46.775 46.775 0 0 0 54.692 0l.046-.032a46.754 46.754 0 0 0 -27.389-84.642zm-24.62 82.305v-3.025a22.766 22.766 0 0 1 22.77-22.78h1.735.115s.076 0 .115 0h1.735a22.766 22.766 0 0 1 22.77 22.78v3.025a43.233 43.233 0 0 1 -49.24 0zm24.735-29.3h-.23a15.518 15.518 0 0 1 -15.454-15.5c0-.4.017-.806.051-1.214a15.571 15.571 0 0 1 31.037.012c.033.4.05.8.05 1.2a15.518 15.518 0 0 1 -15.454 15.5zm28.005 26.586v-.311a26.261 26.261 0 0 0 -18.82-25.199 18.966 18.966 0 0 0 9.766-16.58c0-.5-.021-1-.062-1.484a19.07 19.07 0 0 0 -38.013-.012c-.042.491-.063.994-.063 1.5a18.959 18.959 0 0 0 9.772 16.576 26.26 26.26 0 0 0 -18.82 25.199v.311a43.25 43.25 0 1 1 56.24 0z"/></svg>
					<input className={classes.UserName} type="text" placeholder="username"/>
				</div>
				<input className={classes.PassWord} type="text"/>
			</div>
			<div className = {classes.loginbuttonwrapper}>
				<button className = {classes.loginbtn}>Login</button>
				<button className = {classes.forgotbtn}>forgot password</button>
			</div>
		</div>
	)
}

export default LoginField;
