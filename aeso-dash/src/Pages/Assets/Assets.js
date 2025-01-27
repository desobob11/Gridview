import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import {ResponsiveLine} from '@nivo/line'
import './Assets.css'
import Navbar from '../../Components/Navbar/Navbar';
import Fig_PoolPrice from '../../Components/Fig_PoolPrice';


export default function Assets() {



  const [today, setToday] = useState(new Date().toLocaleDateString('fr-CA', 'America/Calgary'))
  const [assetListData, setAssetListData] = useState([])


  useEffect(() => {
      setAssetListData();
  }, [,today]);


    const assetList = () => {
      const options = {
          method: "GET",
          headers: { "Content-Type": "application/json"},
      };
      fetch(`https://apimgw.aeso.ca/public/assetlist-api/v1/assetlist`, options)
        .then(response => response.json())
        .then(result => {
              setPoolPriceData([{id: "asset_ID", data: result["data"]}])
        });
  }

    return (
        <div class="default-container">
            <Navbar/>
 
            <div class="aeso-base-div"> 

            <div class="standard-textbox-left">

                <h1 class="text-header">Alberta's Energy Assets</h1>
                <h1 class="text-standard">
                    This page contains a glossary of generator data.
                    <p/>
                   Each box below summarizes the current generation data for each registered energy generation asset.
                    <p/>

                </h1>
            </div>
          
            </div>
        </div>
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