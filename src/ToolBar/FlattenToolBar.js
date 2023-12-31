import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import ToolBar from "./ToolBar";

function FlattenToolBar() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{borderBottom: "0.1px solid lightGray"}}>
            <AppBar position="static"style={
                {
                    backgroundColor: "white",
                    boxShadow: "none",
                }
            }>
                <ToolBar loginText="Login"/>
            </AppBar>
        </Box>
    );
}

export default FlattenToolBar;
