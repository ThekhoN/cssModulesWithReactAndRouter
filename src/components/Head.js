import React, {Component} from 'react'

export default class Head extends Component {
  render() {
    return (
      <head>
        <title>{this.props.title}</title>
      </head>
    )
  }
}
