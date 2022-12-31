import React, { useEffect ,useState } from 'react'

import './Covid.css'
const Covid = () => {
    const [data,setdata] = useState([]);
    const getCovidData = async() =>{
        try{
            const res = await fetch("htth3s://data.covid19india.org/data.json")
           
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setdata(actualdata.statewise[0])
        }
        catch(err){
            console.log();
        }
 
 
    }
    useEffect(() => {
      getCovidData();
    }, [])
    
  return (
    <> 
        <h1>
            LIVE
        </h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
     <section>
     <div class="card">
  <div class="container">
    <h2><b>COUNTRY</b></h2> 
    <h2>INDIA</h2> 
  </div>
</div>
     <div class="card">
  <div class="container">
    <h2><b>RECOVERED</b></h2> 
    <h3>{data.recovered}</h3> 
  </div>
</div>
     <div class="card">
  <div class="container">
    <h2><b>CONFIRMED</b></h2> 
    <h3>{data.confirmed}</h3> 
  </div>
</div>
     <div class="card">
  <div class="container">
    <h2><b>DEATHS</b></h2> 
    <h3>{data.deaths}</h3> 
  </div>
</div>
     <div class="card">
  <div class="container">
    <h2><b>ACTIVE</b></h2> 
    <h3>{data.active}</h3> 
  </div>
</div>
     <div class="card">
  <div class="container">
    <h2><b>UPDATE</b></h2> 
    <h3>{data.lastupdatedtime}</h3> 
  </div>
</div>


     </section>
    </>
  )
}

export default Covid