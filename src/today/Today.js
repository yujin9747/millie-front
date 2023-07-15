import * as React from 'react';
import RappedToolBar from "../ToolBar/RappedToolBar";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

function Today() {
    let params;
    let email;
    let nickname;
    let text;
    useEffect(() => {
        params = new URLSearchParams(window.location.search);

        email = params.get("email");
        nickname = params.get("nickname");
        // await axios.post("http://localhost:8080/api/user", {
        //     email: email,
        //     nickname: nickname,
        // }).then((response) => {
        //     console.log(response);
        // }
        text = "회원 가입이 이미 되어 있는 유저입니다."
    },
    []);
    return (
        <RappedToolBar />,
        <h1>nickname: {nickname}, email: {email}</h1>,
        <p>{text}</p>
    );
}

Today.propTypes = {
    email: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
}

export default Today;