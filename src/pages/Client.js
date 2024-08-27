import React from 'react';
import client1 from '../images/thedallogo.png';
import client2 from '../images/bjmmlogo.png';
import client3 from '../images/dsrlogo.png';
import client6 from '../images/nulogo.png';
import client7 from '../images/portfolio/client7.png';
import client8 from '../images/portfolio/client8.png';
import client9 from '../images/portfolio/client9.png';
import client12 from '../images/portfolio/client12.png';
import client13 from '../images/portfolio/client13.png';
import client14 from '../images/portfolio/client14.png';
import clientnimir from '../images/portfolio/Nimir.png';
import client16 from '../images/portfolio/client16.png';
import client17 from '../images/portfolio/client17.png';
import clientreios from '../images/portfolio/Reios.png';

const Client = () => {
  return (
    <>
     <section className="shop section section-height-1 border-0 m-0">
			<div className="col text-center">
							<h2 className="font-weight-bold text-color-dark line-height-1 mb-0">Our Clients 
							</h2>
							
							<div className="container py-4">
  <div className="row align-items-center text-center py-2">
    {/* Use col-2 for uniform columns across all screen sizes */}
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
			</section>
    </>
  );
}

export default Client;
