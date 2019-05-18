import React from 'react';
import axios from 'axios';
import Template from './Template';

class ThingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting... (you dirty dawg)');
    axios.get('/api/things').then(things => this.setState({ things: things.data }));
  }

  render() {
    return (
      <main>
        <h1><strong>Does Matt like it?</strong></h1>
        <div className="index-container">
          {this.state.things
            ?
            this.state.things.map(thing => <Template key={thing._id} thing={thing}/>)
            :
            <p>loading...</p>
          }
        </div>
      </main>
    );
  }
}

export default ThingIndex;
