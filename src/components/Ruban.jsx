import React from "react";
const Ruban = ({prop1, prop2}) => {
    return(
        <>
        <div className="bread-crumb-bar">
      <div className="container">
        <div className="row align-items-center inner-banner">
          <div className="col-md-12 col-12 text-center">
            <div className="breadcrumb-list">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html"><img src="assets/img/home-icon.svg" alt="Post Author" /> {prop1}</a></li>
                  <li className="breadcrumb-item" aria-current="page">{prop2}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Ruban;