import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";

function Account(){
    const { user, logout} = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async() => {
        try{
            await logout();
            navigate("/");
            console.log("You are logged out");
        }
        catch(e){
            console.log(e.message);
        }
    }
    return(
        <div className="account-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="account-main">
                            <h1>Account</h1>
                            <p>User Email: { user && user.email}</p>
                            <Button type="primary" onClick={handleLogout}>Logout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;