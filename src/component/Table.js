import React from "react";
import "../App.css";

/* eslint-disable */

export default function Table(props) {
  return (
    <div className="bodyColor">
      {props.showData == 0 ? (
        <table className="width100" cellPadding="5" cellSpacing="5">
          <thead >
            <tr className="sticky">
              <th>Date</th>
              <th>Total Cases</th>
              <th>Deaths</th>
            </tr>
          </thead>
          {Object.values(
            props.data4.map((obj) => (
              <tbody key={obj.reportDate}>
                <tr>
                  <th> {obj.reportDate}</th>
                  <th> {obj.totalConfirmed}</th>
                  <th> {obj.deaths.total}</th>
                </tr>
              </tbody>
            ))
          )}
        </table>
      ) : (
        <table className="width100" cellPadding="5" cellSpacing="5">
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Recovered</th>
              <th>Infected</th>
              <th>Deaths</th>
            </tr>
          </thead>
          {Object.values(
            props.data1
              .filter((e) => e.countryRegion == props.showData)
              .map((obj) => (
                <tbody key={obj.uid}>
                  <tr>
                    <th> {obj.provinceState}</th>
                    <th> {obj.recovered}</th>
                    <th> {obj.deaths}</th>
                    <th> {obj.active}</th>
                  </tr>
                </tbody>
              ))
          )}
        </table>
      )}
    </div>
  );
}
