import React from 'react'
import '../App.css';
      // eslint-disable-next-line react-hooks/exhaustive-deps
      /*eslint-disable*/

export default function Table(props) {
    // console.log("table",Object.values(props.data1.filter(e => e.countryRegion == props.showData).map(obj => obj.recovered)))
    // console.log("table",Object.values(props.data1.filter(e => e.countryRegion == props.showData).map(obj => obj.deaths)))
    // console.log("table",Object.values(props.data1.filter(e => e.countryRegion == props.showData).map(obj => obj.active)))
    // console.log("table1",Object.values(props.data4.map(obj => obj.totalConfirmed)))
    // console.log("table1",Object.values(props.data4.map(obj => obj.deaths.total)))
    // console.log("table1",Object.values(props.data4.map(obj => obj.reportDate)))
    // console.log("table1",Object.values(props.data1.filter(e => e.countryRegion == props.showData).map(obj => obj.provinceState != null ? obj.provinceState : obj.countryRegion )))
    return (
        <div className="bodyColor">
          { props.showData == 0 ?
            <table className="width100" cellpadding = "5" cellspacing = "5">
                <tr>
                    <th>Date</th>
                    <th>Total Cases</th> 
                    <th>Deaths</th>
                </tr>
                {Object.values(props.data4.map(obj =>
                <tr>
                    <th> {obj.reportDate}</th>
                    <th> {obj.totalConfirmed}</th>
                    <th> {obj.deaths.total}</th>
                </tr>
                ))}
            </table>

            :

            <table className="width100" cellpadding = "5" cellspacing = "5">
                <tr>
                    <th>Country Name</th>
                    <th>Recovered</th> 
                    <th>Infected</th>
                    <th>Deaths</th>
                </tr>
                {Object.values(props.data1.filter(e => e.countryRegion == props.showData).map(obj =>
                <tr>
                    <th> {obj.provinceState}</th>
                    <th> {obj.recovered}</th>
                    <th> {obj.deaths}</th>
                    <th> {obj.active}</th>
                </tr>
                ))}
            </table>
            }
        </div>
    )
}
