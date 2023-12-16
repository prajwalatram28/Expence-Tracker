import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/users/usersSlices";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const PrivateNavbar = () => {
  const dispatch = useDispatch();

 return (
   <Navbar bg="light" expand="lg navbar-light ">
     <pre></pre>
     <nav class="navbar navbar-expand-sm navbar-black bg-light">
       <div class="container-fluid">
         <Link to="/" className="navbar-brand">
           {/* <i class="bi bi-currency-exchange fs-1 text-warning "></i> */}
           <i class="icon-inr">
             <Navbar.Brand href="/">
               <b>JK Life Share </b>
             </Navbar.Brand>
           </i>
         </Link>
       </div>
     </nav>

     <Container>
       {/* <Navbar.Brand href="/">
          <b>JK Life Share </b>
        </Navbar.Brand> */}

       <Navbar.Toggle aria-controls="basic-navbar-nav" />

       <Navbar.Collapse id="basic-navbar-nav">
         <pre></pre>
         <Nav className="me-auto">
           <li class="nav-item mb-2">
             <Link to="/expenses" className="btn  btn-outline-warning me-2">
               Donar List
             </Link>
           </li>
           <li class="nav-item">
             <Link to="/incomes" className="btn  btn-outline-primary me-2">
               Receiver List
             </Link>
           </li>

           <pre></pre>

           <li class="nav-item mb-2">
             <Link to="/dashboard" className="btn  btn-outline-warning me-2">
               Dashboard
             </Link>
           </li>
           <li class="nav-item">
             <Link to="/profile" className="btn  btn-outline-primary me-2">
               Profile
             </Link>
           </li>

           {/* <form class="d-flex">
              <Link to="/add-expense" className="btn btn-danger me-2">
                New Donor
              </Link>
            </form> */}
         </Nav>

         <pre></pre>

         <form class="nav-item mb-2">
           <Link to="/add-expense" className="btn btn-danger me-2">
             New Donor
           </Link>

           <Link to="/add-income" className="btn btn-success me-2  ">
             New Receiver
           </Link>

           <button
             onClick={() => dispatch(logout())}
             className="btn btn-warning me-2"
           >
             Logout
           </button>
         </form>

         {/* <form class="nav-item mb-2">
            <Link to="/login" className="btn btn-outline-secondary me-2 ">
              Sign In
            </Link>

            <Link to="/register" className="btn  btn-primary">
              Sign Up
            </Link>
          </form> */}
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
};

export default PrivateNavbar;
