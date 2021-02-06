import React, { Component } from "react";
import Card from "./Card";
import Table_1 from "./Table_1";
import Maps from "./Maps";
// import '../App.css';
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import "chartjs-plugin-zoom";

/* eslint-disable */
export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      chart: {},
      showdata: [],
      // mapCenter: { lat: 24.6912, lng: 78.4138 },
    };
  }

  async componentDidMount() {
    await fetch("https://covid19.mathdro.id/api/confirmed")
      .then((results) => results.json())
      .then((data) => new Set(this.setState({ data1: data })));

    await fetch("https://covid19.mathdro.id/api/recovered")
      .then((results) => results.json())
      .then((data) => new Set(this.setState({ data5: data })));

    await fetch("https://covid19.mathdro.id/api/countries")
      .then((results) => results.json())
      .then((data) => new Set(this.setState({ data2: data.countries })));

    await fetch("https://covid19.mathdro.id/api/daily")
      .then((results) => results.json())
      .then((data) => this.setState({ data4: data }));

    // await fetch(`https://disease.sh/v3/covid-19/countries/china`)
    // .then((results) => results.json())
    // .then((data) => this.setState({mapCenter : {lat: data.countryInfo.lat, lng: data.countryInfo.long}}));
    // console.log(this.state.mapCenter)

    await axios
      .get(
        `https://covid19.mathdro.id/api/countries/` + `${this.state.showdata}/`
      )
      .then((results) => results.data)
      .then((data) => this.setState({ data3: data }));
  }

  setChart = () =>
    this.state.showdata == 0
      ? {
          labels: Object.values(this.state.data4.map((e) => e.reportDate)),
          datasets: [
            {
              label: "Recovered",
              fill: false,
              lineTension: 0.1,
              maxBarThickness: 50,
              backgroundColor: "rgb(0, 255, 0)",
              borderColor: "rgb(0, 255, 0)",
              borderCapStyle: "butt",
              borderWidth: 4,
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(0, 255, 0)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 255, 0)",
              pointHoverBorderColor: "rgb(0, 255, 0)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: Object.values(
                this.state.data4.map((e) => e.totalConfirmed)
              ),
            },
            {
              label: "Deaths",
              fill: false,
              lineTension: 0.1,
              maxBarThickness: 50,
              backgroundColor: "rgb(255, 0, 0)",
              borderColor: "rgb(255, 0, 0)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(255, 0, 0)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(255, 0, 0)",
              pointHoverBorderColor: "rgb(255, 0, 0)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: Object.values(this.state.data4.map((e) => e.deaths.total)),
            },
          ],
        }
      : {
          labels: Object.values(
            this.state.data1
              .filter((e) => e.countryRegion == this.state.showdata)
              .map((obj) =>
                obj.provinceState != null
                  ? obj.provinceState
                  : obj.countryRegion
              )
          ),
          datasets: [
            {
              label: "Recovered",
              fill: false,
              lineTension: 0.1,
              maxBarThickness: 50,
              backgroundColor: "rgb(0, 255, 0)",
              borderColor: "rgb(0, 255, 0)",
              borderCapStyle: "butt",
              borderWidth: 4,
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: Object.values(
                this.state.data1
                  .filter((e) => e.countryRegion == this.state.showdata)
                  .map((obj) => obj.recovered)
              ),
            },
            {
              label: "Deaths",
              fill: false,
              lineTension: 0.1,
              maxBarThickness: 50,
              backgroundColor: "rgb(255, 0, 0)",
              borderColor: "rgb(255, 0, 0)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: Object.values(
                this.state.data1
                  .filter((e) => e.countryRegion == this.state.showdata)
                  .map((obj) => obj.deaths)
              ),
            },
            {
              label: "Active",
              fill: false,
              lineTension: 0.1,
              maxBarThickness: 50,
              backgroundColor: "rgb(248, 252, 3)",
              borderColor: "rgb(248, 252, 3)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: Object.values(
                this.state.data1
                  .filter((e) => e.countryRegion == this.state.showdata)
                  .map((obj) => obj.active)
              ),
            },
          ],
        };

  handleShowdata = (event) => {
    this.setState({
      showdata: event.target.value,
    });
  };

  confirm;
  render() {
    const url = `https://covid19.mathdro.id/api/countries/${this.state.showdata}/`;
    const url1 = `https://covid19.mathdro.id/api`;

    return (
      <div className="bodyColor">
        <div className=" container">
          <div className="center-heading">
            <h1 className="fontheading">Covid-19 Tracker</h1>
            <h4>
              Showing WorldWide & Individual Country Data From 1
              <sup style={{ textTransform: "lowercase" }}>st</sup> January 2020
              To Till Date
            </h4>
          </div>
          <div className="row placecenter">
            <div className="col-8 col-md-3">
              <select
                className="custom-select font-select"
                value={this.state.showdata}
                onChange={this.handleShowdata}
              >
                <option value="select" placeholder="select any">
                  Select Any One Country
                </option>
                {this.state.data2.map((obj) => (
                  <option key={obj.name}>{obj.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="countryShow">
            {" "}
            {this.state.showdata == 0 ? (
              <h2>Cases WorldWide</h2>
            ) : (
              <h2>Cases in {this.state.showdata} </h2>
            )}{" "}
          </div>

          <Card url={url} url1={url1} showData={this.state.showdata} />
          <ul class="nav nav-pills mt-5" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <strong>CHART</strong>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <strong>MAP</strong>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <strong>TABLE</strong>
              </a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="countryShow">
                {" "}
                <h2>Chart</h2>{" "}
              </div>
              <div className="chartWrapper">
                <div className="chartContainer">
                  <Bar
                    data={this.setChart}
                    options={{
                      maintainAspectRatio: true,
                      responsive: true,
                      legend: { labels: { fontColor: "white", fontSize: 15 } },
                      scales: {
                        xAxes: [
                          {
                            gridLines: {
                              display: true,
                            },
                            ticks: {
                              fontColor: "white",
                            },
                          },
                        ],
                        yAxes: [
                          {
                            gridLines: {
                              display: true,
                            },
                            ticks: {
                              fontColor: "white",
                            },
                          },
                        ],
                      },
                      plugins: {
                        zoom: {
                          pan: {
                            enabled: true,
                            mode: "xy",
                          },
                          zoom: {
                            enabled: true,
                            // drag: true,
                            mode: "xy",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="chartWrapper">
                <div className="countryShow">
                  {" "}
                  <h2>Map</h2>{" "}
                </div>
                <div className="chartContainer">
                  <Maps
                    data5={this.state.data5}
                    showData={this.state.showdata}
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="countryShow">
                {" "}
                <h2>Table</h2>{" "}
              </div>

              <Table_1
                showData={this.state.showdata}
                data1={this.state.data1}
                data4={this.state.data4}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
