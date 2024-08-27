import React from 'react'
import { Link } from 'react-router-dom';
import square1 from '../images/generic-square-1.jpg';
import square2 from '../images/generic-square-2.jpg';
import square3 from '../images/generic-square-3.jpg';
import square4 from '../images/generic-square-4.jpg';
import Client from '../pages/Client';


import ServiceCarousel from '../components/ServiceCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Services() {
    return (
        <div>
			<Header />
            <div role="main" className="main">
                <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                                <h1 className="text-color-dark font-weight-bold">Services</h1>
                            </div>
                            <div className="col-md-4 order-1 order-md-2 align-self-center">
                                <ul className="breadcrumb d-flex justify-content-md-end text-3-5">
                                    <li><a href="#\" className="text-color-default text-color-hover-primary text-decoration-none">HOME</a></li>
                                    <li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container py-5 my-5">
				<div className="overflow-hidden">
							<h2 className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation animated maskUp appear-animation-visible"
								data-appear-animation="maskUp" data-appear-animation-delay="300"
								style={{ animationDelay: '300ms' }}>Our Services</h2>
						</div>
						<div className="custom-divider divider divider-primary divider-small my-3">
							<hr className="my-0 appear-animation animated customLineProgressAnim appear-animation-visible"
								data-appear-animation="customLineProgressAnim" data-appear-animation-delay="700"
								style={{ animationDelay: '700ms' }} />
						</div>
                    <div className="row mb-4 pb-2">
                        <div className="col">
						
                            <p className="text-4 font-weight-semibold mb-4 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300" style={{ animationDelay: "300ms" }}>Using the newest tools & technology, KiteCareer will aid in the expansion of the business. We continuously study in order to grasp the demands and needs of the commercial sector.</p>
                            <p className="pb-1 mb-3 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500" style={{ animationDelay: "500ms" }}>Services include hardware deployment, training, consulting, software development, and systems integration.</p>
                            <p className="mb-1 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700" style={{ animationDelay: "700ms" }}>Outsourcing, managed services, security services, data management, and cloud computing are some of the areas that make up the overall market for IT services.</p>
                        </div>
                    </div>
                    <div className="row row-gutter-sm mb-5 appear-animation animated fadeInUpShorter appear-animation-visible"
                        data-appear-animation="fadeInUpShorter" data-appear-animation-delay="750"
                        style={{ animationDelay: '750ms' }}>
                        <ServiceCarousel />
                    </div>
                </div>

                <section className="section border-0 m-0">
                    <div className="container pb-5 my-5">
                        <div className="row justify-content-center">
                            <div className="col text-center">
                                <h2 className="font-weight-bold text-color-dark line-height-1 mb-0">See What Clients Are Saying
                                </h2>
                                <div className="d-inline-block custom-divider divider divider-primary divider-small my-3">
                                    <hr className="my-0" />
                                </div>
                                <p className="font-weight-bold text-3-5 mb-1">We are very proud of the service we provide and
                                    stand by every product we carry.</p>
                                <p className="font-weight-light text-3-5 mb-0">Read our testimonials from our happy customers.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <TestimonialCarousel />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-height-3 bg-primary border-0 m-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xl-7 text-center text-lg-start mb-4 mb-lg-0">
                                {/* <h2
								className="text-color-light font-weight-medium text-3-5 line-height-2 line-height-sm-1 ls-0 mb-2 mb-lg-2">
								LOOKING FOR HONEST AND RELIABLE SERVICES?</h2> */}
                                <h3
                                    className="font-weight-bold text-color-light text-transform-none text-8 line-height-2 line-height-lg-1 mb-1">
                                    Talented individual with in-depth knowledge of designing and development.</h3>
                                <p className="font-weight-bold text-color-light text-4 opacity-7 mb-0">Make An Enquiry Today
                                    With Our Online Form</p>
                            </div>
                            <div className="col-lg-6 col-xl-5">
                                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                                    <div className="feature-box align-items-center mb-3 mb-lg-0">
                                        <div className="feature-box-icon bg-transparent">
                                            <i className="icons fa fa-phone text-6 text-color-light"></i>
                                        </div>
                                        <div className="feature-box-info line-height-2 ps-1">
                                            <span className="d-block text-1 font-weight-semibold text-color-light mb-1">CALL US
                                                NOW</span>
                                            <strong className="text-4-5"><a href="tel:+1234567890"
                                                className="text-color-light text-decoration-none">+91 9498478472</a></strong>
                                        </div>
                                    </div>
                                    <Link to="/"
                                        className="btn btn-light btn-outline custom-btn-border-radius font-weight-bold text-color-light text-color-hover-dark bg-color-hover-light btn-px-5 btn-py-3" target="_blank">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="lightbox"
                    data-plugin-options="{&#39;delegate&#39;: &#39;a&#39;, &#39;type&#39;: &#39;image&#39;, &#39;gallery&#39;: {&#39;enabled&#39;: true}, &#39;mainClass&#39;: &#39;mfp-with-zoom&#39;, &#39;zoom&#39;: {&#39;enabled&#39;: true, &#39;duration&#39;: 300}}">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 col-md-3 px-0">
                                <a className="d-inline-block zoom-image rounded-0"
                                    href="images/generic-square-1.jpg">
                                    <img className="img-fluid rounded-0" src={square1} alt="" />
                                </a>
                            </div>
                            <div className="col-6 col-md-3 px-0">
                                <a className="d-inline-block zoom-image rounded-0"
                                    href="images/generic-square-2.jpg">
                                    <img className="img-fluid rounded-0" src={square2} alt="" />
                                </a>
                            </div>
                            <div className="col-6 col-md-3 px-0">
                                <a className="d-inline-block zoom-image rounded-0"
                                    href="images/generic-square-3.jpg">
                                    <img className="img-fluid rounded-0" src={square3} alt="" />
                                </a>
                            </div>
                            <div className="col-6 col-md-3 px-0">
                                <a className="d-inline-block zoom-image rounded-0"
                                    href="images/generic-square-4.jpg">
                                    <img className="img-fluid rounded-0" src={square4} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

				<Client />
				<Footer />
            </div>
        </div>
    )
}

export default Services
