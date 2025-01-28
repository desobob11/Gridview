import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line'
import './Homepage.css'
//import Navbar from '../../Components/Navbar/Navbar';
import Fig_PoolPrice from '../../Components/Fig_PoolPrice';
import Fig_Treemap from '../../Components/Treemap/Fig_Treemap';
import Fig_Donut from '../../Components/Donut/Fig_Donut';
import Navbar from '../../Components/tail_Navbar/tail_Navbar';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'



export default function Homepage() {

    const [today, setToday] = useState(new Date().toLocaleDateString('fr-CA', 'America/Calgary'))
    const [poolPriceData, setPoolPriceData] = useState([])
    const [fuelGenData, setFuelGenData] = useState([])

    useEffect(() => {
        todayPoolPrice();
        currentGenByFuel();
    }, [, today]);






    const todayPoolPrice = () => {
        const options = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };
        fetch(`http://127.0.0.1:8080/poolPrice/?startDate=${today}&endDate=${today}`, options)
            .then(response => response.json())
            .then(result => {
                setPoolPriceData([{ id: "poolPrice", data: result["data"] }])
            });
    }





    const currentGenByFuel = () => {
        const options = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };
        fetch(`http://127.0.0.1:8080/current_gen_by_fuel/`, options)
            .then(response => response.json())
            .then(result => {
                setFuelGenData((result["data"]))
            });
    }

    return (
        <>
            {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-gray-100">
            <body class="h-full">
            ```
          */}
            <Navbar />
            <div className="font-sans min-h-full">


                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-1 text-2xl font-bold text-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                        <div className="fade-in-left relative top-10 left-10 size-128" >
                            <h1 >
                                AESO Dash is a general-purpose dashboarding website for public AESO data.
                                <p />
                                This site is intended to allow public users to easily access and interpet public data related to Alberta's energy markets.
                                <p />
                            </h1>
                        </div>
                        <div className="fade-in-middle right-0 text-gray-900">
                                <Fig_PoolPrice title={`Pool Price for ${today}`} startDate={today} endDate={today} figData={poolPriceData} />
                            </div>
                            <div className="fade-in-right right-0 text-gray-900">
                            <Fig_Donut title={'Current Net Generation by Fuel Type (MW)'} figData={fuelGenData} />
                            </div>
                    </div>
                </main>
            </div>
        </>
    );

    /*
        return (
    
    
    
            <div class="default-container" style={{overflowY:"hidden"}}>
                <Navbar/>
     
                <div class="aeso-base-div"> 
    
                <div class="standard-textbox-left">
    
                    <h1 class="text-header">Real-Time Energy Insights.</h1>
                    <h1 class="text-standard">
                        AESO Dash is a general-purpose dashboarding website for public AESO data.
                        <p/>
                        This site is intended to allow public users to easily access and interpet public data related to Alberta's energy markets.
                        <p/>
    
                    </h1>
                </div>
                <Fig_PoolPrice title={`Pool Price for ${today}`} startDate={today} endDate={today} figData={poolPriceData}/>
                <Fig_Donut title={'Current Net Generation by Fuel Type (MW)'} figData={fuelGenData} />
                </div>
                <div class="aeso-footer"/>
            </div>
        );
        */

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