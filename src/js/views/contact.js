import React from "react";
import CardContact from "../component/cardContact";



const ContactList =()=>{
    return(
        <div className="card bg-dark">
            <ul>
                <li>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                <CardContact/>
                </li>
            </ul>

        </div>
        
    )
};
export default ContactList;