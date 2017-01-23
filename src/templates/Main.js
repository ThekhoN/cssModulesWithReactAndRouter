import React, {Component} from 'react'
import Head from '../components/Head'

export default class Main extends Component {
  render(){
    return (
      <html>
        <Head title='React and CSS Modules' />
        <link rel="stylesheet" href="../build/styles.css"/>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}
