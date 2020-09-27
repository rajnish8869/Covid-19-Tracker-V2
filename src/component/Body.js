import React, { Component } from 'react'
import Card from "./Card";
import Table from "./Table";
// import '../App.css';
import { Line,Bar } from "react-chartjs-2";
import axios from "axios";
import 'chartjs-plugin-zoom';

      /* eslint-disable */
export class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data1: [],
          data2: [],
          data3: [],
          data4: [],
          chart:{},
          showdata:[]
        };
      }

      async  componentWillMount() {
        await fetch("https://covid19.mathdro.id/api/confirmed") 
          .then((results) => results.json())
          .then((data) => new Set(this.setState({ data1: data })));

        await fetch("https://covid19.mathdro.id/api/countries") 
          .then((results) => results.json())
          .then((data) => new Set(this.setState({ data2: data.countries })));

        await fetch("https://covid19.mathdro.id/api/daily") 
          .then((results) => results.json())
          .then((data) => this.setState({ data4: data }));

        await axios.get(`https://covid19.mathdro.id/api/countries/` + `${this.state.showdata}/`)
          .then((results) => results.data)
          .then((data) => this.setState({ data3: data }));
      }

      
       setChart = ()=> this.state.showdata == 0 ? ({
        labels: Object.values(this.state.data4.map(e => e.reportDate)),
        datasets: [
          {
            label: "Recovered",
            fill: false,
            lineTension: 0.1,
            maxBarThickness:50,
            backgroundColor: "rgb(0, 255, 0)",
            borderColor: "rgb(0, 255, 0)",
            borderCapStyle: "butt",
            borderWidth:4,
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
            data: Object.values(this.state.data4.map(e => e.totalConfirmed))
            
          },
          {
            label: "Deaths",
            fill: false,
            lineTension: 0.1,
            maxBarThickness:50,
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
            data: Object.values(this.state.data4.map(e => e.deaths.total))
            
          }
        ]
       }) : ({ 
        labels: Object.values(this.state.data1.filter(e => e.countryRegion == this.state.showdata).map(obj => obj.provinceState != null ? obj.provinceState : obj.countryRegion )),
        datasets: [
          {
            label: "Recovered",
            fill: false,
            lineTension: 0.1,
            maxBarThickness:50,
            backgroundColor: "rgb(0, 255, 0)",
            borderColor: "rgb(0, 255, 0)",
            borderCapStyle: "butt",
            borderWidth:4,
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
            data: Object.values(this.state.data1.filter(e => e.countryRegion == this.state.showdata).map(obj => obj.recovered))
            
          },
          {
            label: "Deaths",
            fill: false,
            lineTension: 0.1,
            maxBarThickness:50,
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
            data: Object.values(this.state.data1.filter(e => e.countryRegion == this.state.showdata).map(obj => obj.deaths))
            
          },
          {
            label: "Active",
            fill: false,
            lineTension: 0.1,
            maxBarThickness:50,
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
            data: Object.values(this.state.data1.filter(e => e.countryRegion == this.state.showdata).map(obj => obj.active))
            
          },

        ]
    })

    handleShowdata = (event)=> {
        this.setState({
            showdata: event.target.value
          })
    }


confirm
    render() {
        const url = `https://covid19.mathdro.id/api/countries/${this.state.showdata}/`
        const url1 = `https://covid19.mathdro.id/api`
        
        return (
            <div className="bodyColor">
                <div className="center-heading"><h1 className="fontheading">Covid-19 Tracker</h1></div>
                <div className="row placecenter">
                    <div className="col-8 col-md-3">
                    <select className="custom-select font-select" value={this.state.showdata} onChange={this.handleShowdata}>
                      <option value="select" placeholder="select any" >Select Any one country</option>
                      {this.state.data2.map((obj) =>
                          <option key={obj.name}>{obj.name}</option>)}
                    </select>
                    </div>

                </div>
                <div className="countryShow">  {this.state.showdata == 0 ? <h2>Cases WorldWide</h2> : <h2>Cases in  {this.state.showdata} </h2>} </div>
                
                <Card url={url} url1={url1} showData={this.state.showdata}/>
                <div className="countryShow"> <h2>Graph View OF Covid-19</h2> </div>

                <div className="chartWrapper">
                    <div className="chartContainer">
                <Bar data={this.setChart} options={{ maintainAspectRatio: true, responsive: true, legend: { labels: {fontColor: "white",fontSize: 15}}, scales: {
            xAxes: [{ 
                gridLines: {
                    display: true,
                },
                ticks: {
                  fontColor: "white",
                },
            }],
            yAxes: [{ 
                gridLines: {
                    display: true,
                },
                ticks: {
                  fontColor: "white",
                },
            }]},  plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'x',
                },
                zoom: {
                  enabled: true,
                  drag: true,
                  mode: 'xy'
                }
              }
            }  }}  />
                    </div>
                </div>
                <div className="chartWrapper margin-top">
                    <div className="chartContainer">
                <Line data={this.setChart} options={{ maintainAspectRatio: true, responsive: true, legend: { labels: {fontColor: "white",fontSize: 15}} , scales: {
            xAxes: [{ 
                gridLines: {
                    display: true,
                },
                ticks: {
                  fontColor: "white",
                },
            }],
            yAxes: [{ 
                gridLines: {
                    display: true,
                },
                ticks: {
                  fontColor: "white",
                },
            }]} ,   plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'x',
                },
                zoom: {
                  enabled: true,
                  drag: true,
                  mode: 'xy'
                }
              }
            }}}  />
                    </div>
                </div>

                <div className="countryShow"> <h2>Table View OF Covid-19</h2> </div>

                <Table showData={this.state.showdata} data1={this.state.data1} data4={this.state.data4}/>
              </div>
        )
    }
}

export default Body
