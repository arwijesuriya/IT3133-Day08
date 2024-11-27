import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function login() {
    const navigate = useNavigate();
    const users = ({
        username:'admin',
        password:'123'
    });
    const [ error, seterror ] = useState("");
    const [ user, setuser ] = useState("");
    
    const authenticate = (e) => {
        e.preventDefault();

        if (!username || !password) {
            seterror("Please provide all the fields");
            return;
        }

        if (e.password.length < 8) {
            seterror("Password must contain 8 charcters");
            return;
        }

        if (users.username === e.username || users.password === e.password) {
            navigate("/dashboard");
        }
    }

    return (
        <div>
            <h1>Login Here</h1>
            <form onSubmit={authenticate}>
                <input type="text" name="username" placeholder="Enter username" value={users.username} />
                <input type="password" name="password" placeholder="Enter password" value={users.password} />
                <button onClick={authenticate}>Click Me</button>
            </form>
        </div>
    );
}