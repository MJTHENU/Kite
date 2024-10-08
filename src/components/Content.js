import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import img from '../images/img.png';
import img1 from '../images/generic-1-1.png';
import img2 from '../images/generic-1-2.png';
import img3 from '../images/generic-1-3.png';
import bg from '../images/bg.jpg';
import bg1 from '../images/bg2.jpg';
import square1 from '../images/generic-square-1.jpg';
import square2 from '../images/generic-square-2.jpg';
import square3 from '../images/generic-square-3.jpg';
import square4 from '../images/generic-square-4.jpg';
import client1 from '../images/thedallogo.png';
import client2 from '../images/bjmmlogo.png';
import client3 from '../images/dsrlogo.png';
// import client5 from '../images/azhillogo.png';
import client6 from '../images/nulogo.png';
import client7 from '../images/portfolio/client7.png';
import client8 from '../images/portfolio/client8.png';
import client9 from '../images/portfolio/client9.png';
// import client10 from '../images/portfolio/client10.png';
// import client11 from '../images/portfolio/client11.png';
import client12 from '../images/portfolio/client12.png';
import client13 from '../images/portfolio/client13.png';
import client14 from '../images/portfolio/client14.png';
// import client15 from '../images/portfolio/client15.png';
import clientnimir from '../images/portfolio/Nimir.png'
import client16 from '../images/portfolio/client16.png';
import client17 from '../images/portfolio/client17.png';
import clientreios from '../images/portfolio/Reios.png';
import '../css/App.css';
import ServiceCarousel from './ServiceCarousel';
import TestimonialCarousel from './TestimonialCarousel';
import Client from '../pages/Client';

