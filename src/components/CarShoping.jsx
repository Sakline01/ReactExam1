import React from 'react';
import axios from "axios"
import { useState, useEffect } from "react";

const Carshoping = () => {
    const [cardata, setcardata] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/cars')
  .then(response=>{
    // handle success
    setcardata(...cardata,response.data)
    console.log(response.data)
  })
  .catch(function (error) {
    // handle error
  })
    },[]);
    return (
        <div className="flex" >
            {cardata.map((item)=>
                <div className="card" key={item.id}>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.type}</p>
                        <h4>{item.price}</h4>
                        <button>Order</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carshoping;

