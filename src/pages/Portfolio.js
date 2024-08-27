import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Tabs from "./Tab";
import Items from "./Item";
import Data from "./Data";
import Header from '../components/Header'
import Footer from '../components/Footer'


function Portfolio() {
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value) => {
        return value.category
    });
    const tabsData = ["all", ...new Set(categoryData)];

    const filterCategory = (category) => {
        if (category === "all") {
            setData(Data);
            return;
        }
        const filteredData = Data.filter((value) => {
            return value.category === category;
        })
        setData(filteredData);
    }

    return (
        <div>
            <Header />
            <div role="main" className="main">
                <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                                <h1 className="text-color-dark font-weight-bold">Portfolio</h1>
                            </div>
                            <div className="col-md-4 order-1 order-md-2 align-self-center">
                                <ul className="breadcrumb d-flex justify-content-md-end text-3-5">
                                    <li><a href="#\" className="text-color-default text-color-hover-primary text-decoration-none">HOME</a></li>
                                    <li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; Portfolio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Test */}

                <div className="container">
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <Tabs filterCategory={filterCategory} tabsData={tabsData} />
                            <Items data={data} />
                        </div>
                        
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio
