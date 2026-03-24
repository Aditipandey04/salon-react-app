import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import '../testimonial.css';

import img1 from "../assets/testimonial-1.jpg";
import img2 from "../assets/testimonial-2.jpg";
import img3 from "../assets/testimonial-3.jpg";
import img4 from "../assets/testimonial-4.jpg";

export default function Testimonial() {
  return (
    <div className="container-fluid py-5">
      <div className="container">

        <div className="text-center mb-5">
         
		   <h1 className="font-dancing-script text-primary">Testimonial</h1>
          <h1>What Clients Say!!!</h1>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >

          <SwiperSlide>
            <div className="bg-light p-4 text-center rounded" className="bg-light p-4 text-center rounded testimonial-card">
              <p>
                Amazing service, very professional staff. Highly recommended!
              </p>
              <img
                src={img1}
                className="rounded-circle mb-3"
                style={{ width: 100, height: 100 }}
              />
              <h5>Arpita Yadav</h5>
              <span>Doctor</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-light p-4 text-center rounded" className="bg-light p-4 text-center rounded testimonial-card">
              <p>
                Loved the makeover. The experience was wonderful 💇‍♀️
              </p>
              <img
                src={img2}
                className="rounded-circle mb-3"
                style={{ width: 100, height: 100 }}
              />
              <h5>Payal Gehlot</h5>
              <span>Engineer</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-light p-4 text-center rounded" className="bg-light p-4 text-center rounded testimonial-card">
              <p>
                Best salon experience I’ve ever had. Will visit again!
              </p>
              <img
                src={img3}
                className="rounded-circle mb-3"
                style={{ width: 100, height: 100 }}
              />
              <h5>Anvi Pandey</h5>
              <span>Blogger</span>
            </div>
          </SwiperSlide>
		  
		  <SwiperSlide>
            <div className="text-center bg-light p-4 testimonial-card"  className="bg-light p-4 text-center rounded">
               <p>Amazing experience, loved the service.</p>
                <img
                src={img4}
                className="rounded-circle mb-3"
                style={{ width: 100, height: 100 }}
              />
               <h5>Neha Sharma</h5>
               <span>Teacher</span>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
}