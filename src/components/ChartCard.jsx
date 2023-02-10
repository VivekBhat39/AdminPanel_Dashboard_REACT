import React from "react";

export default function ChartCard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-xl-3">
          <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success">
            <div className="widget-chat-wrapper-outer">
              <div className="widget-chart-content pt-3 pl-3 pb-1">
                <div className="widget-chart-flex">
                  <div className="widget-numbers">
                    <div className="widget-chart-flex">
                      <div className="fsize-4">
                        <small className="opacity-5">$</small>
                        <span>874</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="widget-subheading mb-0 opacity-5">
                  sales last month
                </h6>
              </div>
              <div className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto row">
                <div className="col-md-9">
                  <div id="dashboard-sparklines-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary">
            <div className="widget-chat-wrapper-outer">
              <div className="widget-chart-content pt-3 pl-3 pb-1">
                <div className="widget-chart-flex">
                  <div className="widget-numbers">
                    <div className="widget-chart-flex">
                      <div className="fsize-4">
                        <small className="opacity-5">$</small>
                        <span>1283</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="widget-subheading mb-0 opacity-5">sales Income</h6>
              </div>
              <div className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto row">
                <div className="col-md-9">
                  <div id="dashboard-sparklines-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning">
            <div className="widget-chat-wrapper-outer">
              <div className="widget-chart-content pt-3 pl-3 pb-1">
                <div className="widget-chart-flex">
                  <div className="widget-numbers">
                    <div className="widget-chart-flex">
                      <div className="fsize-4">
                        <small className="opacity-5">$</small>
                        <span>1286</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="widget-subheading mb-0 opacity-5">
                  last month sales
                </h6>
              </div>
              <div className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto row">
                <div className="col-md-9">
                  <div id="dashboard-sparklines-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
            <div className="widget-chat-wrapper-outer">
              <div className="widget-chart-content pt-3 pl-3 pb-1">
                <div className="widget-chart-flex">
                  <div className="widget-numbers">
                    <div className="widget-chart-flex">
                      <div className="fsize-4">
                        <small className="opacity-5">$</small>
                        <span>564</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="widget-subheading mb-0 opacity-5">total revenue</h6>
              </div>
              <div className="no-gutters widget-chart-wrapper mt-3 mb-3 pl-2 he-auto row">
                <div className="col-md-9">
                  <div id="dashboard-sparklines-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
