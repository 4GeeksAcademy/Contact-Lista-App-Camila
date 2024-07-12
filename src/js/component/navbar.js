import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
			<Link to="/contact">
					<span className=" mb-0 h">Contact</span>
				</Link>
			</Link>
			<div className="ml-auto">
				<Link to="/AddContact">
					<span className="nav-link">Add Contact</span>
				</Link>
				
			</div>
		</nav>
	);
};
