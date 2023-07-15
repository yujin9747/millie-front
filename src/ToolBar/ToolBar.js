import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import style from "./ToolBarStyle.module.css";
import { useNavigate } from "react-router-dom";
import SignUp from "../SignUp";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Today from "../today/Today";

const logoURL = "https://d3udu241ivsax2.cloudfront.net/v3/images/brand/full-logo.f9246fa0ca04c7cef80a5d0f5409f0be.png";
function ToolBar({ loginText }) {

    function onClick() {
        console.log("onClick: " + loginText);
        if(loginText === "Login") {
            window.location.href = "http://localhost:8080/oauth2/authorization/google";
        }
        else {
            window.location.href = "/";
            return <Today />;
        }

    }
    return <Toolbar>
        <img className={style.logo} src={logoURL} alt='logo image' />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
        <Link to={`/login`}>
            <Button onClick={onClick} color="inherit" style={{color:"black"}}>{loginText}</Button>
        </Link>
    </Toolbar>
}

ToolBar.propTypes = {
    text: PropTypes.string.isRequired,
}

export default ToolBar;