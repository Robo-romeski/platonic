import React, { Component } from 'react'
import Features from './features/features'
import Hero from './hero/hero'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Hero/>
        <Features/>
        Home. Not Protected. Anyone can see this.
      </div>
    )
  }
}