import * as React from 'react';
import RappedToolBar from "../ToolBar/RappedToolBar";
import PropTypes from "prop-types";
import ToolBar from "../ToolBar/ToolBar";
function Today({ email, nickname }) {
    console.log("logined user: " + email + ", " + nickname)
    return (
        <RappedToolBar />
    );
}

Today.propTypes = {
    email: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
}

export default Today;