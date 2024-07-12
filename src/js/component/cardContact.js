import React, { useState, useEffect,useContext } from "react";
import { Context } from "../store/appContext";

function CardContact() {

    const { store, actions } = useContext(Context)
    
    const [users, setUsers] = useState([]); 



    useEffect(() => {
        actions.usersList();
    }, [actions]);

    return (
        <div className="container">
            {store.users.length > 0 ? (
                store.users.map((user, index) => (
                    <div className="card mb-3 w-50" key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img 
                                    src="https://miro.medium.com/v2/resize:fit:1024/1*5Xc1yC5c__spfn_halRugw.jpeg"
                                    className="img-fluid rounded-circle" 
                                    alt="User"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-white">{user.name}</h5>
                                    <p className="card-text text-white">{user.email}</p>
                                    <p className="card-text"><small className="text-muted">Phone: {user.phone}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No users available.</p>
            )}
        </div>
    );
}
export default CardContact;