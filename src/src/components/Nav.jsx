import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Nav()
{
   return(
     <>
	    
    <div className="container-fluid bg-light sticky-top p-0">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
           <Link to="/" className="navbar-brand bg-primary py-4 px-5 me-0">
                <h1 className="mb-0"><img className="img-logo" style={{ padding: 0, margin: 0 }} src="src/assets/logo1.png" /></h1>
           </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-3" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                   <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                   <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                   <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu bg-light mt-2">
                            <Link to="/team" className="dropdown-item">Our Team</Link>
                            <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                            <Link to="/t404" className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                   <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                </div>
                <a className="btn btn-sm btn-primary" href="https://htmlcodex.com/downloading/?item=3597">Buy Pro Version</a>
            </div>
        </nav>
    </div>
  
	 
	 
	 
	 
	 </>   
   );


}