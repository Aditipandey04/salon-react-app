export default function About()
{
   return(
     <>
	     
		<div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
                    <img className="img-fluid mb-3" src="src/assets/about.jpg" alt="about" />
                    <div className="d-flex align-items-center bg-light">
                        <div className="btn-square flex-shrink-0 bg-primary" style={{ width: "100px", height: "100px" }}>
                            <i className="fa fa-phone fa-2x text-dark"></i>
                        </div>
                        <div className="px-3">
                            <h3>+0123456789</h3>
                            <span>Call us direct 24/7 for get a free consultation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="font-dancing-script text-primary">About Us</h1>
                    <h1 className="mb-5">Why People Choose Us!</h1>
                    <p className="mb-4">We focus on providing exceptional service and personalized care to every client. Our experienced professionals use high-quality products to ensure the best results. With a clean, comfortable space and attention to detail, we make sure every visit leaves you feeling refreshed, confident, and satisfied..</p>
                    <div className="row g-3 mb-5">
                        <div className="col-sm-6">
                            <div className="bg-light text-center p-4">
                                <i className="fas fa-calendar-alt fa-4x text-primary"></i>
                                <h1 className="display-5" data-toggle="counter-up">25</h1>
                                <p className="text-dark text-uppercase mb-0">Years experience</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-light text-center p-4">
                                <i className="fas fa-users fa-4x text-primary"></i>
                                <h1 className="display-5" data-toggle="counter-up">999</h1>
                                <p className="text-dark text-uppercase mb-0">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
	 
	 
	 
	 
	 </>   
   );


}