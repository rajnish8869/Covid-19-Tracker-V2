import React, { useEffect, useState } from "react";
import "../App.css";

export default function Table_1(props) {
  return (
    <div className="bodyColor">
      {props.showData == 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Cases</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(
              props.data4.map((obj) => (
                <tr>
                  <th> {obj.reportDate}</th>
                  <th> {obj.totalConfirmed}</th>
                  <th> {obj.deaths.total}</th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <table >
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Recovered</th>
              <th>Infected</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(
              props.data1
                .filter((e) => e.countryRegion == props.showData)
                .map((obj) => (
                  <tr>
                    <th> {obj.provinceState}</th>
                    <th> {obj.recovered}</th>
                    <th> {obj.deaths}</th>
                    <th> {obj.active}</th>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
