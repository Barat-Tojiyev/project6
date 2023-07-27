import React, { Component } from 'react'
import Logo from './img/logo.png'
import Down from './img/down.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="wrapper">
        <img src={Logo} alt="" />
        <ul className='nav'>
            <li>Start <img src={Down} alt="#"/></li>
            <li>Sell<img src={Down} alt="#"/></li>
            <li>Market<img src={Down} alt="#"/></li>
            <li>Manage<img src={Down} alt="#"/></li>
        </ul>
        </div>
        <div className="wrapper">
        <ul className='nav'>
            <li>Pricing</li>
            <li>Learn <img src={Down} alt="#"/></li>
            <li>Log in</li>           
        </ul>
        <button className="button">Start free trial</button>
        </div>
        </div>
    )
  }
}
