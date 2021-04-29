import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 p-0">
          <Link to="/" className="logo text-decoration-none">
            <h1 className="p-3 font-weight-bold">FLIX MANIA</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
