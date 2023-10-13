import React from "react";
import Ruban from "../components/Ruban";
import AuthConsumer from "../hooks/Auth";
import { Link } from "react-router-dom";

const spanStyles = {
  padding: "60px 0 60px",

};

const Register = () => {
    const auth = AuthConsumer();
    console.log(auth)
    return(
        <div className="account-page">
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
    {/* Page Content */}
    <Ruban prop1="Accueil"  prop2="Register"/>
    <div className="content" style={spanStyles}>
      <div className="container">					
        <div className="row">
          <div className="col-md-6 offset-md-3">							
            {/* Register Tab Content */}
            <div className="account-content">
              <div className="align-items-center justify-content-center">
                <div className="login-right">
                  <div className="login-header text-center">
                    <a href="index.html"><img src="assets/img/logo-01.png" alt="logo" className="img-fluid" /></a>
                    <h3>Join Kofejob</h3>
                    <p>Make the most of your professional life</p>
                  </div>
                  <nav className="user-tabs mb-4">
                    <ul role="tablist" className="nav nav-pills nav-justified">
                      <li className="nav-item">
                        <a href="#developer" data-bs-toggle="tab" className="nav-link active">FREELANCER</a>
                      </li>
                      <li className="nav-item">
                        <a href="#company" data-bs-toggle="tab" className="nav-link">COMPANY</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="tab-content pt-0">
                    <div role="tabpanel" id="developer" className="tab-pane fade active show">
                      <form action="onboard-screen.html">										
                        <div className="form-group form-focus">
                          <input type="email" className="form-control floating" />
                          <label className="focus-label">User Name</label>
                        </div>
                        <div className="form-group form-focus">
                          <input type="email" className="form-control floating" />
                          <label className="focus-label">Email </label>
                        </div>
                        <div className="form-group form-focus">
                          <input type="password" className="form-control floating" />
                          <label className="focus-label">Password</label>
                        </div>	
                        <div className="form-group form-focus mb-0">
                          <input type="password" className="form-control floating" />
                          <label className="focus-label">Confirm Password</label>
                        </div>	
                        <div className="dont-have">
                          <label className="custom_check">
                            <input type="checkbox" name="rem_password" />
                            <span className="checkmark" /> You agree to the Kofejob <a href="privacy-policy.html">User Agreement, Privacy Policy,</a> and <a href="privacy-policy.html">Cookie Policy</a>.
                          </label>
                        </div>
                        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">AGREE TO JOIN</button>	
                        <div className="login-or">
                          <p>Or login with</p>
                        </div>
                        <div className="row social-login">
                          <div className="col-4">
                            <a href="#" className="btn btn-twitter btn-block"> Twitter</a>
                          </div>
                          <div className="col-4">
                            <a href="#" className="btn btn-facebook btn-block"> Facebook</a>
                          </div>
                          <div className="col-4">
                            <a href="#" className="btn btn-google btn-block"> Google</a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 text-start">
                            <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                          </div>
                          <div className="col-6 text-end dont-have">Already on Kofejob <a href="login.html">Click here</a></div>
                        </div>
                      </form>
                    </div>
                    <div role="tabpanel" id="company" className="tab-pane fade">
                      <form action="onboard-screen.html">										
                        <div className="form-group form-focus">
                          <input type="email" className="form-control floating" />
                          <label className="focus-label">User Name</label>
                        </div>
                        <div className="form-group form-focus">
                          <input type="email" className="form-control floating" />
                          <label className="focus-label">Email </label>
                        </div>
                        <div className="form-group form-focus">
                          <input type="password" className="form-control floating" />
                          <label className="focus-label">Password</label>
                        </div>	
                        <div className="form-group form-focus mb-0">
                          <input type="password" className="form-control floating" />
                          <label className="focus-label">Confirm Password</label>
                        </div>
                        <div className="dont-have">
                          <label className="custom_check">
                            <input type="checkbox" name="rem_password" />
                            <span className="checkmark" /> You agree to the Kofejob <a href="privacy-policy.html">User Agreement, Privacy Policy,</a> and <a href="privacy-policy.html">Cookie Policy</a>.
                          </label>
                        </div>													
                        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Agree TO JOIN</button>
                        <div className="login-or">
                          <p>Or login with</p>
                        </div>														
                        <div className="row form-row social-login">
                          <div className="col-4">
                            <a href="#" className="btn btn-twitter btn-block"> Twitter</a>
                          </div>
                          <div className="col-4">
                            <a href="#" className="btn btn-facebook btn-block"> Facebook</a>
                          </div>
                          <div className="col-4">
                            <a href="#" className="btn btn-google btn-block"> Google</a>
                          </div>
                        </div>
                        <div className="row form-row">
                          <div className="col-6 text-start">
                            <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                          </div>
                          <div className="col-6 text-end dont-have">Already on Kofejob <a href="login.html">Click here</a></div>
                        </div>
                      </form>
                    </div>
                  </div>										
                </div>
              </div>
            </div>
            {/* /Register Tab Content */}
          </div>
        </div>
      </div>
    </div>					
    {/* /Page Content */}
    {/* Footer */}	
    
    {/* /Footer */}
  </div>
</div>

    )
}
export default Register;