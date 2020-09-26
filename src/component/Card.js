import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';


const Card = (props) => {
    const [cpdatas, setCpdatas] = useState([]);
    // const [messages, setMessages] = useState([]);
    // const [showdata, setShowdata] = useState([]);
  
    useEffect(() => {
      getData(props.url);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      // /*eslint-disable*/
    }, [props.url]);
  console.log("url",props.url)
  
    const getData = async () => {
      
        const res = await axios.get(
  
          props.url
          
        )
    
        setCpdatas(res.data)
    }
    
    const confirmed = cpdatas.confirmed
    const lastUpdate = cpdatas.lastUpdate
    const date = Date(lastUpdate).slice(0,24)


    if (confirmed){
        var values1 = Object.values(cpdatas.confirmed)
        var confirm = values1[0]
        var values2 = Object.values(cpdatas.recovered)
        var recover = values2[0]
        var values3 = Object.values(cpdatas.deaths)
        var death = values3[0]
        // console.log(car)

    }


        return (
            <div>
                <div class="card-group margin-card">
                    <div class="card green">
                        <div class="card-body ">
                        <h5 class="card-title ">Recovered</h5>
                        <h5 class="card-title ">{recover}</h5>
                        <p class="card-text">Magic always happens when you direct your inner powers to the object you want to change.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date}</p>
                        </div>
                    </div>
                    <div class="card red">
                        <div class="card-body ">
                        <h5 class="card-title">Deaths</h5>
                        <h5 class="card-title">{death}</h5>
                        <p class="card-text">What a great loss to the world. She/he will be missed by so many.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date}</p>
                        </div>
                    </div>
                    <div class="card yellow">
                        <div class="card-body ">
                        <h5 class="card-title">Infected</h5>
                        <h5 class="card-title">{confirm}</h5>
                        <p class="card-text">Don't lose hope. When the sun goes down, the stars come out.</p>
                        </div>
                        <div class="card-footer">
                        <p >{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Card