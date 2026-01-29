import React from 'react'
import project1 from './Image/image1.png'
import project2 from './Image/image2.png'
import project3 from './Image/image.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Projects() {
      useEffect(() => {
             AOS.init({
                 duration: 1000,        
                 easing: 'ease-in-out', 
                 once: false,           
                 mirror: false,         
             });
         }, []);
  return (
    <div>
         <div className="row m-auto mt-4 g-4" style={{ maxWidth: "1250px" }}  >
        
                            <div className="col-12 col-lg-4" data-aos="fade-right"
                            data-aos-offset="300">
                                <div className="border border-secondary rounded-4 p-3 h-100"
                                    style={{ background: "#1f213d" }}>
                                    <div className="p-2 text-center">
                                        <img
                                            src={project2}
                                            alt="Project 1"
                                            className="img-fluid rounded-2"
                                        />
                                    </div>
        
                                    <div className="ps-2">
                                        <h4>E-COMMERCE</h4>
                                        <p className="small mt-3">
                                          A responsive e-commerce website inspired by Snitch, developed using HTML, CSS, and JavaScript.
Features include product listing, add to cart, remove from cart, quantity update, price calculation, and interactive UI elements.
                                        </p>
        
                                        <a href="https://snitch-project.netlify.app" target='_blanck' className="text-decoration-none" style={{ color: "#4383d1" }}>
                                            Live Demo
                                            <i className="ms-2 bi bi-box-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-12 col-lg-4"  data-aos="fade-up"
                            data-aos-offset="300">
                                <div className="border border-secondary rounded-4 p-3 h-100"
                                    style={{ background: "#1f213d" }}>
                                    <div className="p-2 text-center">
                                        <img
                                            src={project1}
                                            alt="Project 1"
                                            className="img-fluid rounded-2"
                                        />
                                    </div>
        
                                    <div className="ps-2">
                                        <h4>Starbucks Website</h4>
                                        <p className="small mt-3">
                                           A front-end clone of the Starbucks website created using HTML, CSS, and Media Queries.
The website is fully responsive across different screen sizes and devices.
                                        </p>    
                                <br /><br />
                                        <a href="https://starbuck-w-497f4d.netlify.app" target='_blank' className="text-decoration-none" style={{ color: "#4383d1" }}>
                                            Live Demo
                                            <i className="ms-2 bi bi-box-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4" data-aos="fade-left"

                            data-aos-offset="300">
                                <div className="border border-secondary rounded-4 p-3 h-100"
                                    style={{ background: "#1f213d" }}>
                                    <div className="p-2 text-center">
                                        <img
                                            src={project3}
                                            alt="Project 1"
                                            className="img-fluid rounded-2"
                                        />
                                    </div>
        
                                    <div className="ps-2">
                                        <h4>Amazon Prime</h4>
                                        <p className="small mt-3">
                                            A front-end clone of the Amazon Prime Video website built using pure HTML and CSS.
This project was created for learning and practicing web design, layout structure, and responsive styling.
                                        </p>
                        <br />
                                        <a href="https://amazon-my-project.netlify.app" target="_blank" className="text-decoration-none" style={{ color: "#4383d1" }}>
                                            Live Demo
                                            <i className="ms-2 bi bi-box-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}
