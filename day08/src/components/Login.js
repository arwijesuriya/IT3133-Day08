import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function login() {
    const navigate = useNavigate();

    let username="Admin";
    let password="123"
    
    const [ error, seterror ] = useState("");
    
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

        if (username === e.username || password === e.password) {
            const navigate = useNavigate();
            navigate("/dashboard");
        }
    }

    return (
        <div>
            <h1>Login Here</h1>
            <form onSubmit={authenticate}>
                <input type="text" name="username" placeholder="Enter username" value={username} />
                <input type="password" name="password" placeholder="Enter password" value={password} />
                
                <button onClick={authenticate}>Click Me</button>

                <span>{error}</span>
            </form>
        </div>
    );
}