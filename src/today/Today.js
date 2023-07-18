import * as React from 'react';
import RappedToolBar from "../ToolBar/RappedToolBar";
import {useEffect, useState} from "react";
import axios from "axios";

function Today() {
    let params = new URLSearchParams(window.location.search);
    let email = params.get("email");
    let nickname = params.get("nickname");
    const [text, setText] = useState('');

    useEffect(() => {
        const checkUserRegistration = async (options) => {
            if (email) {
                try {
                    const response = await axios.get(`http://localhost:8080/member`,
                        {
                            params: { email },
                            withCredentials: true,
                            headers: {
                                'Content-Type': 'application/json',
                                'Origin': 'http://inflearn-aws-s3.s3-website-us-east-1.amazonaws.com',
                            },
                        });

                    console.log("response: " + response.data);
                    if (response.data === null) {
                        console.log("회원 가입이 되어 있지 않은 유저입니다.");
                        setText("회원 가입이 되어 있지 않은 유저입니다.");
                    } else {
                        console.log("회원 가입이 되어 있는 유저입니다.");
                        setText("회원 가입이 되어 있는 유저입니다.");
                    }
                } catch (error) {
                    console.error(error);
                }
            } else {
                // email이 없는 경우
                window.location.href = "/";
            }
        };

        checkUserRegistration().then(r => console.log("checkUserRegistration()"));
    }, []);

    return (
        <div>
            <RappedToolBar />
            <h1>nickname: {nickname}, email: {email}</h1>
            <p>{text}</p>
        </div>

    );
}

export default Today;