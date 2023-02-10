import React from 'react'

export default function AnalyticsDashboard() {
  return (
    <div className='container-fluid'>
        <div className="app-page-title">
                    <div className="page-title-wrapper">
                      <div className="page-title-heading">
                        <div className="page-title-icon">
                          <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                        </div>
                        <div>
                          Analytics Dashboard
                          <div className="page-title-subheading">
                            This is an example dashboard created using build-in
                            elements and components.
                          </div>
                        </div>
                      </div>
                      <div className="page-title-actions">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          title="Example Tooltip"
                          data-placement="bottom"
                          className="btn-shadow mr-3 btn btn-dark"
                        >
                          <i className="fa fa-star"></i>
                        </button>
                        <div className="d-inline-block dropdown">
                          <button
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="btn-shadow dropdown-toggle btn btn-info"
                          >
                            <span className="btn-icon-wrapper pr-2 opacity-7">
                              <i className="fa fa-business-time fa-w-20"></i>
                            </span>
                            Buttons
                          </button>
                          <div
                            tabindex="-1"
                            role="menu"
                            aria-hidden="true"
                            className="dropdown-menu dropdown-menu-right"
                          >
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <a className="nav-link">
                                  <i className="nav-link-icon lnr-inbox"></i>
                                  <span> Inbox</span>
                                  <div className="ml-auto badge badge-pill badge-secondary">
                                    86
                                  </div>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link">
                                  <i className="nav-link-icon lnr-book"></i>
                                  <span> Book</span>
                                  <div className="ml-auto badge badge-pill badge-danger">
                                    5
                                  </div>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link">
                                  <i className="nav-link-icon lnr-picture"></i>
                                  <span> Picture</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a disabled="" className="nav-link disabled">
                                  <i className="nav-link-icon lnr-file-empty"></i>
                                  <span> File Disabled</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>{" "}
                    </div>

                    <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                    <li className="nav-item">
                      <a role="tab" className="nav-link active" href="index.html">
                        <span>Variation 1</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        role="tab"
                        className="nav-link"
                        href="analytics-variation.html"
                      >
                        <span>Variation 2</span>
                      </a>
                    </li>
                  </ul>



                  {/* ---------------------Portfolio Performance------------------- */}
                  <div className="mb-3 card">
                      <div className="card-header-tab card-header">
                        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                          <i className="header-icon lnr-charts icon-gradient bg-happy-green">
                            {" "}
                          </i>
                          Portfolio Performance
                        </div>
                        <div className="btn-actions-pane-right text-capitalize">
                          <button className="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm">
                            View All
                          </button>
                        </div>
                      </div>
                      <div className="no-gutters row">
                        <div className="col-sm-6 col-md-4 col-xl-4">
                          <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg opacity-10 bg-warning"></div>
                              <i className="lnr-laptop-phone text-dark opacity-8"></i>
                            </div>
                            <div className="widget-chart-content">
                              <div className="widget-subheading">Cash Deposits</div>
                              <div className="widget-numbers">1,7M</div>
                              <div className="widget-description opacity-8 text-focus">
                                <div className="d-inline text-danger pr-1">
                                  <i className="fa fa-angle-down"></i>
                                  <span className="pl-1">54.1%</span>
                                </div>
                                less earnings
                              </div>
                            </div>
                          </div>
                          <div className="divider m-0 d-md-none d-sm-block"></div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-4">
                          <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg opacity-9 bg-danger"></div>
                              <i className="lnr-graduation-hat text-white"></i>
                            </div>
                            <div className="widget-chart-content">
                              <div className="widget-subheading">
                                Invested Dividents
                              </div>
                              <div className="widget-numbers">
                                <span>9M</span>
                              </div>
                              <div className="widget-description opacity-8 text-focus">
                                Grow Rate:
                                <span className="text-info pl-1">
                                  <i className="fa fa-angle-down"></i>
                                  <span className="pl-1">14.1%</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="divider m-0 d-md-none d-sm-block"></div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-xl-4">
                          <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                            <div className="icon-wrapper rounded-circle">
                              <div className="icon-wrapper-bg opacity-9 bg-success"></div>
                              <i className="lnr-apartment text-white"></i>
                            </div>
                            <div className="widget-chart-content">
                              <div className="widget-subheading">Capital Gains</div>
                              <div className="widget-numbers text-success">
                                <span>$563</span>
                              </div>
                              <div className="widget-description text-focus">
                                Increased by
                                <span className="text-warning pl-1">
                                  <i className="fa fa-angle-up"></i>
                                  <span className="pl-1">7.35%</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center d-block p-3 card-footer">
                        <button className="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg">
                          <span className="mr-2 opacity-7">
                            <i className="icon icon-anim-pulse ion-ios-analytics-outline"></i>
                          </span>
                          <span className="mr-1">View Complete Report</span>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
            
    </div>
  )
}
