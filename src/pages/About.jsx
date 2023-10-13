import React from "react";
import Ruban from "../components/Ruban";
import AuthConsumer from "../hooks/Auth";
import { Link } from "react-router-dom";


const About = () => {
  const auth = AuthConsumer();
  console.log(auth)
    return (
        <>
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
              <Link to="../employeurs">For Employers <i className="fas fa-chevron-down" /></Link>
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
              <Link to="../prestataires">Prestataires <i className="fas fa-chevron-down" /></Link>
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
              <Link to="../apropos">Apropos de nous <i className="fas fa-chevron-down" /></Link>
              <ul className="submenu">
                <li><a href="blog-list.html">Blog List</a></li>
                <li><a href="blog-grid.html">Blog Grid</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li>
              <Link to="../nous-joindre">Nous Joindre</Link>
            </li>
          </ul>
        </div>		 
        <ul className="nav header-navbar-rht reg-head">												
          <li><Link to="../register" className="reg-btn"><img src="assets/img/icon/reg-icon.svg" className="me-1" alt="icon" /> Register</Link></li>
          <li><Link to="../login" className="log-btn"><img src="assets/img/icon/lock-icon.svg" className="me-1" alt="icon" /> Login</Link></li>
          <li><a href="post-project.html" className="login-btn">Post a Project </a></li>
        </ul>
      </nav>
    </header>
    {/* /Header */}	
    {/* Breadcrumb */}
    <Ruban prop1="Accueil"  prop2="About"/>
    {/* /Breadcrumb */}
    {/* About */}
    <section className="section about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="about-content">
              <h2>About <span className="orange-text">Kofejob</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est modi, saepe hic esse maxime quasi, sapiente ex debitis quis dolorum unde, neque quibusdam eveniet nobis enim porro repudiandae nesciunt quidem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni delectus soluta adipisci beatae ullam quisquam, quia recusandae rem assumenda, praesentium porro sequi eaque doloremque tenetur incidunt officiis explicabo optio perferendis.</p>
              <a href="project.html" className="btn learn-btn">LEARN MORE</a>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-5">
            <div className="about-img">
              <img className="img-fluid" src="assets/img/about.png" alt="Post Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /About */}
    {/* Counter */}
    <section className="section job-counter">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="counter">
              <h2>800+</h2>
              <h4>Jobs Posted</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter">
              <h2>80+</h2>
              <h4>Companies</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter">
              <h2>900+</h2>
              <h4> Developers</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter">
              <h2>90+</h2>
              <h4>Development Services</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Review */}
    <section className="section testimonial-section review">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <div className="section-line" />
              <h2 className="header-title">Top Reviews</h2>
              <p>High Performing Developers To Your</p>
            </div>
          </div>
        </div>
        <div id="testimonial-slider" className="owl-carousel owl-theme testimonial-slider">
          {/* Review Widget */}
          <div className="review-blog">
            <div className="review-top d-flex align-items-center">
              <div className="review-img">
                <a href="review.html"><img className="img-fluid" src="assets/img/review/review-01.jpg" alt="Post Image" /></a>
              </div>
              <div className="review-info">
                <h3>Davis Payerf</h3>
                <h5>CEO</h5>								
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.7</span>
                </div>
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
                <h3>Davis Payerf</h3>
                <h5>PROJECT LEAD</h5>								
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.8</span>
                </div>
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
                <h3>Davis Payerf</h3>
                <h5>TEAM LEAD</h5>								
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0</span>
                </div>
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
                <h3>Davis Payerf</h3>
                <h5>PROJECT LEAD</h5>								
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">3.2</span>
                </div>
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
    {/* Agency */}
    <section className="section agency">
      <div className="container-fluid">
        <div className="row align-items-center black-bg">	
          <div className="col-md-6 agency-box">
            <img src="assets/img/about-01.jpg" alt className="img-fluid" />
          </div>
          <div className="col-md-6 agency-box black-bg">
            <div className="agency-content">
              <h2>Used by over <span className="orange-text">1500</span> of World Leading Agencies work</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
              <a href="project.html" className="btn learn-btn">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* / Agency */}	
    {/* Experts */}
    <section className="section expert">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h5>SINCE THE START</h5>
            <h2>What are the benefits of applying job Online?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, mattis nibh aliquam dui, nibh faucibus aenean.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
            <div className="btn-item">
              <a className="btn get-btn" href="login.html">Get Started</a>
              <a className="btn courses-btn" href="project.html">ViEW SERVICES</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Experts */}
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

        </>
    )
}

export default About;