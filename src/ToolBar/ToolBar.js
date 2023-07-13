import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import style from "./ToolBarStyle.module.css";
import { useNavigate } from "react-router-dom";
import SignIn from "../SignIn";
import { Link } from "react-router-dom";

const logoURL = "https://d3udu241ivsax2.cloudfront.net/v3/images/brand/full-logo.f9246fa0ca04c7cef80a5d0f5409f0be.png";
function ToolBar() {

    function onClick() {
        console.log("onClick");
        window.location.href = "/login";
        return <SignIn />;
    }
    return <Toolbar>
        <img className={style.logo} src={logoURL} alt='logo image' />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
        <Link to={`/login`}>
            <Button onClick={onClick} color="inherit" style={{color:"black"}}>Login</Button>
        </Link>
    </Toolbar>
}

export default ToolBar;