import React, { useState } from "react";
import { Button } from "antd";
import { Link, useNavigate} from "react-router-dom";
import "./SignIn.css"
import { UserAuth } from "../context/UserAuthContext";

function SignIn(){
    const { signIn } = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setError("");
        try{
            await signIn(email, password);
            navigate("/account");
        }
        catch(e){
            setError(e.message);
            alert(error);
            console.log(e.message);
        }
        setEmail("");
        setPassword("");
    }
    return(
        <div className="signIn-sect">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="signIn-main">
                            <h1>SAYLANI WELFARE</h1>
                            <h6>ONLINE DISCOUNT STORE</h6>
                            <form onSubmit={handleSubmit}>
                                <div className="email-input">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required></input>
                                </div>
                                <div className="pass-input">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required></input>
                                </div>
                            </form>
                            <Button type="primary" htmlType="submit" size="medium" onClick={handleSubmit}>SIGN IN</Button>
                            <Link to="/signUp"><p>Don't have an account? Register</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;