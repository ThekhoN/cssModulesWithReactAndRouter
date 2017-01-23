import React, {Component} from 'react'
import btn from './styles.css'
console.log('btn: ', btn);

var styles = {
  backgroundColor:'#f2f2f2',
  width:'100%'
}

export default class Button extends Component {
  render() {
    return (
      <div style={styles}>
        <button className={btn.red}>{this.props.text}</button>
      </div>
    )
  }
}
