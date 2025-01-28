import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import {ResponsiveLine} from '@nivo/line'

import Navbar from '../../Components/tail_Navbar/tail_Navbar';
import Fig_PoolPrice from '../../Components/Fig_PoolPrice';
import { TicketIcon } from '@heroicons/react/24/outline';


function Ticker(props) {
  return (
    <div className="w-2xl">
      <div className="text-3xl text-center font-sans text-gray-900">
      {props.title}
      </div>
      <div className={`text-3xl text-center  font-sans ${props.color}`}>
        {props.text}
      </div>
    </div>

  );
}


function FuelTypeCard(props) {
  return (
    <div className="shrink w-fit h-128 shadow rounded-xl">
      <div className="text-3xl text-center font-sans text-gray-900">
      {props.fuelType}
      </div>
      <div className={"p-8 align-center content-center grid grid-cols-2 gap-4 text-2xl text-center font-sans"}>
        <div className="h-fit  text-xl">
        Max Capability:
        </div>
        <div className="  h-fit text-xl text-blue-800">
        {props.maxCap}MW
        </div>
        <div className="h-fit text-xl">
        Net Generation:
        </div>
        <div className=" h-fit text-xl text-blue-800">
        {props.netGen}MW
        </div>
        <div className="h-fit text-xl">
        Dispatched Contingency Reserve:
        </div>
        <div className=" h-fit text-xl text-blue-800">
        {props.maxCap}MW
        </div>

      </div>
    </div>

  );
}

export default function SupplyDemand() {

    var supplyDemandData = {};

    const [tickerList, setTickerList] = useState([]);

    const tickers = {"total_net_generation": "Net Generation",
                    "net_to_grid_generation": "Net-to-Grid",
                    "net_actual_interchange": "Net Interchange",
                    "alberta_internal_load": "Alberta Internal Load"
    };

    useEffect(() => {
      if (Object.keys(supplyDemandData).length == 0) {
        currentSupplyDemand()
      }

    }, []);


    const cacheData = (data) => {
      supplyDemandData = data;
    }

    const loadTickers = () => {
      let temp = []
      for (const [key, value] of Object.entries(supplyDemandData)) {
        if (tickers[key] != null) {

        
        temp.push(
          <Ticker title={tickers[key]} text={`${value} MW`} color="text-blue-800"/>
        )
      }
      }
      setTickerList(temp);
    }



    const currentSupplyDemand = () => {
      const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
      };
      fetch(`http://127.0.0.1:8080/current_supply_demand/`, options)
          .then(response => response.json())
          .then(result => {
            cacheData((result["data"]));
            loadTickers();
          });


  }
    return (
       <>
     
                 <Navbar />
                 <div className="font-sans min-h-full">
     
     
                     <header className="mt-16 w-full fixed bg-white shadow">
                         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                             <h1 className="grid grid-cols-4 gap-4 text-4xl font-bold tracking-tight text-gray-900">
                              {tickerList}
                             </h1>
                         </div>
                     </header>
                     <main>
                         <div className="flex mt-16 grid grid-cols-3 gap-32 p-32 text-2xl font-bold text-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                              <FuelTypeCard fuelType="Cogeneration" text="Text" color="text-blue-800"/>
                             </div>

                     </main>
                 </div>
             </>
    );

}

/*

   <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item">Pool Price</a></li>
            <li><a class="dropdown-item">Assets</a></li>
            <li><a class="dropdown-item">Something else here</a></li>
          </ul>
        </li>
*/