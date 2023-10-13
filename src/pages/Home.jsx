import React from 'react';
import AuthConsumer from '../hooks/Auth';
import { Link } from 'react-router-dom';

const Home = () => {
  const [authed, dispatch] = AuthConsumer();
  console.log(authed)
  return (
    <div className="home-page bg-one">

      {/* Loader */}
      {/* <div id="global-loader">
    <div className="whirly-loader"> </div>
    <div className="loader-img">
      <img src="assets/img/load-icon.svg" className="img-fluid" alt="load image" />
    </div>
  </div> */}
      {/* Loader */}
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Start Navigation */}
        {/* Header */}
        <header className="header">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="#">
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </a>
          <a href="index.html" className="navbar-brand logo">
            <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
          </a>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <a href="index.html" className="menu-logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
            <a id="menu_close" className="menu-close" href="#">
              <i className="fas fa-times" />
            </a>
          </div>
          <ul className="main-nav">
            <li className="active has-submenu">
              <Link to="/">Accueil <i className="fas fa-chevron-down" /></Link>
              <ul className="submenu">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="index-2.html">Home-2</a></li>
                <li><a href="index-3.html">Home-3</a></li>
                <li><a href="index-4.html">Home-4</a></li>
                <li><a href="index-5.html">Home-5</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <Link to="employeurs">For Employers <i className="fas fa-chevron-down" /></Link>
              <ul className="submenu">
                <li className="has-submenu">
                  <a href="#">Freelancer</a>
                  <ul className="submenu">
                    <li><a href="developer.html">Freelancer</a></li>
                    <li><a href="developer-details.html">Freelancer Details</a></li>
                  </ul>
                </li>
                <li><a href="dashboard.html">Dashboard</a></li>	
                <li><a href="company-profile.html">My Profile</a></li>	
                <li><a href="company-details.html">Company Details</a></li>	
                <li><a href="manage-projects.html">Projects</a></li>
                <li><a href="favourites.html">Favourites</a></li>
                <li><a href="membership-plans.html">Membership</a></li>
                <li><a href="milestones.html">Milestones</a></li>
                <li><a href="chats.html">Chats</a></li>
                <li><a href="review.html">Review</a></li>			
                <li><a href="deposit-funds.html">Payments</a></li>							
                <li><a href="verify-identity.html">Verify Identity</a></li>								
                <li><a href="profile-settings.html">Settings</a></li>								
              </ul>
            </li>
            <li className="has-submenu">
              <Link to="prestataires">Prestataires <i className="fas fa-chevron-down" /></Link>
              <ul className="submenu">
                <li className="has-submenu">
                  <a href="#">Projects</a>
                  <ul className="submenu">
                    <li><a href="project.html">Projects</a></li>
                    <li><a href="project-details.html">Project Details</a></li>
                  </ul>
                </li>
                <li><a href="freelancer-dashboard.html">Dashboard</a></li>
                <li><a href="developer-profile.html">My Profile</a></li>	
                <li><a href="developer-details.html">Freelancer Details</a></li>
                <li><a href="freelancer-project-proposals.html">Projects</a></li>
                <li><a href="freelancer-favourites.html">Favourites</a></li>
                <li><a href="freelancer-membership.html">Membership</a></li>
                <li><a href="freelancer-change-password.html">Change Password</a></li>
                <li><a href="freelancer-chats.html">Chats</a></li>
                <li><a href="freelancer-review.html">Review</a></li>			
                <li><a href="freelancer-withdraw-money.html">Payments</a></li>							
                <li><a href="freelancer-verify-identity.html">Verify Identity</a></li>				
                <li><a href="freelancer-profile-settings.html">Settings</a></li>				
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">Pages <i className="fas fa-chevron-down" /></a>
              <ul className="submenu">
                <li><a href="about.html">About us</a></li>
                <li><a href="blank-page.html">Starter Page</a></li>
                <li><a href="404-page.html">404 Page</a></li>
                <li className="has-submenu">
                  <a href="invoices.html">Invoices</a>
                  <ul className="submenu">
                    <li><a href="freelancer-invoices.html">Invoices</a></li>
                    <li><a href="view-invoice.html">Invoice View</a></li>
                  </ul>
                </li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="onboard-screen.html">Onboard Screen</a></li>
                <li><a href="forgot-password.html">Forgot Password</a></li>
                <li><a href="change-password.html">Change Password</a></li>									
              </ul>
            </li>
            <li className="has-submenu">
              <Link to="apropos">Apropos de nous <i className="fas fa-chevron-down" /></Link>
              <ul className="submenu">
                <li><a href="blog-list.html">Blog List</a></li>
                <li><a href="blog-grid.html">Blog Grid</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li>
              <Link to="nous-joindre">Nous Joindre</Link>
            </li>
          </ul>
        </div>		 
        <ul className="nav header-navbar-rht reg-head">												
          <li><Link to="register" className="reg-btn"><img src="assets/img/icon/reg-icon.svg" className="me-1" alt="icon" /> Register</Link></li>
          <li><Link to="login" className="log-btn"><img src="assets/img/icon/lock-icon.svg" className="me-1" alt="icon" /> Login</Link></li>
          <li><a href="post-project.html" className="login-btn">Post a Project </a></li>
        </ul>
      </nav>
    </header>
        {/* /Header */}
        {/* Home Banner */}
        <section className="section home-banner row-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-lg-7">
                <div className="banner-content aos" data-aos="fade-up">
                  <div className="rating d-flex">
                    <i className="fas fa-star checked" />
                    <i className="fas fa-star checked" />
                    <i className="fas fa-star checked" />
                    <i className="fas fa-star checked" />
                    <i className="fas fa-star checked" />
                    <h5>Trused by over 2M+ users</h5>
                  </div>
                  <h1>Get the perfect <span className="orange-text"><br />Developers &amp; Projects</span></h1>
                  <p>With the world's #1 Developers marketplace</p>
                  <form className="form" name="store" id="store" method="post" action="project.html">
                    <div className="form-inner">
                      <div className="input-group">
                        <span className="drop-detail">
                          <select className="form-control select" name="storeID">
                            <option value="project.html">Projects</option>
                            <option value="developer.html">Freelancers</option>
                          </select>
                        </span>
                        <input type="email" className="form-control" placeholder="Search here" />
                        <button className="btn btn-primary sub-btn" type="submit">Search Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-lg-5">
                <div className="banner-img aos" data-aos="fade-up">
                  <img src="assets/img/banner-img.svg" className="img-fluid" alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* Our Feature */}
        <section className="section feature">
          <div className="container">
            <div className="row">
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item freelance-count aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img src="assets/img/icon/icon-01.png" className="img-fluid" alt="icone 01" />
                  </div>
                  <div className="feature-content course-count">
                    <h3 className="counter-up">9,207</h3>
                    <p>Freelance developers</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img src="assets/img/icon/icon-02.png" className="img-fluid" alt="icone 02" />
                  </div>
                  <div className="feature-content course-count">
                    <h3><span className="counter-up">6000 </span><span>+</span></h3>
                    <p>Projects Added</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item comp-project aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img src="assets/img/icon/icon-03.png" className="img-fluid" alt="icone 03" />
                  </div>
                  <div className="feature-content course-count">
                    <h3 className="counter-up">919,207</h3>
                    <p>Completed projects</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item comp-project aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img src="assets/img/icon/icon-03.png" className="img-fluid" alt="icone 03" />
                  </div>
                  <div className="feature-content course-count">
                    <h3 className="counter-up">998</h3>
                    <p>Companies Registered</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </section>
        {/* /Our Feature */}
        {/*- Developed Project  */}
        <section className="section work">
          <div className="container-fluid">
            <div className="row">
              {/* Feature Item */}
              <div className="col-md-6 work-box bg1">
                <div className="work-content aos" data-aos="fade-up">
                  <h2>I need a Developed <span>Project</span></h2>
                  <p>Get the perfect Developed project for your budget from our creative community.</p>
                  <a href="project.html"><i className="fas fa-long-arrow-alt-right long-arrow" /></a>
                </div>
              </div>
              {/* /Feature Item */}
              <div className="col-md-6 work-box want-works bg2">
                <div className="work-content aos" data-aos="fade-up">
                  <h2>Find Your Next Great  <span>Job Opportunity!</span></h2>
                  <p>Do you want to earn money, find unlimited clients and build your freelance career?</p>
                  <a href="developer.html"><i className="fas fa-long-arrow-alt-right long-arrow" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*- /Developed Project  */}
        {/* Projects */}
        <section className="section projects">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 mx-auto">
                <div className="section-header text-center aos" data-aos="fade-up">
                  <p>High performing solutions to your requests</p>
                  <h2 className="header-title">Get Inspired By Development Projects</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <a href="project.html"><img src="assets/img/project/project-01.jpg" alt="project 01" className="img-fluid" /></a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5><a href="project.html">Android apps</a></h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5><a href="project.html">Developers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <a href="project.html"><img src="assets/img/project/project-02.jpg" alt="project 02" className="img-fluid" /></a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5><a href="project.html">Laravel Projects</a></h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5><a href="project.html">Developers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project-Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <a href="project.html"><img src="assets/img/project/project-03.jpg" alt="project 03" className="img-fluid" /></a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5><a href="project.html">React Projects</a></h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5><a href="project.html">Developers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <a href="project.html"><img src="assets/img/project/project-04.jpg" alt="project 04" className="img-fluid" /></a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5><a href="project.html">Angular Projects</a></h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5><a href="project.html">Developers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <a href="project.html"><img src="assets/img/project/project-05.jpg" alt="project" className="img-fluid" /></a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5><a href="project.html">.Net Projects</a></h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5><a href="project.html">Developers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <a href="project.html"><img src="assets/img/project/project-06.jpg" alt="project" className="img-fluid" /></a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5><a href="project.html">Java Pojects</a></h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5><a href="project.html">Developers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <a href="project.html"><img src="assets/img/project/project-07.jpg" alt="project" className="img-fluid" /></a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5><a href="project.html">Python Projects</a></h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5><a href="project.html">Developers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project-Item  */}
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <a href="project.html"><img src="assets/img/project/project-08.jpg" alt="project" className="img-fluid" /></a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5><a href="project.html">PHP Development</a></h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5><a href="project.html">Developers</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="see-all aos" data-aos="fade-up">
                  <a href="project.html" className="btn all-btn">View More Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Projects */}
        {/* Top Instructor */}
        <section className="section developer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div className="section-header aos" data-aos="fade-up">
                  <p>Work with talented people at the most affordable price</p>
                  <h2 className="header-title">Most Hired Developers</h2>
                </div>
              </div>
            </div>
            <div id="developers-slider" className="owl-carousel owl-theme developers-slider aos" data-aos="fade-up">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-1.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Dran Gonzalez</a></h3>
                    <div className="freelance-specific">React Developer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0 (30)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Illinois, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-2.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Timothy Smith</a></h3>
                    <div className="freelance-specific">PHP Developer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="average-rating">3.5 (25)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Illinois, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-3.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Janet Paden</a></h3>
                    <div className="freelance-specific">Graphic Designer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.1 (30)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Illinois, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-4.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">James Douglas</a></h3>
                    <div className="freelance-specific">iOS Developer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.3 (31)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Florida, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-2.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Richard Wilson</a></h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Illinois, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-3.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Richard Wilson</a></h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Alabama, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-4.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Richard Wilson</a></h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Illinois, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-5.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Richard Wilson</a></h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Alabama, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite favourited"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-3.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Richard Wilson</a></h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.8 (55)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Alabama, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a data-toggle="modal" href="#rating" className="favourite"><i className="fas fa-star" /></a>
                  <div className="freelance-img">
                    <a href="developer-details.html">
                      <img src="assets/img/user/avatar-5.jpg" alt="User Image" />
                      <span className="verified"><i className="fas fa-check-circle" /></span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3><a href="developer-details.html">Richard Wilson</a></h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0 (4)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="#"><span className="badge badge-pill badge-design">Web Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">UI Design</span></a>
                      <a href="#"><span className="badge badge-pill badge-design">Node Js</span></a>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                      <div className="freelance-location"><i className="fas fa-map-marker-alt me-1" />Alabama, USA</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <a href="developer-details.html" className="btn-cart" tabIndex={-1}>View Profile</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Developer */}
        {/* Review */}
        <section className="section testimonial-section review">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header aos" data-aos="fade-up">
                  <p>High Performing Developers To Your</p>
                  <h2 className="header-title">Review of the Users</h2>
                </div>
              </div>
            </div>
            <div id="testimonial-slider" className="owl-carousel owl-theme testimonial-slider aos" data-aos="fade-up">
              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <a href="review.html"><img className="img-fluid" src="assets/img/review/review-01.jpg" alt="Post Image" /></a>
                  </div>
                  <div className="review-info">
                    <h3><a href="review.html">Durso Raeen</a></h3>
                    <h5>Project Lead</h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7</span>
                    </div>
                  </div>
                  <div className="test-quote-img">
                    <img className="img-fluid" src="assets/img/test-quote.svg" alt="quote" />
                  </div>
                </div>
                <div className="review-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
                </div>
              </div>
              {/* / Review Widget */}
              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <a href="review.html"><img className="img-fluid" src="assets/img/review/review-02.jpg" alt="Post Image" /></a>
                  </div>
                  <div className="review-info">
                    <h3><a href="review.html">Camelia Rennesa</a></h3>
                    <h5>Project Lead</h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.8</span>
                    </div>
                  </div>
                  <div className="test-quote-img">
                    <img className="img-fluid" src="assets/img/test-quote.svg" alt="quote" />
                  </div>
                </div>
                <div className="review-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
                </div>
              </div>
              {/* /Review Widget */}
              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <a href="review.html"><img className="img-fluid" src="assets/img/review/review-03.jpg" alt="Post Image" /></a>
                  </div>
                  <div className="review-info">
                    <h3><a href="review.html">Brayan</a></h3>
                    <h5>Team Lead</h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0</span>
                    </div>
                  </div>
                  <div className="test-quote-img">
                    <img className="img-fluid" src="assets/img/test-quote.svg" alt="quote" />
                  </div>
                </div>
                <div className="review-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
                </div>
              </div>
              {/* /Review Widget */}
              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <a href="review.html"><img className="img-fluid" src="assets/img/review/review-02.jpg" alt="Post Image" /></a>
                  </div>
                  <div className="review-info">
                    <h3><a href="review.html">Davis Payerf</a></h3>
                    <h5>Project Lead</h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">3.2</span>
                    </div>
                  </div>
                  <div className="test-quote-img">
                    <img className="img-fluid" src="assets/img/test-quote.svg" alt="quote" />
                  </div>
                </div>
                <div className="review-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
                </div>
              </div>
              {/* /Review Widget */}
            </div>
          </div>
        </section>
        {/* / Review */}
        {/* App Version */}
        <section className="section app-version">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="app-version-img text-center aos" data-aos="fade-up">
                  <img className="img-fluid" src="assets/img/app-version.png" alt="App" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="app-version-blk aos" data-aos="fade-up">
                  <h2>Get More In Our Application and Enjoy The Mobile App Version</h2>
                  <p>Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus. Lorem ipsum dolor sit amet consectetur. Nunc </p>
                  <h5>Download our Mobile app in Both Platform</h5>
                  <div className="app-img-inside">
                    <img className="img-fluid" src="assets/img/app-01.png" alt="App" />
                    <img className="img-fluid" src="assets/img/app-02.png" alt="App" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /App Version */}
        {/* Company Hire */}
        <section className="section top-company">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center aos" data-aos="fade-up">
                  <h6>Top Hiring Company</h6>
                </div>
              </div>
            </div>
            <div id="company-slider" className="owl-carousel owl-theme testimonial-slider aos" data-aos="fade-up">
              <div className="company-logos">
                <img src="assets/img/company-logo-01.svg" alt="logo svp" />
              </div>
              <div className="company-logos">
                <img src="assets/img/company-logo-02.svg" alt="logo svp" />
              </div>
              <div className="company-logos">
                <img src="assets/img/company-logo-03.svg" alt="logo svp" />
              </div>
              <div className="company-logos">
                <img src="assets/img/company-logo-04.svg" alt="logo svp" />
              </div>
              <div className="company-logos">
                <img src="assets/img/company-logo-05.svg" alt="logo svg" />
              </div>
              <div className="company-logos">
                <img src="assets/img/company-logo-06.svg" alt="logo svg" />
              </div>
              <div className="company-logos">
                <img src="assets/img/company-logo-03.svg" alt="logo svg" />
              </div>
              <div className="company-logos">
                <img src="assets/img/company-logo-02.svg" alt="logo svg" />
              </div>
            </div>
          </div>
        </section>
        {/* / Company Hire */}
        {/* News */}
        <section className="section news">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center aos" data-aos="fade-up">
                  <p>High Performing Developers To Your</p>
                  <h2 className="header-title">Feature Blog</h2>
                </div>
              </div>
            </div>
            <div className="row blog-grid-row">
              <div className="col-xl-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-01.jpg" alt="Post Image" /></a>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <a href="developer-details.html"><img src="assets/img/img-02.jpg" alt="Post Author" /> <span> David Lee</span></a>
                        </div>
                      </li>
                      <li><i className="fas fa-calendar-alt" /> 4 Oct 2021</li>
                    </ul>
                    <h3 className="blog-title"><a href="blog-details.html">Your next job starts right here</a></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus.</p>
                    <div className="blog-read">
                      <a href="blog-details.html">Read More <i className="fas fa-arrow-right ms-1" /></a>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-xl-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-02.jpg" alt="Post Image" /></a>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <a href="developer-details.html"><img src="assets/img/img-03.jpg" alt="Post Author" /> <span> Deborah Angel</span></a>
                        </div>
                      </li>
                      <li><i className="fas fa-calendar-alt" /> 10 Oct 2021</li>
                    </ul>
                    <h3 className="blog-title"><a href="blog-details.html">People who completed NAND?</a></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus.</p>
                    <div className="blog-read">
                      <a href="blog-details.html">Read More <i className="fas fa-arrow-right ms-1" /></a>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-xl-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <a href="blog-details.html"><img className="img-fluid" src="assets/img/blog/blog-03.jpg" alt="Post Image" /></a>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <a href="developer-details.html"><img src="assets/img/img-04.jpg" alt="Post Author" /> <span>Darren Elder</span></a>
                        </div>
                      </li>
                      <li><i className="fas fa-calendar-alt" /> 3 Nov 2021</li>
                    </ul>
                    <h3 className="blog-title"><a href="blog-details.html">Kofejob - How to get job through online?</a></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur. Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer integer at. Nunc nunc eu arcu amet faucibus.</p>
                    <div className="blog-read">
                      <a href="blog-details.html">Read More <i className="fas fa-arrow-right ms-1" /></a>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="see-all aos" data-aos="fade-up">
                  <a href="blog-details.html" className="btn all-btn">More Articles</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* / News */}
        {/* News */}
        <section className="section job-register">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="register-job-blk">
                  <div className="job-content-blk aos" data-aos="fade-up">
                    <h1>Find Your Next Great Job Opportunity!</h1>
                    <p>Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet.</p>
                  </div>
                  <div className="see-all mt-0 aos" data-aos="fade-up">
                    <a href="register.html" className="btn all-btn">Register Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
                  
        <footer className="footer">
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Useful Links</h2>
            <ul>
              <li><a href="about.html"><i className="fas fa-angle-right me-1" />About Us</a></li>
              <li><a href="blog-list.html"><i className="fas fa-angle-right me-1" />Blog</a></li>
              <li><a href="login.html"><i className="fas fa-angle-right me-1" />Login</a></li>
              <li><a href="register.html"><i className="fas fa-angle-right me-1" />Register</a></li>
              <li><a href="forgot-password.html"><i className="fas fa-angle-right me-1" />Forgot Password</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Help &amp; Support</h2>
            <ul>
              <li><a href="javascript:;"><i className="fas fa-angle-right me-1" />Browse Candidates</a></li>
              <li><a href="javascript:;"><i className="fas fa-angle-right me-1" />Employers Dashboard</a></li>
              <li><a href="javascript:;"><i className="fas fa-angle-right me-1" />Job Packages</a></li>
              <li><a href="javascript:;"><i className="fas fa-angle-right me-1" />Jobs Featured</a></li>
              <li><a href="javascript:;"><i className="fas fa-angle-right me-1" />Post A Job</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-md-6">
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Other Links</h2>
            <ul>
              <li><a href="freelancer-dashboard.html"><i className="fas fa-angle-right me-1" />Freelancers</a></li>
              <li><a href="freelancer-portfolio.html"><i className="fas fa-angle-right me-1" />Freelancer Details</a></li>
              <li><a href="project.html"><i className="fas fa-angle-right me-1" />Project</a></li>
              <li><a href="project-details.html"><i className="fas fa-angle-right me-1" />Project Details</a></li>
              <li><a href="post-project.html"><i className="fas fa-angle-right me-1" />Post Project</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Join our Newsletter</h2>
            <p>We help our customers harness the power of AI to make smarter decisions</p>
            <div className="banner-content aos aos-init aos-animate" data-aos="fade-up">
              <form className="form" name="store" method="post" action="project.html">
                <div className="form-inner">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Your Email address....." />
                    <button className="btn btn-primary sub-btn" type="submit"><i className="fas fa-long-arrow-alt-right long-arrow" /></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="social-icon d-flex">
              <span>Follow us on : </span>
              <ul>
                <li><a href="#" className="icon" target="_blank"><i className="fab fa-facebook-f" /> </a></li>
                <li><a href="#" className="icon" target="_blank"><i className="fab fa-instagram" /> </a></li>
                <li><a href="#" className="icon" target="_blank"><i className="fab fa-twitter" /> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Footer Top */}
  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="container">
      {/* Copyright */}
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 col-lg-6 ">
            <div className="footer-bottom-logo">
              <a href="index.html" className="menu-logo">
                <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 right-text">
            <ul className="nav footer-bottom-nav">
              <li><a href="chats.html">Chat</a></li>
              <li><a href="faq.html">Faq</a></li>
              <li><a href="review.html">Reviews</a></li>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
              <li><a href="term-condition.html">Terms of use</a></li>
            </ul>
            <div className="copyright-text">
              <p className="mb-0">Copyright 2023 © KofeJob. All right reserved. Powered by Dreamguys Technologies</p>
            </div>
          </div>
        </div>
      </div>
      {/* /Copyright */}						
    </div>
  </div>
  {/* /Footer Bottom */}				
</footer>

        {/* /Footer */}
      </div>
      {/* /Main Wrapper */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="ti-angle-up"><img src="assets/img/icon/top-icon.svg" className="img-fluid" alt="logo svg" /></span>
      </button>
    </div>



  )
}

export default Home