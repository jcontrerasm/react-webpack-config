import React, { Component } from 'react';

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>{this.props.name}</div>
    );
  }
}
