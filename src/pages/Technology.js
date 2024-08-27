import React from 'react'
import Client from './Client';

import TechnologyCarousel from '../components/TechnologyCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Technology() {
	return (
		<div>
			<Header />
			<div role="main" className="main">
				<section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
					<div className="container">
						<div className="row">
							<div className="col-md-8 order-2 order-md-1 align-self-center p-static">
								<h1 className="text-color-dark font-weight-bold">Technology</h1>
							</div>
							<div className="col-md-4 order-1 order-md-2 align-self-center">
								<ul className="breadcrumb d-flex justify-content-md-end text-3-5">
									<li><a href="#\" className="text-color-default text-color-hover-primary text-decoration-none">HOME</a></li>
									<li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; Technology</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<div className="container py-2 my-2">
				
					<div className="row mb-4 pb-2">
					<div className="col-lg-4 order-lg-2 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="250" style={{ animationDelay: '250ms' }}>
							<div className="card box-shadow-1 custom-border-radius-1 mb-5">
								<div className="card-body z-index-1 py-4 my-3">
									<h2 className="text-color-dark font-weight-bold text-6 mb-4">Business Domain : </h2>
									<ul className="custom-nav-list-effect-1 list list-unstyled mb-0">
										<li className="active">
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">HealthCare</a>
										</li>
										<li>
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">Finance</a>
										</li>
										<li>
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">Retail</a>
										</li>
										<li>
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">Entertainment</a>
										</li>
										<li>
											<a href="\#" className="text-decoration-none text-color-dark text-color-hover-primary text-3-5">Logistics</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-8 order-lg-1 mb-5 mb-lg-0 appear-animation animated fadeInUpShorter appear-animation-visible">
							<p className="text-4 font-weight-semibold mb-4 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300" style={{ animationDelay: "300ms" }}>Technology is the use of knowledge to achieve attainable goals in a repeatable manner. In addition, the term "technology" can be used to describe the products of such efforts, including both tangible objects like equipment or kitchenware and intangible ones like computer software.</p>
							<p className=''>Technology is the knowledge, techniques, and procedures used to accomplish tasks. Technology can be used by people to:</p>
							<ul className='list list-icons list-icons-style-2 list-icons-lg mb-4 mb-xl-5'>
								<li class="font-weight-semibold text-color-dark">
									<i class="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>create products or services</li>
								<li class="font-weight-semibold text-color-dark">
									<i class="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>Realise objectives like conducting research or launching a spacecraft to the moon.</li>
								<li class="font-weight-semibold text-color-dark">
									<i class="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>Fix issues like starvation or sickness.</li>
								<li class="font-weight-semibold text-color-dark">
									<i class="fa fa-check text-color-dark border-color-grey-1 top-7 text-3"></i>Practise what we already do, but more conveniently.</li>
							</ul>

							{/* <p className="pb-1 mb-3 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500" style={{ animationDelay: "500ms" }}>Services include consulting, software development, systems integration, as well as hardware deployment and education. </p>
                            <p className="mb-1 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700" style={{ animationDelay: "700ms" }}>As a whole, the broader market for IT services is made up of several segments, including outsourcing, managed services, security services, data management, and cloud computing.</p> */}
						</div>
						
					</div>
					{/* <div className="row row-gutter-sm mb-5 appear-animation animated fadeInUpShorter appear-animation-visible"
                        data-appear-animation="fadeInUpShorter" data-appear-animation-delay="750"
                        style={{ animationDelay: '750ms' }}>
                        <ServiceCarousel />
                    </div> */}




				</div>

				<div className="container">
					<div className="row featured-boxes-full featured-boxes-full-scale">
						<TechnologyCarousel />
					</div>
				</div>
				<Client/>
				<Footer />
			</div>
		</div>
	)
}

export default Technology
