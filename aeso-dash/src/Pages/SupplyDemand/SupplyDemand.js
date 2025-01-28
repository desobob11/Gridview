import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line'

import Navbar from '../../Components/tail_Navbar/tail_Navbar';
import Fig_PoolPrice from '../../Components/Fig_PoolPrice';
import { TicketIcon } from '@heroicons/react/24/outline';


function Ticker(props) {
  return (
    <div className="w-2xl">
      <div className="text-3xl text-center font-sans text-gray-900">
        {props.title}
      </div>
      <div className={`flex justify-center text-3xl text-center  font-sans ${props.color}`}>
        {props.text}
      </div>
    </div>

  );
}


function FuelTypeCard(props) {
  // if (props.loaded) {
  return (
    <div className="shrink w-90 h-128 shadow rounded-xl">
      <div className="flex justify-center text-3xl text-center font-sans text-gray-900">
        {props.fuelType}
      </div>
      <div className={"p-8 flex justify-center align-center  grid grid-cols-2 gap-4 text-2xl text-center font-sans"}>
        <div className="h-fit  text-xl">
          Max Capability:
        </div>
        <div className="  h-fit text-xl text-gray-900">
          {props.maxCap}
        </div>
        <div className="h-fit text-xl">
          Net Generation:
        </div>
        <div className=" h-fit text-xl text-gray-900">
          {props.netGen}
        </div>
        <div className="h-fit text-xl">
          Dispatched Contingency Reserve:
        </div>
        <div className=" h-fit text-xl text-gray-900">
          {props.conting}
        </div>

      </div>
    </div>

  );
  // }
  // else {
  //   return (
  //     <div className="flex justify-center align-middle shadow rounded-xl">
  //      <div className={"h-64 text-2xl text-center font-sans"}>
  //          <LoadingWheel height={16} width={16}/>
  //      </div>
  //    </div>

  //  );

  //}

}

function LoadingWheel(props) {
  return (


    <div role="status">
      <svg aria-hidden="true" className={` w-${props.width} h-${props.height} text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>


  );
}

export default function SupplyDemand() {

  var supplyDemandData = {};



  const tickers = {
    "alberta_internal_load": "Alberta Internal Load",
    "net_actual_interchange": "Net Interchange",
    "net_to_grid_generation": "Net-to-Grid",
    "total_net_generation": "Net Generation"
  };

  const fuelCards = {
    "aggregated_maximum_capability": "Max capability",
    "aggregated_net_generation": "Net Generation",
    "aggregated_dispatched_contingency_reserve": "Dispatched Contingency Reserve"
  }

  const [tickerList, setTickerList] = useState(
    Object.values(tickers).map(x => <Ticker title={x} text={<LoadingWheel width={8} height={8} />} />)

  );

  const [fuelCardList, setFuelCards] = useState([]);


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
          <Ticker title={tickers[key]} text={`${value} MW`} color="text-blue-800" />
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


        <header className=" w-full bg-white shadow">
          <div className=" h-32 w-full px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="grid grid-cols-4 gap-4 text-4xl font-bold tracking-tight text-gray-900">
              {tickerList}
            </h1>
          </div>
        </header>
        <main>
          {fuelCardList.length === 0 ? <div className="flex mt-16 justify-center align-middle p-32 text-2xl font-bold text-gray-900 px-4 py-6 sm:px-6 lg:px-8">
            {fuelCardList.length === 0 ? <LoadingWheel height={32} width={32} /> : fuelCardList}
          </div> :
            <div className="flex mt-16 grid grid-cols-3 gap-32 p-32 text-2xl font-bold text-gray-900 px-4 py-6 sm:px-6 lg:px-8">
              {fuelCardList}
            </div>}

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