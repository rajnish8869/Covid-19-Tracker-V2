import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';
// import { values } from "lodash";



const Card = (props) => {
    const [cpdatas, setCpdatas] = useState([]);
    const [cpdatas1, setCpdatas1] = useState([]);
  
    useEffect(() => {
      getData(props.url1,props.url);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      /*eslint-disable*/
    }, [props.url1,props.url]);
  console.log("url1",props.url1)
  
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
    const lastUpdates = cpdatas.lastUpdate
    const lastUpdates1 = cpdatas.lastUpdate1
    const date = Date(lastUpdates).slice(0,24)
    const date1 = Date(lastUpdates1).slice(0,24)


    if (confirmed){
        var values1 = Object.values(cpdatas.confirmed)
        var confirm = values1[0]
        var values2 = Object.values(cpdatas.recovered)
        var recover = values2[0]
        var values3 = Object.values(cpdatas.deaths)
        var death = values3[0]
        // console.log(car)

    }
    
    if(confirmed1){    
    var values4 = Object.values(cpdatas1.confirmed)
    var confirm1 = values4[0]
    var values5 = Object.values(cpdatas1.recovered)
    var recover1 = values5[0]
    var values6 = Object.values(cpdatas1.deaths)
    var death1 = values6[0]
    // console.log("value4",confirm1)
    }

    // console.log("lastUpdate",cpdatas.lastUpdates)
    // console.log("lastUpdate1",cpdatas.lastUpdates1)
        return (
            <div>
                {
                props.showData == 0 ?
                <div class="card-group margin-card">
                    <div class="card green">
                        <div class="card-body ">
                        <h5 class="card-title ">Recovered - {recover1}</h5>
                        <h5 class="card-title "></h5>
                        <p class="card-text">Magic always happens when you direct your inner powers to the object you want to change.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date1}</p>
                        </div>
                    </div>
                    <div class="card red">
                        <div class="card-body ">
                        <h5 class="card-title">Deaths - {death1}</h5>
                        {/* <h5 class="card-title"></h5> */}
                        <p class="card-text">What a great loss to the world. She/he will be missed by so many.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date1}</p>
                        </div>
                    </div>
                    <div class="card yellow">
                        <div class="card-body ">
                        <h5 class="card-title">Infected - {confirm1}</h5>
                        <h5 class="card-title"></h5>
                        <p class="card-text">Don't lose hope. When the sun goes down, the stars come out.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date1}</p>
                        </div>
                    </div>
                </div>
                :
                <div class="card-group margin-card">
                    <div class="card green">
                        <div class="card-body ">
                        <h5 class="card-title ">Recovered - {recover}</h5>
                        <h5 class="card-title "></h5>
                        <p class="card-text">Magic always happens when you direct your inner powers to the object you want to change.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date}</p>
                        </div>
                    </div>
                    <div class="card red">
                        <div class="card-body ">
                        <h5 class="card-title">Deaths - {death}</h5>
                        {/* <h5 class="card-title"></h5> */}
                        <p class="card-text">What a great loss to the world. She/he will be missed by so many.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date}</p>
                        </div>
                    </div>
                    <div class="card yellow">
                        <div class="card-body ">
                        <h5 class="card-title">Infected - {confirm}</h5>
                        <h5 class="card-title"></h5>
                        <p class="card-text">Don't lose hope. When the sun goes down, the stars come out.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date}</p>
                        </div>
                    </div>
                </div>}
            </div>
        )
    
}

export default Card