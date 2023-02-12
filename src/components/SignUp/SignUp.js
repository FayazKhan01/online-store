import React, { useState } from "react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"
import { UserAuth } from "../context/UserAuthContext";

function SignUp(){
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const getRegister = async (e) => {
        if(name === "" ||  password === "" || number === "" || email === ""){
            alert("Fill all the fields");
            return;
        }
        e.preventDefault();
        setError("");
        try{
            await createUser(email,password);
            navigate("/account");
        }catch(e){
            setError(e.message);
            console.log(e.message);
        }
        setName("");
        setNumber("")
        setEmail("");
        setPassword("");
    }

    return(
        <div className="signUp-sect">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="signUp-main">
                            <h1>SAYLANI WELFARE</h1>
                            <h6>ONLINE DISCOUNT STORE</h6>
                            <form onSubmit={getRegister}>
                                <div className="name-input">
                                    <input type="email" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"></input>
                                </div>
                                <div className="phone-input">
                                    <input type="tel" required value={number} onChange={(e) => setNumber(e.target.value)} pattern="[0-9] {8}" placeholder="Contact"></input>
                                </div>
                                <div className="email-input">
                                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                                </div>
                                <div className="pass-input">
                                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                                </div>
                            </form>
                            <Button  type="primary" htmlType="submit" size="medium" onClick={getRegister}>SIGN UP</Button>
                            <Link to="/"><p>Already have an account? Login</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;