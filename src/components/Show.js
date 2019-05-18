import React from 'react';
import axios from 'axios';

class ThingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    axios.delete(`/api/things/${this.state.thing._id}`)
      .then(() => this.props.history.push('/things/'));
  }

  componentDidMount() {
    axios.get(`/api/things/${this.props.match.params.id}`)
      .then(result => this.setState({ thing: result.data }));
  }

  render() {
    const thing = this.state.thing;
    return (
      <main>
        {thing
          ?
          <section>
            <h1>{thing.item}</h1>
            <img src={thing.image} />
            <button onClick={this.handleDelete}>Delete</button>
            {thing.heLikesIt ? <p>Matt likes it</p> :  <p>Matt hates it</p>}
          </section>
          :
          <p>Waiting...</p>

        }
      </main>
    );
  }
}

export default ThingShow;
