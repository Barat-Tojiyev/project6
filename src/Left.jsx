import React, { Component } from 'react'

export default class Left extends Component {
  render() {
    return (
      <div className='left'>
        <h1>If you can dream it, you can sell it with Shopify</h1>
        <h4>Build your business here. Take it anywhere.</h4>
        <div>
        <input type="email" placeholder='Email address' />
        <button className="button">Start free trial</button>
        </div>
        <p>Try Shopify free for 3 days, no credit card required. 
            By entering your email, you agree to receive
             marketing emails from Shopify.</p>
      </div>
    )
  }
}
