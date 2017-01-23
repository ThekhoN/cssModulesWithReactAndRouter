import React, {Component} from 'react'
import Head from '../components/Head'
import Button from '../components/Button/Button'

export default class Home extends Component {
  render(){
    return (
      <div>
        <h1>Home page</h1>
        <p>This is a home page</p>
        <Button text="A CSS Module styled Button!!!"/>
      </div>
    )
  }
}
