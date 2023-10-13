const  Menu = () => {
return (
    <>
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
              <a href="index.html">Accueil <i className="fas fa-chevron-down" /></a>
              <ul className="submenu">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="index-2.html">Home-2</a></li>
                <li><a href="index-3.html">Home-3</a></li>
                <li><a href="index-4.html">Home-4</a></li>
                <li><a href="index-5.html">Home-5</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">Employeurs <i className="fas fa-chevron-down" /></a>
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
              <a href="#">Prestataires <i className="fas fa-chevron-down" /></a>
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
              <a href>Pages <i className="fas fa-chevron-down" /></a>
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
              <a href>Blog <i className="fas fa-chevron-down" /></a>
              <ul className="submenu">
                <li><a href="blog-list.html">Blog List</a></li>
                <li><a href="blog-grid.html">Blog Grid</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li>
              <a href="admin/index.html" target="_blank">Apropos</a>
            </li>
          </ul>
        </div>		 
        <ul className="nav header-navbar-rht reg-head">												
          <li><a href="register.html" className="reg-btn"><img src="assets/img/icon/reg-icon.svg" className="me-1" alt="icon" /> Register</a></li>
          <li><a href="login.html" className="log-btn"><img src="assets/img/icon/lock-icon.svg" className="me-1" alt="icon" /> Login</a></li>
          <li><a href="post-project.html" className="login-btn">Post a Project </a></li>
        </ul>
      </nav>
    </>
)
}

export default Menu