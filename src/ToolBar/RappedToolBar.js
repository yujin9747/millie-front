import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import Wrapper from "../Wrapper";
import ToolBar from "./ToolBar";

function RappedToolBar() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{borderBottom: "0.1px solid lightGray"}}>
            <AppBar position="static" style={
                {
                    backgroundColor: "white",
                    boxShadow: "none",
                }
            }>
                <Wrapper left="20rem" right="20rem">
                    <ToolBar loginText="Logout"/>
                </Wrapper>
            </AppBar>
        </Box>
    );
}

export default RappedToolBar;
