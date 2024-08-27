import React from 'react'
import img from '../images/img.png';
import img1 from '../images/generic-1-1.png';
import img2 from '../images/generic-1-2.png';
import img3 from '../images/generic-1-3.png';
import square1 from '../images/generic-square-1.jpg';
import square2 from '../images/generic-square-2.jpg';
import square3 from '../images/generic-square-3.jpg';
import square4 from '../images/generic-square-4.jpg';
import Client from '../pages/Client';

import TestimonialCarousel from '../components/TestimonialCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


function About() {
  return (
    <div>
		{/* <Helmet>
                <title>Kitecareer-about</title>
				
            </Helmet> */}
            
		<Header />
		<div role="main" className="main">
        <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                        <h1 className="text-color-dark font-weight-bold">About Us</h1>
                    </div>
                    <div className="col-md-4 order-1 order-md-2 align-self-center">
                        <ul className="breadcrumb d-flex justify-content-md-end text-3-5">
                            <li><a href="#\" className="text-color-default text-color-hover-primary text-decoration-none">HOME</a></li>
                            <li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; ABOUT US</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div className="container my-5 pt-md-4 pt-xl-0">
				<div className="row align-items-center justify-content-center pb-4 mb-5">
					<div className="col-lg-6 pb-sm-4 pb-lg-0 mb-5 mb-lg-0">
						<div className="overflow-hidden">
							<h2 className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation animated maskUp appear-animation-visible"
								data-appear-animation="maskUp" data-appear-animation-delay="300"
								style={{ animationDelay: '300ms' }}>Five Years of Top Experience</h2>
						</div>
						<div className="custom-divider divider divider-primary divider-small my-3">
							<hr className="my-0 appear-animation animated customLineProgressAnim appear-animation-visible"
								data-appear-animation="customLineProgressAnim" data-appear-animation-delay="700"
								style={{ animationDelay: '700ms' }} />
						</div>
						<p className="font-weight-light text-3-5 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
							data-appear-animation="fadeInUpShorter" data-appear-animation-delay="450"
							style={{ animationDelay: '450ms' }}>KiteCareer is a firm that offers training and services in a variety of industries, including e-commerce, mobile applications, web development, and the creation of various tools and applications.</p>
						<p className="pb-1 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
							data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700"
							style={{ animationDelay: '700ms' }}>We want to be the best in terms of dependability, quality, and support thanks to our Experts with experience in a variety of software development platforms and the service sector.</p>
						<p className="pb-1 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
							data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700"
							style={{ animationDelay: '700ms' }}>30 in house active employees, comprising of 10 UI/UX developers , 6 Front-end Developers, 10 python developers, 3 Java developers, and 1 HR professionals.</p>	
						<div className="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
							<div className="feature-box align-items-center border-top-0 border-end-0 border-bottom-0 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
								data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="1200"
								style={{ animationDelay: '1200ms' }}>
								<div className="feature-box-icon bg-transparent">
									<i className="icons fa fa-phone text-6 text-color-dark"></i>
								</div>
								<div className="feature-box-info line-height-2 ps-1">
									<span className="d-block text-1 font-weight-semibold text-color-default">CALL US
										NOW</span>
									<strong className="text-4-5"><a href="tel:+91 9498478472"
											className="text-color-dark text-color-hover-primary text-decoration-none">+91 9498478472</a></strong>
								</div>
							</div>
						</div>
					</div>
					<div className="col-10 col-md-9 col-lg-6 ps-lg-5 pe-5 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
						data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="1450"
						data-plugin-options="{&#39;accY&#39;: -200}" style={{ animationDelay: '1450ms' }}>
						<div className="position-relative">
							<div data-plugin-float-element=""
								data-plugin-options="{&#39;startPos&#39;: &#39;top&#39;, &#39;speed&#39;: 0.2, &#39;transition&#39;: true, &#39;transitionDuration&#39;: 1000, &#39;isInsideSVG&#39;: true}"
								style={{ top: '0px', transition: 'transform 1000ms ease-out 0ms', transform: 'translate3d(0px, 9.60084%, 0px)' }}>
								<img src={img} className="img-fluid" alt="" />
							</div>
							<div className="position-absolute transform3dxy-n50" style={{ top: "13%", left: "-1%" }}>
								<div data-plugin-float-element=""
									data-plugin-options="{&#39;startPos&#39;: &#39;top&#39;, &#39;speed&#39;: 0.5, &#39;transition&#39;: true, &#39;transitionDuration&#39;: 2000, &#39;isInsideSVG&#39;: false}"
									style={{ top: '0px', transition: 'transform 2000ms ease-out 0ms', transform: 'translate3d(0px, 199.56%, 0px)' }}>
									<img src={img1}	className="appear-animation animated fadeInUpShorterPlus appear-animation-visible"
										alt="" data-appear-animation="fadeInUpShorterPlus"
										data-appear-animation-delay="1700" style={{ animationDelay: '1700ms' }} />
								</div>
							</div>
							<div className="position-absolute transform3dxy-n50 ms-5 pb-5 ms-xl-0"
								style={{ top: '32%', left: '95%' }}>
								<div data-plugin-float-element=""
									data-plugin-options="{&#39;startPos&#39;: &#39;top&#39;, &#39;speed&#39;: 1, &#39;transition&#39;: true, &#39;transitionDuration&#39;: 1500, &#39;isInsideSVG&#39;: false}"
									style={{ top: '0px', transition: 'transform 1500ms ease-out 0ms', transform: 'translate3d(0px, 99.1993%, 0px)' }}>
									<img src={img2}
										className="appear-animation animated fadeInRightShorterPlus appear-animation-visible"
										alt="" data-appear-animation="fadeInRightShorterPlus"
										data-appear-animation-delay="1900" style={{ animationDelay: '1900ms' }} />
								</div>
							</div>
							<div className="position-absolute transform3dxy-n50" style={{ top: '90%', left: '19%' }} >
								<div data-plugin-float-element=""
									data-plugin-options="{&#39;startPos&#39;: &#39;top&#39;, &#39;speed&#39;: 2, &#39;transition&#39;: true, &#39;transitionDuration&#39;: 2500, &#39;isInsideSVG&#39;: false}"
									style={{ top: '0px', transition: 'transform 2500ms ease-out 0ms', transform: 'translate3d(0px, 48.4394%, 0px)' }}>
									<img src={img3}
										className="appear-animation animated fadeInDownShorterPlus appear-animation-visible"
										alt="" data-appear-animation="fadeInDownShorterPlus"
										data-appear-animation-delay="2100" style={{ animationDelay: '2100ms' }} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row pb-2">
					<div className="col-lg-4 text-center px-lg-5 mb-5 mb-lg-0">
						<a href="\" className="text-decoration-none">
							<div className="custom-icon-box-style-1 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
								data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="250"
								data-plugin-options="{&#39;accY&#39;: -200}" style={{ animationDelay: '250ms' }}>
								<div className="custom-icon-style-1 mb-4">
									<div className="animated-icon animated fadeIn svg-fill-color-primary">
									<i className="fa-solid fa-cart-shopping"></i>
									<i className="fa fa-desktop " aria-hidden="true"></i>
									</div>
								</div>
								<h3
									className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-4 px-xl-5 my-2">
									Web Development</h3>
								<p style={{textAlign:'justify'}}>Web development is the process of creating and maintaining websites; it's the labour done in the background to make a website appear nice, function quickly, and provide a positive user experience.</p>
	
									
							</div>
						</a>
					</div>
					<div className="col-lg-4 text-center px-lg-5 mb-5 mb-lg-0">
						<a href="\" className="text-decoration-none">
							<div className="custom-icon-box-style-1 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
								data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="250"
								data-plugin-options="{&#39;accY&#39;: -200}" style={{ animationDelay: '250ms' }}>
								<div className="custom-icon-style-1 mb-4">
									<div className="animated-icon animated fadeIn svg-fill-color-primary">
										<i className="fa fa-mobile" aria-hidden="true"></i>
									</div>
								</div>
								<h3
									className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-xl-5 my-2 mx-4">
									Mobile APP <h6>(Andriod / IOS)</h6></h3>
									< p style={{textAlign:'justify'}}> A mobile application, sometimes known as an app, is a computer programme or software application designed specifically to run on a mobile device, such as a phone, tablet, or watch.
Selecting a programming language differs between creating apps for iOS and Android. </p>
							</div>
						</a>
					</div>
					<div className="col-lg-4 text-center px-lg-5">
						<a href="\"
							className="text-decoration-none">
							<div className="custom-icon-box-style-1 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
								data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="250"
								data-plugin-options="{&#39;accY&#39;: -200}" style={{ animationDelay: '250ms' }}>
								<div className="custom-icon-style-1 mb-4">
									<div className="animated-icon animated fadeIn svg-fill-color-primary">
									<i class="fa fa-cloud fa-2x" aria-hidden="true"></i>
									</div>
								</div>
								<h3
									className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-3 px-xl-5 my-2">
									Cloud</h3>
									< p style={{textAlign:'justify'}}>Cloud computing relies on sharing of resources to achieve coherence and typically uses a pay-as-you-go model, which can help in reducing capital expenses but may also lead to unexpected operating expenses for users.</p>

							</div>
						</a>
					</div>
				</div> 
			</div>

            <section className="section border-0 m-0">
				<div className="container pb-3 my-5">
					<div className="row justify-content-center pb-3 mb-4">
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
								<a href="\"
									className="btn btn-light btn-outline custom-btn-border-radius font-weight-bold text-color-light text-color-hover-dark bg-color-hover-light btn-px-5 btn-py-3" alt="applyNow">Apply Now</a>
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
			<div><Client /></div>

			<Footer />
	  </div>
    </div>
  )
}

export default About
