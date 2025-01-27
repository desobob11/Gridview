import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import {ResponsiveLine} from '@nivo/line'
import {Link} from 'react-router-dom';
import './Navbar.css'



export default function Navbar() {
    return (
        <div class='container-fluid aeso-base-navbar-container'>
        <nav class="navbar navbar-expand-lg aeso-base-navbar">
<div class="container-fluid">
<h3 class="nav-logo font-poppins-nav-logo"> AESO Dash</h3>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <Link class="nav-link-click" to="/">
    <li class="nav-item">
      <a class="nav-link" aria-current="page">Home</a>
    </li>
    </Link>
    <li class="nav-item">
      <a class="nav-link" aria-current="page">Series</a>
    </li>


    <Link class="nav-link-click" to="/assets">
    <li class="nav-item">
      <a class="nav-link">Assets
        </a>
    </li>

      </Link>
  </ul>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</div>
</div>
</nav>
   


</div>
    );
}