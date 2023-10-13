import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthConsumer from '../hooks/Auth';

const BackHome = () => {
  const [authed, dispatch] = AuthConsumer();
  let navigate = useNavigate()
  return (

<div className="main-wrapper">
  {/* Header */}
    {/* Header */}
    <div className="header">
                {/* Logo */}
                <div className="header-left">
                    <a href="index.html" className="logo">
                        <img src="adminassets/img/logo.png" alt="Logo" />
                    </a>
                    <a href="index.html" className="logo logo-small">
                        <img src="adminassets/img/logo-small.png" alt="Logo" width={30} height={30} />
                    </a>
                    {/* Sidebar Toggle */}
                    <a href="javascript:void(0);" id="toggle_btn">
                        <i className="feather-chevrons-left" />
                    </a>
                    {/* /Sidebar Toggle */}
                    {/* Mobile Menu Toggle */}
                    <a className="mobile_btn" id="mobile_btn">
                        <i className="feather-chevrons-left" />
                    </a>
                    {/* /Mobile Menu Toggle */}
                </div>
                {/* /Logo */}
                {/* Search */}
                <div className="top-nav-search">
                    <form>
                        <input type="text" className="form-control" placeholder="Start typing your Search..." />
                        <button className="btn" type="submit"><i className="feather-search" /></button>
                    </form>
                </div>
                {/* /Search */}
                {/* Header Menu */}
                <ul className="nav user-menu">
                    {/* Notifications */}
                    <li className="nav-item dropdown">
                        <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <i className="feather-bell" /> <span className="badge badge-pill">5</span>
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                <a href="javascript:void(0)" className="clear-noti"> Clear All</a>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" alt src="adminassets/img/profiles/avatar-02.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Brian Johnson</span> paid the invoice <span className="noti-title">#DF65485</span></p>
                                                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" alt src="adminassets/img/profiles/avatar-03.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Marie Canales</span> has accepted your estimate <span className="noti-title">#GTR458789</span></p>
                                                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media d-flex">
                                                <div className="avatar avatar-sm flex-shrink-0">
                                                    <span className="avatar-title rounded-circle bg-primary-light"><i className="far fa-user" /></span>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">New user registered</span></p>
                                                    <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" alt src="adminassets/img/profiles/avatar-04.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Barbara Moore</span> declined the invoice <span className="noti-title">#RDW026896</span></p>
                                                    <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media d-flex">
                                                <div className="avatar avatar-sm flex-shrink-0">
                                                    <span className="avatar-title rounded-circle bg-info-light"><i className="far fa-comment" /></span>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">You have received a new message</span></p>
                                                    <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="#">View all Notifications</a>
                            </div>
                        </div>
                    </li>
                    {/* /Notifications */}
                    {/* User Menu */}
                    <li className="nav-item dropdown has-arrow main-drop">
                        <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <span className="user-img">
                                <img src="adminassets/img/profiles/avatar-07.jpg" alt />
                                <span className="status online" />
                            </span>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="profile.html"><i data-feather="user" className="me-1" /> Profile</a>
                            <a className="dropdown-item" href="settings.html"><i data-feather="settings" className="me-1" /> Settings</a>
                            <a className="dropdown-item" href="javascript:void(0);" onClick={() =>{
                              dispatch({type:"logout"})
                              navigate('/', {replace:true})
                            }}><i data-feather="log-out" className="me-1" /> Logout</a>
                        </div>
                    </li>
                    {/* /User Menu */}
                </ul>
                {/* /Header Menu */}
            </div>
            {/* /Header */}


  {/* /Header */}
  {/* Sidebar */}
  <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title"><span>Main</span></li>
          <li className="active">
            <a href="index.html"><i data-feather="home" /> <span>Dashboard</span></a>
          </li>
          <li>
            <a href="categories.html"><i data-feather="copy" /> <span>Categories</span></a>
          </li>
          <li>
            <a href="projects.html"><i data-feather="database" /> <span>Projects</span></a>
          </li>
          <li>
            <a href="users.html"><i data-feather="users" /> <span>Freelancer</span></a>
          </li>
          <li>
            <a href="deposit.html"><i data-feather="user-check" /> <span>Deposit</span></a>
          </li>
          <li>
            <a href="withdrawn.html"><i data-feather="user-check" /> <span>Withdrawn</span></a>
          </li>
          <li>
            <a href="transaction.html"><i data-feather="clipboard" /> <span>Transaction</span></a>
          </li>
          <li>
            <a href="providers.html"><i data-feather="user-check" /> <span>Providers</span></a>
          </li>
          <li>
            <a href="subscription.html"><i data-feather="user-check" /> <span>Subscription</span></a>
          </li>
          <li>
            <a href="reports.html"><i data-feather="pie-chart" /> <span>Reports</span></a>
          </li>
          <li>
            <a href="roles.html"><i data-feather="clipboard" /> <span>Roles</span></a>
          </li>
          <li>
            <a href="skills.html"><i data-feather="award" /> <span>Skills</span></a>
          </li>							
          <li>
            <a href="verify-identity.html"><i data-feather="user-check" /> <span>Verify Identity</span></a>
          </li>
          <li>
            <a href="settings.html"><i data-feather="settings" /> <span>Settings</span></a>
          </li>
          <li className="menu-title"><span>UI Interface</span></li>
          <li>
            <a href="components.html"><i data-feather="pocket" /> <span>Components</span></a>
          </li>
          <li className="submenu">
            <a href="#"><i data-feather="file-minus" /> <span> Forms</span> <span className="menu-arrow" /></a>
            <ul>
              <li><a href="form-basic-inputs.html">Basic Inputs</a></li>
              <li><a href="form-input-groups.html">Input Groups</a></li>
              <li><a href="form-horizontal.html">Horizontal Form</a></li>
              <li><a href="form-vertical.html">Vertical Form</a></li>
              <li><a href="form-mask.html">Form Mask</a></li>
              <li><a href="form-validation.html">Form Validation</a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"><i data-feather="align-justify" /> <span> Tables</span> <span className="menu-arrow" /></a>
            <ul>
              <li><a href="tables-basic.html">Basic Tables</a></li>
              <li><a href="data-tables.html">Data Table</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* /Sidebar */}
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Dashboard</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-8">
          {/*/Wizard*/}
          <div className="row">
            <div className="col-md-4 d-flex">
              <div className="card wizard-card flex-fill">
                <div className="card-body">
                  <p className="text-primary mt-0 mb-2">Users</p>
                  <h5>1682</h5>
                  <p><a href="users.html">view details</a></p>
                  <span className="dash-widget-icon bg-1">
                    <i className="fas fa-users" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="card wizard-card flex-fill">
                <div className="card-body">
                  <p className="text-primary mt-0 mb-2">Completed Projects</p>
                  <h5>15k</h5>
                  <p><a href="projects.html">view details</a></p>
                  <span className="dash-widget-icon bg-1">
                    <i className="fas fa-th-large" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="card wizard-card flex-fill">
                <div className="card-body">
                  <p className="text-primary mt-0 mb-2">Active Projects</p>
                  <h5>1568</h5>
                  <p><a href="projects.html">view details</a></p>
                  <span className="dash-widget-icon bg-1">
                    <i className="fas fa-bezier-curve" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*/Wizard*/}
          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="card w-100">
                <div className="card-body pt-0 pb-2">
                  <div className="card-header">
                    <h5 className="card-title">Over view</h5>
                  </div>
                  <div id="chart" className="mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>	
        <div className="col-md-4 d-flex">
          <div className="card w-100">
            <div className="card-body pt-0">
              <div className="card-header">
                <div className="row">
                  <div className="col-7">
                    <p>Welcome back,</p>
                    <h6 className="text-primary">Super Admin</h6>
                  </div>
                  <div className="col-5 text-end">
                    <span className="welcome-dash-icon bg-1">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="account-balance">
                <p>Account balance</p>
                <h6>$50,000,00 </h6>
              </div>
              <div className="mt-3">
                <h6 className="text-primary">Payments</h6>
                <div className="table-responsive">
                  <table className="table table-center table-hover mb-0">
                    <thead>
                      <tr>
                        <th className="text-nowrap">Client or Freelancer</th>
                        <th>Amount</th>
                        <th className="text-end">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">Sakib Khan</td>
                        <td>$2222</td>
                        <td className="text-end">Completed</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">Pixel Inc Ltd</td>
                        <td>$750</td>
                        <td className="text-end">
                          <a href="javascript:void(0);" className="btn btn-sm btn-success me-2"><i className="far fa-edit" /></a> 
                          <a href="javascript:void(0);" className="btn btn-sm btn-danger me-2"><i className="far fa-trash-alt" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">Jon M Mullins</td>
                        <td>$3150</td>
                        <td className="text-end text-nowrap">Money released to Freelancer</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">Rose M Milewski</td>
                        <td>$1455</td>
                        <td className="text-end text-nowrap">Money returned to Client</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">Gerald K Myers</td>
                        <td>$3000</td>
                        <td className="text-end">
                          <a href="javascript:void(0);" className="btn btn-sm btn-success me-2"><i className="far fa-edit" /></a> 
                          <a href="javascript:void(0);" className="btn btn-sm btn-danger me-2"><i className="far fa-trash-alt" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">Marcin Kowalski</td>
                        <td>$895</td>
                        <td className="text-end">
                          <a href="javascript:void(0);" className="btn btn-sm btn-success me-2"><i className="far fa-edit" /></a> 
                          <a href="javascript:void(0);" className="btn btn-sm btn-danger me-2"><i className="far fa-trash-alt" /></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>			
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card bg-white projects-card">
            <div className="card-body pt-0">
              <div className="card-header">
                <h5 className="card-title">Reviews</h5>
              </div>
              <div className="reviews-menu-links">
                <ul role="tablist" className="nav nav-pills card-header-pills nav-justified">
                  <li className="nav-item">
                    <a href="#tab-4" data-bs-toggle="tab" className="nav-link active">All (272)</a>
                  </li>
                  <li className="nav-item">
                    <a href="#tab-5" data-bs-toggle="tab" className="nav-link">Active (218)</a>
                  </li>
                  <li className="nav-item">
                    <a href="#tab-6" data-bs-toggle="tab" className="nav-link"> Pending Approval (03)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#tab-7" data-bs-toggle="tab" className="nav-link">Trash (0)</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content pt-0">
                <div role="tabpanel" id="tab-4" className="tab-pane fade active show">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0 datatable">
                      <thead>
                        <tr>
                          <th />
                          <th>Profile</th>	
                          <th>Designation</th>	
                          <th>comments</th>	
                          <th>Stars</th>	
                          <th>Category</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck1" />
                              <label className="form-check-label" htmlFor="customCheck1" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-14.jpg" alt="User Image" />
                                Janet Paden
                              </a>
                            </h2>
                          </td>
                          <td>
                            CEO
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td>
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Angular
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck2" />
                              <label className="form-check-label" htmlFor="customCheck2" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-01.jpg" alt="User Image" />
                                George Wells
                              </a>
                            </h2>
                          </td>
                          <td>
                            Tech Lead
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Node
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck3" />
                              <label className="form-check-label" htmlFor="customCheck3" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-15.jpg" alt="User Image" />
                                Timothy Smith
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Angular
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck10" />
                              <label className="form-check-label" htmlFor="customCheck10" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-16.jpg" alt="User Image" />
                                Lois Alexander
                              </a>
                            </h2>
                          </td>
                          <td>
                            Designer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Laravel
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck4" />
                              <label className="form-check-label" htmlFor="customCheck4" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-03.jpg" alt="User Image" />
                                Sara Grayson
                              </a>
                            </h2>
                          </td>
                          <td>
                            Developer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Angular
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck5" />
                              <label className="form-check-label" htmlFor="customCheck5" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-04.jpg" alt="User Image" />
                                Deboarah
                              </a>
                            </h2>
                          </td>
                          <td>
                            Associate Engineer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            React
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck6" />
                              <label className="form-check-label" htmlFor="customCheck6" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-11.jpg" alt="User Image" />
                                Sofia Briant
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            JAVA
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck7" />
                              <label className="form-check-label" htmlFor="customCheck7" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-02.jpg" alt="User Image" />
                                Bess Twishes
                              </a>
                            </h2>
                          </td>
                          <td>
                            Designer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            .NET
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck8" />
                              <label className="form-check-label" htmlFor="customCheck8" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-05.jpg" alt="User Image" />
                                Rayan Lester
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Python
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck9" />
                              <label className="form-check-label" htmlFor="customCheck9" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-06.jpg" alt="User Image" />
                                Sarah Alexander
                              </a>
                            </h2>
                          </td>
                          <td>
                            Designer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Golang
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div role="tabpanel" id="tab-5" className="tab-pane fade">
                  <div className="table-responsive">
                    <table className="table table-center table-bordered table-hover datatable">
                      <thead>
                        <tr>
                          <th />
                          <th>Profile</th>
                          <th>Designation</th>	
                          <th>comments</th>	
                          <th>Stars</th>	
                          <th>Category</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck11" />
                              <label className="form-check-label" htmlFor="customCheck11" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-04.jpg" alt="User Image" />
                                Deboarah
                              </a>
                            </h2>
                          </td>
                          <td>
                            Associate Engineer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            React
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck12" />
                              <label className="form-check-label" htmlFor="customCheck12" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-11.jpg" alt="User Image" />
                                Sofia Briant
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            JAVA
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck13" />
                              <label className="form-check-label" htmlFor="customCheck13" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-02.jpg" alt="User Image" />
                                Bess Twishes
                              </a>
                            </h2>
                          </td>
                          <td>
                            Designer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            .NET
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck14" />
                              <label className="form-check-label" htmlFor="customCheck14" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-05.jpg" alt="User Image" />
                                Rayan Lester
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Python
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck15" />
                              <label className="form-check-label" htmlFor="customCheck15" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-06.jpg" alt="User Image" />
                                Sarah Alexander
                              </a>
                            </h2>
                          </td>
                          <td>
                            Designer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Golang
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck16" />
                              <label className="form-check-label" htmlFor="customCheck16" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-14.jpg" alt="User Image" />
                                Janet Paden
                              </a>
                            </h2>
                          </td>
                          <td>
                            CEO
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td>
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Angular
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck17" />
                              <label className="form-check-label" htmlFor="customCheck17" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-01.jpg" alt="User Image" />
                                George Wells
                              </a>
                            </h2>
                          </td>
                          <td>
                            Tech Lead
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Node
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck18" />
                              <label className="form-check-label" htmlFor="customCheck18" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-15.jpg" alt="User Image" />
                                Timothy Smith
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Angular
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>											
                      </tbody>
                    </table>
                  </div>
                </div>
                <div role="tabpanel" id="tab-6" className="tab-pane fade">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover datatable">
                      <thead>
                        <tr>
                          <th />
                          <th>Profile</th>	
                          <th>Designation</th>	
                          <th>comments</th>	
                          <th>Stars</th>	
                          <th>Category</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck21" />
                              <label className="form-check-label" htmlFor="customCheck21" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-05.jpg" alt="User Image" />
                                Albert Boone
                              </a>
                            </h2>
                          </td>
                          <td>
                            CEO
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            React
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck22" />
                              <label className="form-check-label" htmlFor="customCheck22" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-14.jpg" alt="User Image" />
                                Janet Paden
                              </a>
                            </h2>
                          </td>
                          <td>
                            CEO
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td>
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Angular
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck23" />
                              <label className="form-check-label" htmlFor="customCheck23" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-01.jpg" alt="User Image" />
                                George Wells
                              </a>
                            </h2>
                          </td>
                          <td>
                            Tech Lead
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Node
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck24" />
                              <label className="form-check-label" htmlFor="customCheck24" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-15.jpg" alt="User Image" />
                                Timothy Smith
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Angular
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck25" />
                              <label className="form-check-label" htmlFor="customCheck25" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-06.jpg" alt="User Image" />
                                Jessie Montoya
                              </a>
                            </h2>
                          </td>
                          <td>
                            PROJECT LEAD
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Node
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck26" />
                              <label className="form-check-label" htmlFor="customCheck26" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-10.jpg" alt="User Image" />
                                Gary Green
                              </a>
                            </h2>
                          </td>
                          <td>
                            TEAM LEAD
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Angular
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck27" />
                              <label className="form-check-label" htmlFor="customCheck27" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-11.jpg" alt="User Image" />
                                Sofia Briant
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            JAVA
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck28" />
                              <label className="form-check-label" htmlFor="customCheck28" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-02.jpg" alt="User Image" />
                                Bess Twishes
                              </a>
                            </h2>
                          </td>
                          <td>
                            Designer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            .NET
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck29" />
                              <label className="form-check-label" htmlFor="customCheck29" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-05.jpg" alt="User Image" />
                                Rayan Lester
                              </a>
                            </h2>
                          </td>
                          <td>
                            Technial Manager
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Python
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check custom-checkbox">
                              <input type="checkbox" className="form-check-input" id="customCheck30" />
                              <label className="form-check-label" htmlFor="customCheck30" />
                            </div>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html"><img className="avatar-img rounded-circle me-2" src="adminassets/img/profiles/avatar-06.jpg" alt="User Image" />
                                Sarah Alexander
                              </a>
                            </h2>
                          </td>
                          <td>
                            Designer
                          </td>
                          <td>
                            <div className="desc-info">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat
                            </div>
                          </td>
                          <td className="text-nowrap">
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-primary" />
                            <i className="fas fa-star text-muted" />
                          </td>
                          <td>
                            Golang
                          </td>
                          <td className="text-end text-nowrap">
                            <a href="javascript:void(0);" className=" btn btn-approve text-white me-2">Approve</a>
                            <a href="javascript:void(0);" className="btn btn-disable">Enable</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div role="tabpanel" id="tab-7" className="tab-pane fade">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover datatable">
                      <thead>
                        <tr>
                          <th />
                          <th>Profile</th>
                          <th>Designation</th>	
                          <th>comments</th>	
                          <th>Stars</th>	
                          <th>Category</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
</div>

    
  )
}

export default BackHome