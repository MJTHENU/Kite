import React from 'react'
import img1 from '../images/generic-1-1.png';
import img2 from '../images/generic-1-2.png';
import img3 from '../images/generic-1-3.png';
import product1 from '../images/product1.png';
import square1 from '../images/generic-square-1.jpg';
import square2 from '../images/generic-square-2.jpg';
import square3 from '../images/generic-square-3.jpg';
import square4 from '../images/generic-square-4.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Client from './Client';

function Propertymanagement() {
	return (
		<div>
			<Header />
			<div role="main" className="main">
				<section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
					<div className="container">
						<div className="row">
							<div className="col-md-8 order-2 order-md-1 align-self-center p-static">
								<h1 className="text-color-dark font-weight-bold">Products</h1>
							</div>
							<div className="col-md-4 order-1 order-md-2 align-self-center">
								<ul className="breadcrumb d-flex justify-content-md-end text-3-5">
									<li><a href="#\" className="text-color-default text-color-hover-primary text-decoration-none">HOME</a></li>
									<li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; PROPERTY MANAGEMENT</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<div className="container my-5 pt-md-4 pt-xl-0">
					<div className="row align-items-center justify-content-center pb-4 mb-5">
						<div className="col-lg-6 pb-sm-4 pb-lg-0 mb-5 mb-lg-0">
							<div className="overflow-hidden">
								<h2 id="about" className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation animated maskUp appear-animation-visible"
									data-appear-animation="maskUp" data-appear-animation-delay="300"
									style={{ animationDelay: '300ms' }}>Property Management</h2>
							</div>
							<div className="custom-divider divider divider-primary divider-small my-3">
								<hr className="my-0 appear-animation animated customLineProgressAnim appear-animation-visible"
									data-appear-animation="customLineProgressAnim" data-appear-animation-delay="700"
									style={{ animationDelay: '700ms' }} />
							</div>
							<p className="font-weight-light text-3-5 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
								data-appear-animation="fadeInUpShorter" data-appear-animation-delay="450"
								style={{ animationDelay: '450ms' }}>Property management software helps landlords and real estate professionals track leases, residents and maintenance tasks, as well as collect rent and manage finances to reduce costs and streamline operations.</p>
							<p className="pb-1 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
								data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700"
								style={{ animationDelay: '700ms' }}>Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor. Generally, property managers take responsibility for day-to-day repairs and ongoing maintenance, security, and upkeep of properties. They usually work for the owners of investment properties such as apartment and condominium complexes, private home communities, shopping centers, and industrial parks.</p>
							<p className="pb-1 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
								data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700"
								style={{ animationDelay: '700ms' }}>Their main roles are to manage routine tasks delegated to them by the owners and to preserve the value of the properties that they manage while generating income.</p>
						</div>
						<div className="col-10 col-md-9 col-lg-6 ps-lg-5 pe-5 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
							data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="1450"
							data-plugin-options="{&#39;accY&#39;: -200}" style={{ animationDelay: '1450ms' }}>
							<div className="position-relative">
								<div data-plugin-float-element=""
									data-plugin-options="{&#39;startPos&#39;: &#39;top&#39;, &#39;speed&#39;: 0.2, &#39;transition&#39;: true, &#39;transitionDuration&#39;: 1000, &#39;isInsideSVG&#39;: true}"
									style={{ top: '0px', transition: 'transform 1000ms ease-out 0ms', transform: 'translate3d(0px, 9.60084%, 0px)' }}>
									<img src={product1} className="img-fluid" alt="" />
								</div>
								<div className="position-absolute transform3dxy-n50" style={{ top: "25%", left: "7%" }}>
									<div data-plugin-float-element=""
										data-plugin-options="{&#39;startPos&#39;: &#39;top&#39;, &#39;speed&#39;: 0.5, &#39;transition&#39;: true, &#39;transitionDuration&#39;: 2000, &#39;isInsideSVG&#39;: false}"
										style={{ top: '0px', transition: 'transform 2000ms ease-out 0ms', transform: 'translate3d(0px, 199.56%, 0px)' }}>
										<img src={img1} className="appear-animation animated fadeInUpShorterPlus appear-animation-visible"
											alt="" data-appear-animation="fadeInUpShorterPlus"
											data-appear-animation-delay="1700" style={{ animationDelay: '1700ms' }} />
									</div>
								</div>
								<div className="position-absolute transform3dxy-n50 ms-5 pb-5 ms-xl-0"
									style={{ top: '32%', left: '88%' }}>
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

				</div>

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

				<Client />
				<Footer />
			</div>
		</div>
	)
}

export default Propertymanagement
