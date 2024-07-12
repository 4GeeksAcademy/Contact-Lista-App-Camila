import React from "react";
import { useEffect } from "react";

const AddContactForm = () => {
    return (
        <div className=" d-flex justify-content-center">

        <form>
            <h1 className="text-white">Add a new contact </h1>
        <div className=" mb-3">
            
                <label htmlFor="exampleInputEmail1" className="form-label text-white">Full Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>
                    <div id="emailHelp" className="form-text">anyone else.</div>
            </div>
            <div className=" mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-white">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" Enter address"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className=" mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-white">Phone</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter number"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-white">Adress</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter adress"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
        </div>
    )
};
export default AddContactForm;