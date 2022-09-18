import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super();
        this.state = [ {label: 'aaa', value: 1}, {label: 'bbb', value: 2}, {label: 'ccc', value: 3}  ]
    }
  render() {
    return (
      <div>
        <p>{this.state.map(option => option.label)}</p>
      </div>
    )
  }
}
