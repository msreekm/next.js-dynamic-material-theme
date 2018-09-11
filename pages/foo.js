import React from 'react';
import Link from 'next/link';

class foo extends React.Component {
 

    render() {
      return (<div><h1>Hello, {this.props.name}</h1>;
      <Link href="/bar">
        <a>Go to the bar page</a>
        </Link>
        </div> 
      )
    }
  }

  export default foo;