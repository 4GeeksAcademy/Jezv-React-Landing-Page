import React from 'react'


const Navbar = () => {
	return (
	<div className="text-center ">
		<nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
         <a className="navbar-brand text-light" href="#">Start Boostrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-light" href="#">Features</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-light" href="#">Pricing</a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
	  </div>
	);
};
export default Navbar;
