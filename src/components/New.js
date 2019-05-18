import React from 'react';
import axios from 'axios';

class ThingNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    console.log('SUBMITTED');
    event.preventDefault();
    axios.post('/api/things', this.state)
      .then(() => this.props.history.push('/things'));
  }

  handleChange({ target: { name, value }}) {
    console.log('event.target.name is', event.target.name);
    console.log('this.state is ', this.state);
    this.setState({ [name]: value });
  }


  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label >What Does Matt like?</label>
          <input onChange={this.handleChange}
            value={this.state.item || ''}
            name="item"
          />
          <label >Add an Image: </label>
          <input onChange={this.handleChange}
            value={this.state.image || ''}
            name="image"
          />
          <button>Does Matt like it?</button>
        </form>
      </section>
    );
  }
}


export default ThingNew;
