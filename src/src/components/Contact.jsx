export default function Contact()
{ 
     return(
	       
		<>
		
		<div className="container-fluid py-5">
        <div className="container">
            <div className="text-center wow fadeIn" data-wow-delay="0.1s">
                <h1 className="font-dancing-script text-primary">Contact</h1>
                <h1 className="mb-5">Have Any Query? Contact Us</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <h4 className="text-center lh-base mb-4">We’re here to help! Whether you want to book an appointment, ask about our services, or just need advice, feel free to get in touch. Our friendly team will respond promptly to your message. <a href="https://htmlcodex.com/downloading/?item=3597">Pro Version</a> only.</h4>
                    <div className="wow fadeIn" data-wow-delay="0.3s">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3 ms-0" type="submit">SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
		
		
		</>
		
	);

}