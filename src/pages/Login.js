import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "../hooks/useUser";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, pushLocation] = useLocation();
    const { isLogged, login, logout, isLoginLoading, isLoginError } = useUser();

    useEffect(() => {
        if (isLogged) pushLocation("/");
    }, [isLogged, pushLocation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    const handleInputName = (e) => {
        setUsername(e.target.value);
    };

    const handleInputPass = (e) => {
        setPassword(e.target.value);
    };

    return (
        <section className="login-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputUsername">User:</label>
                <input
                    id="inputUser"
                    name="username"
                    type="text"
                    onChange={handleInputName}
                    placeholder="Usuario"
                    value={username}
                />
                <label htmlFor="inputPassword">Pass:</label>
                <input
                    id="inputPassword"
                    name="password"
                    type="password"
                    onChange={handleInputPass}
                    placeholder="Password"
                    value={password}
                />
                <button>Login</button>
            </form>
        </section>
    );
};

export default Login;
