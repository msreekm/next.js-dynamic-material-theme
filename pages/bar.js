import React from 'react';

class Bar extends React.Component {
    constructor(props) {
        super(props);
        //console.log('Bar Constructor' , props);
    }
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  export default Bar;