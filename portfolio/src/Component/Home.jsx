import React, { useState } from 'react'
import Projects from './Projects'
import Tech from './Tech';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from './Footer';

export default function Home() {
    const [activeSection, setActiveSection] = useState("projects")


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <div className='hero-section' data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100" tabIndex="0">
            <div>
                <nav className="navbar navbar-expand-lg fixed-top bg-transparent bg-opacity-75 backdrop-blur" style={{ backdropFilter: "blur(10px) saturate(70%)" }}
                >
                    <div className="container border-3 border-black  rounded">
                        <a className="navbar-brand" href="#" id='grad'>Poojan Patel</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            </ul>
                            <form className="d-flex" role="search">
                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold" >
                                    <li className="nav-item">
                                        <a className="nav-link active " aria-current="page" href="#Home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#About">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Portofolio" >Portofolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Contact" >Contact</a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container mt-5 pt-5'>
                <div className="badge-glow mb-4" id="Home" data-aos="fade-up"
                    data-aos-duration="1000">
                    ✨ Ready to Innovate
                </div>

                <div className='d-flex'>
                    <div>
                        <h1 className="hero-title" data-aos="fade-up"
                            data-aos-duration="2000">
                            Full Stack <br />
                            <span id='grad-d'>Developer</span>
                        </h1>
                        <h3 className='mt-4 mb-4 ' data-aos="fade-up"
                            data-aos-duration="2000">Computer Science</h3>
                        <p className='mt-4 mb-4 ' id='Enhance' data-aos="fade-up"
                            data-aos-duration="3000">Enhancing digital experiences that are smooth, scalable, and made to impress</p>

                        <div className="tech-stack my-4 cursor-pointer">
                            <span className='lan-btn' data-aos="fade-up"
                                data-aos-duration="3000">Bootstrap</span>
                            <span className='lan-btn' data-aos="fade-up"
                                data-aos-duration="3000">TELWIND CSS</span>
                            <span className='lan-btn' data-aos="fade-up"
                                data-aos-duration="3000">Javascript.js</span>
                            <span className='lan-btn' data-aos="fade-up"
                                data-aos-duration="3000">REACT JS</span>
                        </div>
                        <div className='mt-4'>
                            <button className="btn small_btn  px-5 py-2 text-white" data-aos="fade-up"
                                data-aos-duration="3000">
                                Project <i className="ms-1 bi bi-box-arrow-up-right"></i>
                            </button>

                            <button className="btn small_btn  px-5 py-2 text-white ms-3" data-aos="fade-up"
                                data-aos-duration="3000">
                                Contact <i className="ms-1 bi bi-envelope"></i>
                            </button>


                            <div className="mt-5 d-flex d-none d-sm-flex gap-5 ms-3">
                                <a href="https://github.com/poojanp150-gif" target="_blank" >
                                    <button className="border-0 bg-black text-white rounded-2 p-1 px-2 icon-btn">
                                        <i className="bi bi-github"></i>
                                    </button>
                                </a>
                                <a href="https://www.linkedin.com/in/poojan-patel-70a859326/" target='_blank'>
                                    <button className="border-0 bg-black text-white rounded-2 p-1 px-2 icon-btn">
                                        <i className="bi bi-linkedin"></i>
                                    </button>
                                </a>
                                <a href="https://www.instagram.com/pujan_patel_3115" target='_blank'>
                                    <button className="border-0 bg-black text-white rounded-2 p-1 px-2 icon-btn">
                                        <i className="bi bi-instagram"></i>
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div></div>
                </div>

                {/* <br /><br /><br /> */}
                <div className="d-flex align-items-center justify-content-center text-center text-light mt-5" id="About">
                    <div className="container px-4">

                        <h1 className="fw-bold display-5 mb-4" style={{ color: "#8b5cf6" }} data-aos="fade-up"> About Me</h1>
                        <p className="mx-auto mb-5 text-secondary fs-5" style={{ maxWidth: "750px" }} data-aos="fade-right">
                            
                            Hello, I’m <b className="text-white"> Poojan Patel </b>, a passionate Full-Stack Web Developer with a strong interest in building scalable and efficient web applications. I have completed a professional full-stack development course and continuously work on improving my technical skills by exploring new technologies. With a strong focus on continuous learning and hands-on practice, my goal is to establish a successful career in the IT industry by 2026 and gradually advance toward fields like AI and Data Science.
                        </p>


                        <div className="d-flex justify-content-center gap-4 flex-wrap ">
                            <a className='btn btn-hover-scale btn-lg text-white px-4' href="/cv.pdf" download style={{ backgroundColor: "#8b5cf6" }} data-aos="fade-up" data-aos-duration="2000">


                                <i className="bi bi-file-earmark-text me-2"></i>
                                Download CV
                            </a>

                            <a href="#Portofolio" className="btn btn-hover-scale btn-lg px-4 border border-secondary text-white" data-aos="fade-up"
                                data-aos-duration="3000"><i className="bi bi-code-slash me-2"></i>View Projects</a>



                        </div>
                    </div>
                </div>


                <div className="container py-5" >
                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-4 btn-hover-scale" data-aos="fade-right"
                            data-aos-offset="300" >
                            <a href="#Portofolio" className='text-decoration-none'>
                                <div
                                    className="h-100 p-4 rounded-4 text-light position-relative"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #1e293b, #0f172a)",
                                    }}
                                >
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: 52, height: 52, background: "rgba(255,255,255,0.1)" }}>
                                            <i className="bi bi-code-slash fs-4"></i>
                                        </div>
                                        <h2 className="fw-bold">4</h2>
                                    </div>

                                    <h6 className=" mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-center">TOTAL PROJECTS</h6>
                                    <p className="text-secondary  mb-0" data-aos="fade-up" data-aos-duration="22000" data-aos-anchor-placement="top-center">
                                        Innovative web & mobile solutions crafted
                                    </p>

                                    <i className="bi bi-arrow-up-right position-absolute bottom-0 end-0 m-4 opacity-50"></i>
                                </div>
                            </a>
                        </div>


                        <div className="col-12 col-md-6 col-lg-4 btn-hover-scale" data-aos="fade-up"
                            data-aos-offset="300">
                            <a href="#Portofolio" className='text-decoration-none'>
                                <div
                                    className="h-100 p-4 rounded-4 text-light position-relative"
                                    style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", }}
                                >
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: 52, height: 52, background: "rgba(255,255,255,0.1)" }}>
                                            <i className="bi bi-award fs-4"></i>
                                        </div>
                                        <h2 className="fw-bold">3</h2>
                                    </div>

                                    <h6 className=" mb-2" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-center">CERTIFICATES</h6>
                                    <p className="text-secondary  mb-0" data-aos="fade-up" data-aos-duration="22000" data-aos-anchor-placement="top-center">
                                        Professional skills validated
                                    </p>

                                    <i className="bi bi-arrow-up-right position-absolute bottom-0 end-0 m-4 opacity-50"></i>
                                </div>
                            </a>
                        </div>


                        <div className="col-12 col-md-6 col-lg-4 btn-hover-scale" data-aos="fade-left"

                            data-aos-offset="300">
                            <a href="#Portofolio" className='text-decoration-none'>
                                <div className="h-100 p-4 rounded-4 text-light position-relative" style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", }} >
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: 52, height: 52, background: "rgba(255,255,255,0.1)" }}>
                                            <i className="bi bi-globe fs-4"></i>
                                        </div>
                                        <h2 className="fw-bold">0</h2>
                                    </div>

                                    <h6 className="mb-2" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-center">YEARS OF EXPERIENCE</h6>
                                    <p className="text-secondary  mb-0" data-aos="fade-up" data-aos-duration="22000" data-aos-anchor-placement="top-center">
                                        Continuous learning journey
                                    </p>
                                    <i className="bi bi-arrow-up-right position-absolute bottom-0 end-0 m-4 opacity-50"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center text-center text-light mt-5' id="Portofolio">
                    <div className='container'>
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-center">

                            <h1 className="fw-bold display-5 mb-2   " style={{ color: "#8b5cf6" }}> Portfolio Showcase</h1>
                            <p className="mx-auto mb-5 text-secondary fs-5" style={{ maxWidth: "750px" }}>
                                Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in
                                my continuous learning path.</p>
                        </div>
                        <div className="row text-center p-2 m-auto border border-secondary rounded-4"
                            style={{
                                background: "linear-gradient(13deg, #1e293b, #020617)",
                            }}
                        >
                            <div className="col-4 Portfolio-Showcase py-3 rounded-3" onClick={() => setActiveSection("projects")}>
                                <button
                                    className='border-0 bg-transparent text-white'

                                >
                                    <i className="bi bi-code-slash me-2 fs-4"></i>
                                    <p className="mb-0">Projects</p>
                                </button>

                            </div>
                            <div className="col-4 Portfolio-Showcase py-3 rounded-3" onClick={() => setActiveSection("certificates")}>
                                <button className='border-0 bg-transparent text-white' >
                                    <i className="bi bi-award fs-4"></i>
                                    <p className="mb-0">Certificates</p>
                                </button>
                            </div>
                            <div className="col-4 Portfolio-Showcase py-3 rounded-3" onClick={() => setActiveSection("tech")}>
                                <button className='border-0 bg-transparent text-white' >
                                    <i className="bi bi-stack me-2 fs-4"></i>
                                    <p className="mb-0">Tech Stack</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row m-auto mt-4 g-4" style={{ maxWidth: "1250px" }}>

                </div> */}
                {activeSection === "projects" && (
                    <div className="mt-5">
                        <Projects />
                    </div>
                )}

                {activeSection === "tech" && (
                    <div className="mt-5">
                        <Tech />
                    </div>
                )}

                {activeSection === "certificates" && (
                    <div className="mt-5 text-white text-center">
                        <h2>Certificates Coming Soon 🚀</h2>
                    </div>
                )}
                {/* <div className="row m-auto mt-4 g-4" style={{ maxWidth: "1250px" }}>

                    <div className="col-12 col-lg-4">
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
                                <h4>IntervueAI</h4>
                                <p className="small mt-3">
                                    Real-time mock interviews with AI, no forms or clicks just natural,
                                    personalized conversations.
                                </p>

                                <a href="#" className="text-decoration-none" style={{ color: "#4383d1" }}>
                                    Live Demo
                                    <i className="ms-2 bi bi-box-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
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
                                <h4>IntervueAI</h4>
                                <p className="small mt-3">
                                    Real-time mock interviews with AI, no forms or clicks just natural,
                                    personalized conversations.
                                </p>

                                <a href="#" className="text-decoration-none" style={{ color: "#4383d1" }}>
                                    Live Demo
                                    <i className="ms-2 bi bi-box-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
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
                                <h4>IntervueAI</h4>
                                <p className="small mt-3">
                                    Real-time mock interviews with AI, no forms or clicks just natural,
                                    personalized conversations.
                                </p>

                                <a href="#" className="text-decoration-none" style={{ color: "#4383d1" }}>
                                    Live Demo
                                    <i className="ms-2 bi bi-box-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <br /><br />
                <div className="d-flex align-items-center justify-content-center  text-light mt-5 mb-5" id='Contact'>
                    <div className="container px-4">
                        <h1 className="fw-bold display-5 mb-2 text-center" style={{ color: "#8b5cf6" }}> Contact Me</h1>
                        <p className="mx-auto mb-5 text-secondary fs-5 text-center" style={{ maxWidth: "750px" }} >
                            Got a question? Send me a message, and I'll get back to you soon.
                        </p>
                        <div
                            className="rounded-5 mx-auto py-4 py-md-5 px-3 px-md-0"
                            style={{ background: "linear-gradient(15deg, #1e293b, #0f172a)", maxWidth: "650px" }}
                        >
                            <div
                                className="rounded-5 mx-auto py-3 px-2 px-md-0"
                                style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", maxWidth: "550px" }}
                            >

                                <div className="p-3 p-md-4">

                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="fs-3 fs-md-1" style={{ color: "#8b5cf6" }}>
                                            Get in Touch
                                        </h1>
                                        <i className="bi bi-share fs-4 fs-md-2" style={{ color: "#8b5cf6" }}></i>
                                    </div>

                                    <p className="text-secondary fs-6 fs-md-5 mb-4">
                                        Have something to discuss? Send me a message and let's talk.
                                    </p>

                                    <div>
                                        <div className="pt-3 pb-5">
                                            <div className="position-relative mb-4">
                                                <i className="bi bi-person position-absolute  fs-4" style={{
                                                    top: "50%",
                                                    left: "12px",
                                                    transform: "translateY(-50%)",
                                                    color: "#9ca3af"
                                                }}
                                                ></i>
                                                <input type="text" name="name" placeholder="Your Name" className="form-control  ps-5 py-3  white-placeholder  text-white border-0 rounded-3xl  " style={{ background: "linear-gradient(15deg, #1e293b, #0f172a)", maxWidth: "550px" }} required />
                                            </div>


                                            <div className="position-relative mb-4">
                                                <i className="bi bi-envelope position-absolute  fs-4" style={{
                                                    top: "50%",
                                                    left: "12px",
                                                    transform: "translateY(-50%)",
                                                    color: "#9ca3af"
                                                }}
                                                ></i>
                                                <input type="email" name="email" placeholder="Your Email" className="form-control ps-5 py-3 white-placeholder text-white border-0 rounded-3xl  " style={{ background: "linear-gradient(15deg, #1e293b, #0f172a)", maxWidth: "550px" }} required />
                                            </div>

                                            <div className="position-relative mb-4">
                                                <i className="bi bi-chat-left position-absolute  fs-4 " style={{
                                                    top: "20%",
                                                    left: "12px",
                                                    transform: "translateY(-50%)",
                                                    color: "#9ca3af"
                                                }}
                                                ></i>
                                                <textarea name="message" placeholder="Your Message" className="form-control ps-5 py-3 white-placeholder text-white border-0 rounded-3xl  h-100 " rows="5" style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", maxWidth: "550px" }} required></textarea>
                                            </div>
                                            <button type="submit" className="btn send_btn w-100 py-3 text-white rounded-3xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                                                Send Message
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}