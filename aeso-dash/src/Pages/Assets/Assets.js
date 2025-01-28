import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import {ResponsiveLine} from '@nivo/line'
import './Assets.css'
import Navbar from '../../Components/tail_Navbar/tail_Navbar';
import Fig_PoolPrice from '../../Components/Fig_PoolPrice';
import DataTable from '../../Components/Data_Table/Data_Table';


export default function Assets() {



  const [today, setToday] = useState(new Date().toLocaleDateString('fr-CA', 'America/Calgary'))
  const [assetListData, setAssetListData] = useState([])
  // make an array that contains the columns for the table
  const columns = [{ field: 'asset_ID', headerName: 'ID', width: 90 }
    ,{ field: 'asset_type', headerName: 'Type', width: 150 }
    ,{ field: 'pool_participant_ID', headerName: 'Pool Participant ID', width: 150 }
    ,{ field: 'operating_status', headerName: 'Operating Status', width: 150 }]


  useEffect(() => {
      getAssetList();
  }, [,today]);


  const getAssetList = () => {
    const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    fetch(`http://127.0.0.1:8080/assetList/`, options)
        .then(response => response.json())
        .then(result => {
            console.log(result); // Log the result to inspect the data structure
            if (result) {
                setAssetListData(result); // Ensure the data is set correctly
            } else {
                console.error("Unexpected data format:", result);
            }
        });
};

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
            <DataTable rows={assetListData} columns={columns} />
          
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