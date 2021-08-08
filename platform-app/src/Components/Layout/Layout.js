import classes from "./Layout.module.css"
import NavBar from "../NavBar/NavBar"
import Main from "../Main/Main"

const Layout = () => {
    return (
        <div className={classes.Layout}>
            <NavBar/>
            <Main/>
        </div>
    );
}

export default Layout