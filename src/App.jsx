import React, { Component } from 'react'
import Top from './Top'
import Navbar from './Navbar'
import Left from './Left'
import Image from './img/IMAGE.png'

export default class App extends Component {
  render() {
    return (
      <div>
        <Top/>
        <Navbar/>
        <div className="main">
          <Left/>
          <img className='image' src={Image} alt="" />
        </div>
      </div>
    )
  }
}