function Content(){
    return(
		<>
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
						<div className="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
							<Link to="/about"
								className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
								data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="950"
								style={{ animationDelay: '950ms' }}>VIEW MORE</Link>
							<div className="feature-box align-items-center border border-top-0 border-end-0 border-bottom-0 custom-remove-mobile-xs-border-left ms-sm-4 ps-sm-4 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
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
							<div className="position-absolute transform3dxy-n50 ms-5 pb-4 ms-xl-0"
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
								<p style={{textAlign:'justify'}}> A mobile application, sometimes known as an app, is a computer programme or software application designed specifically to run on a mobile device, such as a phone, tablet, or watch.
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
									Cloud Computing</h3>
								<p style={{textAlign:'justify'}}>Cloud computing relies on sharing of resources to achieve coherence and typically uses a pay-as-you-go model, which can help in reducing capital expenses but may also lead to unexpected operating expenses for users</p>

							</div>
						</a>
					</div>
				</div> 
			</div>
		    
		    
			<section
				className="section custom-bg-color-grey-1 custom-background-size-1 position-relative overflow-hidden border-0 m-0 p-0"
				data-plugin-parallax=""
				data-image-src={bg} style={{ position: "right", overflow: "hidden" }}>
				<div className="parallax-background fadeIn animated"
					style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover", position: "absolute", bottom: "-5%", left: "0px", width: "100%", height: "130%", /* transform: 'translate3d(0px, -509.799px, 0px)', */ backgroundPositionX: "62%" }}>
				</div>
				<svg className="custom-svg-background-1" version="1.1" x="0px" y="0px" viewBox="0 0 1620 537"
					data-appear-animation-svg="true">
					<path fill="#F4F4F4"
						d="M965.33,189.3L1110.08,0H0v537h1338.31L972.96,255.7C952.24,239.74,948.38,210.02,964.33,189.3z">
					</path>
					<path className="appear-animation animated customLineAnim2 appear-animation-visible"
						data-appear-animation="customLineAnim2" data-appear-animation-delay="500"
						data-appear-animation-duration="5s" data-plugin-options="{&#39;accY&#39;: -400}" fill="none"
						stroke="#1C5FA8" strokeWidth="2" strokeMiterlimit="10" d="2000.35,105.63l-485.31-340.84c-18.3-12.85-43.56-8.44-56.42,9.86L971.79,259.96
							c-12.85,18.3-8.44,43.56,9.86,56.42l485.31,340.84c18.3,12.85,43.56,8.44,56.42-9.86l340.84-485.31
							C1877.07,143.74,1872.65,118.48,1854.35,105.63z" style={{ animationDuration: '5s', animationDelay: '500ms' }}></path>
				</svg>
				<div className="container my-5">
					<div className="row">
						<div className="col-lg-6">
							<div className="overflow-hidden">
								<h2 className="font-weight-bold text-color-dark line-height-3 mb-0 appear-animation animated maskUp appear-animation-visible"
									data-appear-animation="maskUp" data-appear-animation-delay="250"
									style={{ animationDelay: '250ms' }}>Career Attributes Offered by us</h2>
							</div>
							<div className="custom-divider divider divider-primary divider-small pt-1 mb-3 mt-2">
								<hr className="my-0 appear-animation animated customLineProgressAnim appear-animation-visible"
									data-appear-animation="customLineProgressAnim" data-appear-animation-delay="600"
									style={{ animationDelay: '600ms' }} />
							</div>
							<p className="font-weight-light text-3-5 pb-3 pe-5 me-md-5 me-lg-4 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
								data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500"
								style={{ animationDelay: '500ms' }}>We strive to be the best when it comes to reliability, quality and support. We also provide corporate Softskill develoment programs.
								</p>
							<div className="row">
								<div className="col-5 col-lg-4 order-1 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
									data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="750"
									style={{ animationDelay: '750ms' }}>
									<ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Spoken English Class
										</li>
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Successful Interview Skills
										</li>
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Productive Communication
										</li>
									</ul>
								</div>
								<div className="col-lg-4 order-3 order-lg-2 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
									data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="1000"
									style={{ animationDelay: '1000ms' }}>
									<ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Business English Communication
										</li>
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Professional Telephone Etiquette
										</li>
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Email & Chat Support
										</li>
									</ul>
								</div>
								<div className="col-6 col-lg-4 order-2 order-lg-3 appear-animation animated fadeInRightShorterPlus appear-animation-visible"
									data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="1250"
									style={{ animationDelay: '1250ms' }}>
									<ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Effective 
											Listening
											 skills
										</li>
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Voice and 
											Accent
											 Class
										</li>
										<li className="font-weight-semibold text-color-dark">
											<i className="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>
											Campus to Corporate
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container py-5 my-5">
				<div className="row justify-content-center">
					<div className="col-lg-9 col-xl-8 text-center">
						<div className="overflow-hidden">

							<h2 className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation animated maskUp appear-animation-visible"
								data-appear-animation="maskUp" data-appear-animation-delay="250"
								style={{ animationDelay: '250ms' }}>Our Services</h2>
						</div>
						<div className="d-inline-block custom-divider divider divider-primary divider-small my-3">
							<hr className="my-0 appear-animation animated customLineProgressAnim appear-animation-visible"
								data-appear-animation="customLineProgressAnim" data-appear-animation-delay="600"
								style={{ animationDelay: '600ms' }} />
						</div>
						<p className="font-weight-light text-3-5 mb-5 appear-animation animated fadeInUpShorter appear-animation-visible"
							data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500"
							style={{ animationDelay: '500ms' }}>Established in 2018 and based in Chennai, India. At that time, we've made a commitment to developing lasting business partnerships with our clients by consistently delivering cutting-edge technologies.</p>
					</div>
				</div>
				<div className="row row-gutter-sm mb-5 appear-animation animated fadeInUpShorter appear-animation-visible"
					data-appear-animation="fadeInUpShorter" data-appear-animation-delay="750"
					style={{ animationDelay: '750ms' }}>
					<ServiceCarousel />
				</div>
				<div className="row">
					<div className="col text-center">
						<Link to="/services"
							className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 appear-animation animated fadeInUpShorterPlus appear-animation-visible"
							data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="850"
							style={{ animationDelay: '850ms' }}>VIEW ALL SERVICES</Link>
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
									className="btn btn-light btn-outline custom-btn-border-radius font-weight-bold text-color-light text-color-hover-dark bg-color-hover-light btn-px-5 btn-py-3" alt='applyNow'>Apply Now</a>
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
            
			{/* <section className="shop section section-height-1 border-0 m-0">
			<div className="col text-center">
							<h2 className="font-weight-bold text-color-dark line-height-1 mb-0">Our Clients 
							</h2>
							
							<div className="container py-4">
  <div className="row align-items-center text-center py-2">
    Use col-2 for uniform columns across all screen sizes
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client1} alt="Client 1" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client2} alt="Client 2" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client3} alt="Client 3" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client7} alt="Client 7" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={clientreios} alt="Client Reios" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client6} alt="Client 6" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client12} alt="Client 12" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client8} alt="Client 8" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client9} alt="Client 9" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={clientnimir} alt="Client Nimir" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client13} alt="Client 13" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client14} alt="Client 14" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client16} alt="Client 16" className="img-fluid" />
    </div>
    <div className="col-2 col-sm-2 col-lg-2 mb-5">
      <img src={client17} alt="Client 17" className="img-fluid" />
    </div>
  </div>
</div>

				</div>
			</section> */}
  <section>
	<Client />
  </section>
			</>	
    )
}

export default Content;