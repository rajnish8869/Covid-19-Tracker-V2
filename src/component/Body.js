import React, { Component } from 'react'
import Card from "./Card";
import Table from "./Table";
// import '../App.css';
import { Line,Bar } from "react-chartjs-2";
import axios from "axios";


export class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data1: [],
          data2: [],
          data3: [],
          chart:{},
          showdata:["india"]
        };
      }

      async  componentWillMount() {
        await fetch("https://covid19.mathdro.id/api/confirmed") /*end fetch */
          .then((results) => results.json())
          .then((data) => new Set(this.setState({ data1: data })));

        await fetch("https://covid19.mathdro.id/api/countries") /*end fetch */
          .then((results) => results.json())
          .then((data) => new Set(this.setState({ data2: data.countries })));


        await axios.get(`https://covid19.mathdro.id/api/countries/` + `${this.state.showdata}/`)
          .then((results) => results.data)
          .then((data) => this.setState({ data3: data }));
      }

      
       setChart = ()=> ({ 
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



    render() {
        
        // const name =  _.orderBy(this.state.data1, ['provinceState'], ['asc'])
        // console.log(Object.values(this.state.data1.filter(e => e.provinceState == this.state.showdata).map(obj => obj.recovered)))

        const url = `https://covid19.mathdro.id/api/countries/${this.state.showdata}/`
        // console.log("showdata",`https://covid19.mathdro.id/api/countries/${this.state.showdata}/`)
        return (
            <div className="bodyColor">
                <div className="center-heading"><h1 className="fontheading">Covid-19 Tracker</h1></div>
                <div className="row placecenter">
                    {/* <div className="col-2 alignselfcenter">
                    <h5 className="mb-0 placeend">Select Your Country</h5>
                    </div> */}
                    <div className="col-8 col-md-3">
                    <select className="custom-select font-select" value={this.state.showdata} onChange={this.handleShowdata}>
                      <option value="select" placeholder="select any" selected>Select Any one country</option>
                      {this.state.data2.map((obj) =>
                          <option key={obj.name}>{obj.name}</option>
                          )}
                    </select>
                    </div>

                </div>
                <div className="countryShow"> <h2>Cases in {this.state.showdata}</h2> </div>
                
                <Card url={url}/>
                <div className="countryShow"> <h2>Graph View OF Covid-19</h2> </div>

                {/* <div style={{ height:"800px", width:"100%"}} className="chartWrapper">
                <Bar data={this.setChart} options={{ maintainAspectRatio: false, responsive: true, legend: { labels: {fontColor: "white",fontSize: 15}} }}  />
                </div> */}

                <div className="chartWrapper">
                    <div className="chartContainer">
                <Bar data={this.setChart} options={{ maintainAspectRatio: false, responsive: true, legend: { labels: {fontColor: "white",fontSize: 15}},  }}  />
                    </div>
                </div>
                <div className="chartWrapper">
                    <div className="chartContainer">
                <Line data={this.setChart} options={{ maintainAspectRatio: false, responsive: true, legend: { labels: {fontColor: "white",fontSize: 15}} }}  />
                    </div>
                </div>

                <div className="countryShow"> <h2>Table View OF Covid-19</h2> </div>

                <Table showData={this.state.showdata} data1={this.state.data1}/>
              </div>
        )
    }
}

export default Body
