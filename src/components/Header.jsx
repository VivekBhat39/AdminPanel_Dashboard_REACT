import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar mt-5">

        {/* Header */}
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            <div className="logo-src"></div>
            <div className="header__pane ml-auto">
              <div>
                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-className="closed-sidebar">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6"></i>
                </span>
              </button>
            </span>
          </div>
          <div className="app-header__content">
            <div className="app-header-left">
              <div className="search-wrapper">
                <div className="input-holder">
                  <input type="text" className="search-input" placeholder="Type to search"></input>
                  <button className="search-icon"><span></span></button>
                </div>
                <button className="close"></button>
              </div>
            </div>
            <div className="app-header-right">
              <div className="header-dots">
                <div className="dropdown">
                  <button type="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="p-0 mr-2 btn btn-link">
                    <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                      <span className="icon-wrapper-bg bg-danger"></span>
                      <i className="icon text-danger icon-anim-pulse ion-android-notifications"></i>
                      <span className="badge badge-dot badge-dot-sm badge-danger">Notifications</span>
                    </span>
                  </button>
                  <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                    <div className="dropdown-menu-header mb-0">
                      <div className="dropdown-menu-header-inner bg-deep-blue">
                        <div className="menu-header-image opacity-1" style={{ backgroundImage: `url('assets/images/dropdown-header/city3.jpg')` }}></div>
                        <div className="menu-header-content text-dark">
                          <h5 className="menu-header-title">Notifications</h5>
                          <h6 className="menu-header-subtitle">You have <b>21</b> unread messages</h6>
                        </div>
                      </div>
                    </div>
                    <ul className="tabs-animated-shadow tabs-animated nav nav-justified tabs-shadow-bordered p-3">
                      <li className="nav-item">
                        <a role="tab" className="nav-link active" data-toggle="tab" href="#tab-messages-header">
                          <span>Messages</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a role="tab" className="nav-link" data-toggle="tab" href="#tab-events-header">
                          <span>Events</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a role="tab" className="nav-link" data-toggle="tab" href="#tab-errors-header">
                          <span>System Errors</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab-messages-header" role="tabpanel">
                        <div className="scroll-area-sm">
                          <div className="scrollbar-container">
                            <div className="p-3">
                              <div className="notifications-box">
                                <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
                                  <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                    <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <h4 className="timeline-title">All Hands Meeting</h4>
                                        <span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                    <div>
                                      <span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
                                        <span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                    <div>
                                      <span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <h4 className="timeline-title">Build the production release
                                          <span className="badge badge-danger ml-2">NEW</span>
                                        </h4>
                                        <span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vertical-timeline-item dot-primary vertical-timeline-element">
                                    <div>
                                      <span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <h4 className="timeline-title">Something not important
                                          <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                              <div className="avatar-icon">
                                                <img src="assets/images/avatars/1.jpg" alt="" />
                                              </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                              <div className="avatar-icon">
                                                <img src="assets/images/avatars/2.jpg" alt="" />
                                              </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                              <div className="avatar-icon">
                                                <img src="assets/images/avatars/3.jpg" alt="" />
                                              </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                              <div className="avatar-icon">
                                                <img src="assets/images/avatars/4.jpg" alt="" />
                                              </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                              <div className="avatar-icon">
                                                <img src="assets/images/avatars/5.jpg" alt="" />
                                              </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                              <div className="avatar-icon">
                                                <img src="assets/images/avatars/9.jpg" alt="" />
                                              </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                              <div className="avatar-icon">
                                                <img src="assets/images/avatars/7.jpg" alt="" />
                                              </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                              <div className="avatar-icon">
                                                <img src="assets/images/avatars/8.jpg" alt="" />
                                              </div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                              <div className="avatar-icon"><i>+</i></div>
                                            </div>
                                          </div>
                                        </h4>
                                        <span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vertical-timeline-item dot-info vertical-timeline-element">
                                    <div>
                                      <span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <h4 className="timeline-title">This dot has an info state</h4>
                                        <span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                    <div>
                                      <span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <h4 className="timeline-title">All Hands Meeting</h4>
                                        <span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                    <div>
                                      <span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <p>Yet another one, at <span className="text-success">15:00 PM</span>
                                        </p><span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                    <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <h4 className="timeline-title">Build the production release
                                          <span className="badge badge-danger ml-2">NEW</span>
                                        </h4>
                                        <span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vertical-timeline-item dot-dark vertical-timeline-element">
                                    <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                      <div className="vertical-timeline-element-content bounce-in">
                                        <h4 className="timeline-title">This dot has a dark state</h4>
                                        <span className="vertical-timeline-element-date"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-events-header" role="tabpanel">
                        <div className="scroll-area-sm">
                          <div className="scrollbar-container">
                            <div className="p-3">
                              <div className="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                <div className="vertical-timeline-item vertical-timeline-element">
                                  <div>
                                    <span className="vertical-timeline-element-icon bounce-in">
                                      <i className="badge badge-dot badge-dot-xl badge-success"> </i>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in">
                                      <h4 className="timeline-title">All Hands Meeting</h4>
                                      <p>Lorem ipsum dolor sic amet, today at
                                        <a href="javascript:void(0);">12:00 PM</a>
                                      </p>
                                      <span className="vertical-timeline-element-date"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="vertical-timeline-item vertical-timeline-element">
                                  <div>
                                    <span className="vertical-timeline-element-icon bounce-in">
                                      <i className="badge badge-dot badge-dot-xl badge-warning"> </i>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in">
                                      <p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                      <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
                                      <span className="vertical-timeline-element-date"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="vertical-timeline-item vertical-timeline-element">
                                  <div>
                                    <span className="vertical-timeline-element-icon bounce-in">
                                      <i className="badge badge-dot badge-dot-xl badge-danger"> </i>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in">
                                      <h4 className="timeline-title">Build the production release</h4>
                                      <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut
                                        labore et dolore magna elit enim at minim veniam quis nostrud
                                      </p>
                                      <span className="vertical-timeline-element-date"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="vertical-timeline-item vertical-timeline-element">
                                  <div>
                                    <span className="vertical-timeline-element-icon bounce-in">
                                      <i className="badge badge-dot badge-dot-xl badge-primary"> </i>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in">
                                      <h4 className="timeline-title text-success">Something not important</h4>
                                      <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                                      <span className="vertical-timeline-element-date"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="vertical-timeline-item vertical-timeline-element">
                                  <div>
                                    <span className="vertical-timeline-element-icon bounce-in">
                                      <i className="badge badge-dot badge-dot-xl badge-success"> </i>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in">
                                      <h4 className="timeline-title">All Hands Meeting</h4>
                                      <p>Lorem ipsum dolor sic amet, today at
                                        <a href="javascript:void(0);">12:00 PM</a>
                                      </p>
                                      <span className="vertical-timeline-element-date"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="vertical-timeline-item vertical-timeline-element">
                                  <div>
                                    <span className="vertical-timeline-element-icon bounce-in">
                                      <i className="badge badge-dot badge-dot-xl badge-warning"> </i>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in">
                                      <p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                      <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
                                      <span className="vertical-timeline-element-date"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="vertical-timeline-item vertical-timeline-element">
                                  <div>
                                    <span className="vertical-timeline-element-icon bounce-in">
                                      <i className="badge badge-dot badge-dot-xl badge-danger"> </i>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in">
                                      <h4 className="timeline-title">Build the production release</h4>
                                      <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut
                                        labore et dolore magna elit enim at minim veniam quis nostrud
                                      </p>
                                      <span className="vertical-timeline-element-date"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="vertical-timeline-item vertical-timeline-element">
                                  <div>
                                    <span className="vertical-timeline-element-icon bounce-in">
                                      <i className="badge badge-dot badge-dot-xl badge-primary"> </i>
                                    </span>
                                    <div className="vertical-timeline-element-content bounce-in">
                                      <h4 className="timeline-title text-success">Something not important</h4>
                                      <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                                      <span className="vertical-timeline-element-date"></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab-errors-header" role="tabpanel">
                        <div className="scroll-area-sm">
                          <div className="scrollbar-container">
                            <div className="no-results pt-3 pb-0">
                              <div className="swal2-icon swal2-success swal2-animate-success-icon">
                                <div className="swal2-success-circular-line-left" style={{ backgroundColor: `rgb(255, 255, 255)` }}></div>
                                <span className="swal2-success-line-tip"></span>
                                <span className="swal2-success-line-long"></span>
                                <div className="swal2-success-ring"></div>
                                <div className="swal2-success-fix" style={{ backgroundColor: `rgb(255, 255, 255)` }}></div>
                                <div className="swal2-success-circular-line-right" style={{ backgroundColor: `rgb(255, 255, 255)` }}></div>
                              </div>
                              <div className="results-subtitle">All caught up!</div>
                              <div className="results-title">There are no system errors!</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="nav flex-column">
                      <li className="nav-item-divider nav-item"></li>
                      <li className="nav-item-btn text-center nav-item">
                        <button className="btn-shadow btn-wide btn-pill btn btn-focus btn-sm">View Latest Changes</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left">
                      <div className="btn-group">
                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                          <img width="42" className="rounded-circle" src={require("../assets/images/avatars/1.jpg")} alt="" />
                          <i className="fa fa-angle-down ml-2 opacity-8"></i>
                        </a>
                        <div tabindex="-1" role="menu" aria-hidden="true" className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                          <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner bg-info">
                              <div className="menu-header-image opacity-2" style={{ backgroundImage: `url('assets/images/dropdown-header/city3.jpg')` }}></div>
                              <div className="menu-header-content text-left">
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <img width="42" className="rounded-circle" src={require("../assets/images/avatars/1.jpg")} alt="" />
                                    </div>
                                    <div className="widget-content-left">
                                      <div className="widget-heading">Alina Mcloughlin</div>
                                      <div className="widget-subheading opacity-8">A short profile description</div>
                                    </div>
                                    <div className="widget-content-right mr-2">
                                      <button className="btn-pill btn-shadow btn-shine btn btn-focus">Logout</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="scroll-area-xs" style={{ height: "150px" }}>
                            <div className="scrollbar-container ps">
                              <ul className="nav flex-column">
                                <li className="nav-item-header nav-item">Activity</li>
                                <li className="nav-item">
                                  <a href="javascript:void(0);" className="nav-link">Chat
                                    <div className="ml-auto badge badge-pill badge-info">8</div>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="javascript:void(0);" className="nav-link">Recover Password</a>
                                </li>
                                <li className="nav-item-header nav-item">My Account
                                </li>
                                <li className="nav-item">
                                  <a href="javascript:void(0);" className="nav-link">Settings
                                    <div className="ml-auto badge badge-success">New</div>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="javascript:void(0);" className="nav-link">Messages
                                    <div className="ml-auto badge badge-warning">512</div>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="javascript:void(0);" className="nav-link">Logs</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <ul className="nav flex-column">
                            <li className="nav-item-divider mb-0 nav-item"></li>
                          </ul>
                          <div className="grid-menu grid-menu-2col">
                            <div className="no-gutters row">
                              <div className="col-sm-6">
                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                                  <i className="pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper mb-2"></i> Message Inbox
                                </button>
                              </div>
                              <div className="col-sm-6">
                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                                  <i className="pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper mb-2"></i>
                                  <b>Support Tickets</b>
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul className="nav flex-column">
                            <li className="nav-item-divider nav-item">
                            </li>
                            <li className="nav-item-btn text-center nav-item">
                              <button className="btn-wide btn btn-primary btn-sm"> Open Messages </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left  ml-3 header-user-info">
                      <div className="widget-heading"> Alina Mclourd </div>
                      <div className="widget-subheading"> VP People Manager </div>
                    </div>
                    <div className="widget-content-right header-user-info ml-3">
                      <button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                        <i className="fa text-white fa-calendar pr-1 pl-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-btn-lg">
                <button type="button" className="hamburger hamburger--elastic open-right-drawer">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="ui-theme-settings">
          <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
            <i className="fa fa-cog fa-w-16 fa-spin fa-2x"></i>
          </button>
          <div className="theme-settings__inner">
            <div className="scrollbar-container">
              <div className="theme-settings__options-wrapper">
                <h3 className="themeoptions-heading">Layout Options</h3>
                <div className="p-3">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left mr-3">
                            <div className="switch has-switch switch-container-className" data-className="fixed-header">
                              <div className="switch-animate switch-on">
                                <input type="checkbox" checked="" data-toggle="toggle" data-onstyle="success"></input>
                              </div>
                            </div>
                          </div>
                          <div className="widget-content-left">
                            <div className="widget-heading">Fixed Header</div>
                            <div className="widget-subheading">Makes the header top fixed, always visible!</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left mr-3">
                            <div className="switch has-switch switch-container-className" data-className="fixed-sidebar">
                              <div className="switch-animate switch-on">
                                <input type="checkbox" checked="" data-toggle="toggle" data-onstyle="success"></input>
                              </div>
                            </div>
                          </div>
                          <div className="widget-content-left">
                            <div className="widget-heading">Fixed Sidebar</div>
                            <div className="widget-subheading">Makes the sidebar left fixed, always visible!</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left mr-3">
                            <div className="switch has-switch switch-container-className" data-className="fixed-footer">
                              <div className="switch-animate switch-off">
                                <input type="checkbox" data-toggle="toggle" data-onstyle="success"></input>
                              </div>
                            </div>
                          </div>
                          <div className="widget-content-left">
                            <div className="widget-heading">Fixed Footer</div>
                            <div className="widget-subheading">Makes the app footer bottom fixed, always visible!</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="themeoptions-heading">
                  <div> Header Options </div>
                  <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-className" data-className="">
                    Restore Default
                  </button>
                </h3>
                <div className="p-3">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h5 className="pb-2">Choose Color Scheme</h5>
                      <div className="theme-settings-swatches">
                        <div className="swatch-holder bg-primary switch-header-cs-className" data-className="bg-primary header-text-light"></div>
                        <div className="swatch-holder bg-secondary switch-header-cs-className" data-className="bg-secondary header-text-light"></div>
                        <div className="swatch-holder bg-success switch-header-cs-className" data-className="bg-success header-text-light"></div>
                        <div className="swatch-holder bg-info switch-header-cs-className" data-className="bg-info header-text-light"></div>
                        <div className="swatch-holder bg-warning switch-header-cs-className" data-className="bg-warning header-text-dark"></div>
                        <div className="swatch-holder bg-danger switch-header-cs-className" data-className="bg-danger header-text-light"></div>
                        <div className="swatch-holder bg-light switch-header-cs-className" data-className="bg-light header-text-dark"></div>
                        <div className="swatch-holder bg-dark switch-header-cs-className" data-className="bg-dark header-text-light"></div>
                        <div className="swatch-holder bg-focus switch-header-cs-className" data-className="bg-focus header-text-light"></div>
                        <div className="swatch-holder bg-alternate switch-header-cs-className" data-className="bg-alternate header-text-light"></div>
                        <div className="divider"></div>
                        <div className="swatch-holder bg-vicious-stance switch-header-cs-className" data-className="bg-vicious-stance header-text-light"></div>
                        <div className="swatch-holder bg-midnight-bloom switch-header-cs-className" data-className="bg-midnight-bloom header-text-light"></div>
                        <div className="swatch-holder bg-night-sky switch-header-cs-className" data-className="bg-night-sky header-text-light"></div>
                        <div className="swatch-holder bg-slick-carbon switch-header-cs-className" data-className="bg-slick-carbon header-text-light"></div>
                        <div className="swatch-holder bg-asteroid switch-header-cs-className" data-className="bg-asteroid header-text-light"></div>
                        <div className="swatch-holder bg-royal switch-header-cs-className" data-className="bg-royal header-text-light"></div>
                        <div className="swatch-holder bg-warm-flame switch-header-cs-className" data-className="bg-warm-flame header-text-dark"></div>
                        <div className="swatch-holder bg-night-fade switch-header-cs-className" data-className="bg-night-fade header-text-dark"></div>
                        <div className="swatch-holder bg-sunny-morning switch-header-cs-className" data-className="bg-sunny-morning header-text-dark"></div>
                        <div className="swatch-holder bg-tempting-azure switch-header-cs-className" data-className="bg-tempting-azure header-text-dark"></div>
                        <div className="swatch-holder bg-amy-crisp switch-header-cs-className" data-className="bg-amy-crisp header-text-dark"></div>
                        <div className="swatch-holder bg-heavy-rain switch-header-cs-className" data-className="bg-heavy-rain header-text-dark"></div>
                        <div className="swatch-holder bg-mean-fruit switch-header-cs-className" data-className="bg-mean-fruit header-text-dark"></div>
                        <div className="swatch-holder bg-malibu-beach switch-header-cs-className" data-className="bg-malibu-beach header-text-light"></div>
                        <div className="swatch-holder bg-deep-blue switch-header-cs-className" data-className="bg-deep-blue header-text-dark"></div>
                        <div className="swatch-holder bg-ripe-malin switch-header-cs-className" data-className="bg-ripe-malin header-text-light"></div>
                        <div className="swatch-holder bg-arielle-smile switch-header-cs-className" data-className="bg-arielle-smile header-text-light"></div>
                        <div className="swatch-holder bg-plum-plate switch-header-cs-className" data-className="bg-plum-plate header-text-light"></div>
                        <div className="swatch-holder bg-happy-fisher switch-header-cs-className" data-className="bg-happy-fisher header-text-dark"></div>
                        <div className="swatch-holder bg-happy-itmeo switch-header-cs-className" data-className="bg-happy-itmeo header-text-light"></div>
                        <div className="swatch-holder bg-mixed-hopes switch-header-cs-className" data-className="bg-mixed-hopes header-text-light"></div>
                        <div className="swatch-holder bg-strong-bliss switch-header-cs-className" data-className="bg-strong-bliss header-text-light"></div>
                        <div className="swatch-holder bg-grow-early switch-header-cs-className" data-className="bg-grow-early header-text-light"></div>
                        <div className="swatch-holder bg-love-kiss switch-header-cs-className" data-className="bg-love-kiss header-text-light"></div>
                        <div className="swatch-holder bg-premium-dark switch-header-cs-className" data-className="bg-premium-dark header-text-light"></div>
                        <div className="swatch-holder bg-happy-green switch-header-cs-className" data-className="bg-happy-green header-text-light"></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="themeoptions-heading">
                  <div>Sidebar Options</div>
                  <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-className" data-className="">
                    Restore Default
                  </button>
                </h3>
                <div className="p-3">
                  <ul className="list-group">

                    <li className="list-group-item">
                      <h5 className="pb-2">Choose Color Scheme</h5>
                      <div className="theme-settings-swatches">
                        <div className="swatch-holder bg-primary switch-sidebar-cs-className" data-className="bg-primary sidebar-text-light"></div>
                        <div className="swatch-holder bg-secondary switch-sidebar-cs-className" data-className="bg-secondary sidebar-text-light"></div>
                        <div className="swatch-holder bg-success switch-sidebar-cs-className" data-className="bg-success sidebar-text-dark"></div>
                        <div className="swatch-holder bg-info switch-sidebar-cs-className" data-className="bg-info sidebar-text-dark"></div>
                        <div className="swatch-holder bg-warning switch-sidebar-cs-className" data-className="bg-warning sidebar-text-dark"></div>
                        <div className="swatch-holder bg-danger switch-sidebar-cs-className" data-className="bg-danger sidebar-text-light"></div>
                        <div className="swatch-holder bg-light switch-sidebar-cs-className" data-className="bg-light sidebar-text-dark"></div>
                        <div className="swatch-holder bg-dark switch-sidebar-cs-className" data-className="bg-dark sidebar-text-light"></div>
                        <div className="swatch-holder bg-focus switch-sidebar-cs-className" data-className="bg-focus sidebar-text-light"></div>
                        <div className="swatch-holder bg-alternate switch-sidebar-cs-className" data-className="bg-alternate sidebar-text-light"></div>
                        <div className="divider"></div>
                        <div className="swatch-holder bg-vicious-stance switch-sidebar-cs-className" data-className="bg-vicious-stance sidebar-text-light"></div>
                        <div className="swatch-holder bg-midnight-bloom switch-sidebar-cs-className" data-className="bg-midnight-bloom sidebar-text-light"></div>
                        <div className="swatch-holder bg-night-sky switch-sidebar-cs-className" data-className="bg-night-sky sidebar-text-light"></div>
                        <div className="swatch-holder bg-slick-carbon switch-sidebar-cs-className" data-className="bg-slick-carbon sidebar-text-light"></div>
                        <div className="swatch-holder bg-asteroid switch-sidebar-cs-className" data-className="bg-asteroid sidebar-text-light"></div>
                        <div className="swatch-holder bg-royal switch-sidebar-cs-className" data-className="bg-royal sidebar-text-light"></div>
                        <div className="swatch-holder bg-warm-flame switch-sidebar-cs-className" data-className="bg-warm-flame sidebar-text-dark"></div>
                        <div className="swatch-holder bg-night-fade switch-sidebar-cs-className" data-className="bg-night-fade sidebar-text-dark"></div>
                        <div className="swatch-holder bg-sunny-morning switch-sidebar-cs-className" data-className="bg-sunny-morning sidebar-text-dark"></div>
                        <div className="swatch-holder bg-tempting-azure switch-sidebar-cs-className" data-className="bg-tempting-azure sidebar-text-dark"></div>
                        <div className="swatch-holder bg-amy-crisp switch-sidebar-cs-className" data-className="bg-amy-crisp sidebar-text-dark"></div>
                        <div className="swatch-holder bg-heavy-rain switch-sidebar-cs-className" data-className="bg-heavy-rain sidebar-text-dark"></div>
                        <div className="swatch-holder bg-mean-fruit switch-sidebar-cs-className" data-className="bg-mean-fruit sidebar-text-dark"></div>
                        <div className="swatch-holder bg-malibu-beach switch-sidebar-cs-className" data-className="bg-malibu-beach sidebar-text-light"></div>
                        <div className="swatch-holder bg-deep-blue switch-sidebar-cs-className" data-className="bg-deep-blue sidebar-text-dark"></div>
                        <div className="swatch-holder bg-ripe-malin switch-sidebar-cs-className" data-className="bg-ripe-malin sidebar-text-light"></div>
                        <div className="swatch-holder bg-arielle-smile switch-sidebar-cs-className" data-className="bg-arielle-smile sidebar-text-light"></div>
                        <div className="swatch-holder bg-plum-plate switch-sidebar-cs-className" data-className="bg-plum-plate sidebar-text-light"></div>
                        <div className="swatch-holder bg-happy-fisher switch-sidebar-cs-className" data-className="bg-happy-fisher sidebar-text-dark"></div>
                        <div className="swatch-holder bg-happy-itmeo switch-sidebar-cs-className" data-className="bg-happy-itmeo sidebar-text-light"></div>
                        <div className="swatch-holder bg-mixed-hopes switch-sidebar-cs-className" data-className="bg-mixed-hopes sidebar-text-light"></div>
                        <div className="swatch-holder bg-strong-bliss switch-sidebar-cs-className" data-className="bg-strong-bliss sidebar-text-light"></div>
                        <div className="swatch-holder bg-grow-early switch-sidebar-cs-className" data-className="bg-grow-early sidebar-text-light"></div>
                        <div className="swatch-holder bg-love-kiss switch-sidebar-cs-className" data-className="bg-love-kiss sidebar-text-light"></div>
                        <div className="swatch-holder bg-premium-dark switch-sidebar-cs-className" data-className="bg-premium-dark sidebar-text-light"></div>
                        <div className="swatch-holder bg-happy-green switch-sidebar-cs-className" data-className="bg-happy-green sidebar-text-light"></div>
                      </div>
                    </li>


                  </ul>
                </div>
                <h3 className="themeoptions-heading">
                  <div>Main Content Options</div>
                  <button type="button" className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">Restore Default</button>
                </h3>
                <div className="p-3">
                  <ul className="list-group">

                    <li className="list-group-item">
                      <h5 className="pb-2">Page Section Tabs</h5>
                      <div className="theme-settings-swatches">
                        <div role="group" className="mt-2 btn-group">
                          <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-className" data-className="body-tabs-line"> Line</button>
                          <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-className" data-className="body-tabs-shadow"> Shadow </button>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <h5 className="pb-2">Light Color Schemes
                      </h5>
                      <div className="theme-settings-swatches">
                        <div role="group" className="mt-2 btn-group">
                          <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-className" data-className="app-theme-white"> White Theme</button>
                          <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-className" data-className="app-theme-gray"> Gray Theme</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="app-main"> */}


        {/*----------------- Sidebar -----------------------*/}

        <div className="row" style={{ marginTop: '72px' }}>
          <div className="col-lg-2">

            <div className="app-sidebar sidebar-shadow">
              {/* <div className="app-header__logo">
                <div className="logo-src">
                </div>
                <div className="header__pane ml-auto">
                  <div>
                    <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-className="closed-sidebar">
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="app-header__mobile-menu">
                <div>
                  <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="app-header__menu">
                <span>
                  <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span className="btn-icon-wrapper">
                      <i className="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                  </button>
                </span>
              </div>


              <div className="scrollbar-sidebar">

                <div className="app-sidebar__inner">
                  <ul className="vertical-nav-menu">
                    <li className="app-sidebar__heading">Menu</li>
                    <li className="mm-active">
                      <a href="#">
                        <i className="metismenu-icon pe-7s-rocket"></i>Dashboards
                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                      </a>
                      <ul>
                        <li><Link to="/dashboard/city">Cities</Link></li>
                        <li><Link to="/dashboard/companies">Companies</Link></li>
                        <li><Link to="/dashboard/productcategories">Product Categories</Link></li>
                        <li><Link to="/dashboard/users">Users</Link></li>
                        <li><Link to="/dashboard/analyticsdashboard">Analytics Dashboard</Link></li>
                        <li><Link to="/dashboard/technicalsupport">Technical Supports</Link></li>
                        <li><Link to="/dashboard/chartcard">Chart Card</Link></li>
                        <li><Link to="/dashboard/dynamictables">Dynamic Tables</Link></li>
                        <li><Link to="/dashboard/taskandchatbox">Task And Chatbox</Link></li>
                        <li><Link to="/dashboard/totalorders">TotalOrders</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div className="col-lg-9 mx-auto">
            <Outlet />
          </div>
        </div>


        {/* </div> */}
      </div>
    </div>
  );
}

