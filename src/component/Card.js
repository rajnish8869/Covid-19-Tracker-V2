import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';
      /* eslint-disable */


const Card = (props) => {
    const [cpdatas, setCpdatas] = useState([]);
    const [cpdatas1, setCpdatas1] = useState([]);
  
    useEffect(() => {
      getData(props.url1,props.url);

    }, [props.url1,props.url]);
  
    const getData = async () => {

        const res1 = await axios.get(
  
            props.url1
            
          )
        
          setCpdatas1(res1.data)

        const res = await axios.get(
  
          props.url
          
        )
    
        setCpdatas(res.data)
        
    }
    
    const confirmed = cpdatas.confirmed
    const confirmed1 = cpdatas1.confirmed
    // const lastUpdates = Object.values(cpdatas.lastUpdate)
    // const date = Date(lastUpdates).slice(0,24)
    


    if (confirmed){
        var values1 = Object.values(cpdatas.confirmed)
        var confirm = values1[0]
        var values2 = Object.values(cpdatas.recovered)
        var recover = values2[0]
        var values3 = Object.values(cpdatas.deaths)
        var death = values3[0]
        var lastUpdates = Object.values(cpdatas.lastUpdate)
        var lastUpdates0 = Object.values(cpdatas.lastUpdate)
        var date = lastUpdates.slice(0,10)
        var date0 = lastUpdates.slice(12,19)
        // console.log(car)

    }
    
    if(confirmed1){    
    var values4 = Object.values(cpdatas1.confirmed)
    var confirm1 = values4[0]
    var values5 = Object.values(cpdatas1.recovered)
    var recover1 = values5[0]
    var values6 = Object.values(cpdatas1.deaths)
    var death1 = values6[0]
    var lastUpdates1 = cpdatas1.lastUpdate
    var lastUpdates2 = cpdatas1.lastUpdate
    var date1 = lastUpdates1.slice(0,10)
    var date2 = lastUpdates2.slice(12,19)
    // console.log("value4",confirm1)
    }

    // console.log("lastUpdate",cpdatas.lastUpdates)
    // console.log("date1",date1)
        return (
            <div>
                {
                props.showData == 0 ?
                <div className="card-group margin-card">
                    <div className="card green">
                        <div className="card-body ">
                        <h5 className="card-title ">Recovered - {recover1}</h5>
                        <h5 className="card-title "></h5>
                        <p className="card-text">Magic always happens when you direct your inner powers to the object you want to change.</p>
                        </div>
                        <div className="card-footer">
                        <p >Last Update : {date1} {date2} UTC</p>
                        </div>
                    </div>
                    <div className="card red">
                        <div className="card-body ">
                        <h5 className="card-title">Deaths - {death1}</h5>
                        <p className="card-text">What a great loss to the world. She/he will be missed by so many.</p>
                        </div>
                        <div className="card-footer">
                        <p >Last Update : {date1} {date2} UTC</p>
                        </div>
                    </div>
                    <div className="card yellow">
                        <div className="card-body ">
                        <h5 className="card-title">Infected - {confirm1}</h5>
                        <h5 className="card-title"></h5>
                        <p className="card-text">Don't lose hope. When the sun goes down, the stars come out.</p>
                        </div>
                        <div className="card-footer">
                        <p >Last Update : {date1} {date2} UTC</p>
                        </div>
                    </div>
                </div>
                :
                <div className="card-group margin-card">
                    <div className="card green">
                        <div className="card-body ">
                        <h5 className="card-title ">Recovered - {recover}</h5>
                        <h5 className="card-title "></h5>
                        <p className="card-text">Magic always happens when you direct your inner powers to the object you want to change.</p>
                        </div>
                        <div className="card-footer">
                        <p >Last Update : {date} {date0} UTC</p>
                        </div>
                    </div>
                    <div className="card red">
                        <div className="card-body ">
                        <h5 className="card-title">Deaths - {death}</h5>
                        <p className="card-text">What a great loss to the world. She/he will be missed by so many.</p>
                        </div>
                        <div className="card-footer">
                        <p >Last Update : {date} {date0} UTC</p>
                        </div>
                    </div>
                    <div className="card yellow">
                        <div className="card-body ">
                        <h5 className="card-title">Infected - {confirm}</h5>
                        <h5 className="card-title"></h5>
                        <p className="card-text">Don't lose hope. When the sun goes down, the stars come out.</p>
                        </div>
                        <div className="card-footer">
                        <p >Last Update : {date} {date0} UTC</p>
                        </div>
                    </div>
                </div>}
            </div>
        )
    
}

export default Card