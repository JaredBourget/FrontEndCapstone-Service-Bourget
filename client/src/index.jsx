console.log('Hello Node.js project.');
import React from 'react';
import ReactDOM from 'react-dom';
import sampleRestaurants from '../../database/sampleData.json';
import Card from './components/card.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
  super(props) 
  this.state = {
    restaurants: []
  }
    //   name: 'THE KITCHEN',
    //   syle: "American",
    //   price: "$$$",
    //   description: "Farm-to-table American food in an urban space, plus drinks from the upstairs community bar.",
    //   rating: 4.5,
    //   img_url: "https://zagat-photos.imgix.net/ChIJbfI25Sbsa4cRMz0wQhLNRB4/b9a42b5a9b40f75163bd15ab4ae19e59.jpg?max-w=1400&auto=format",
    //   location: [40.0178, -105.2817]
    // }
  }
  handleClick (e) {
    e.preventDefault();
    console.log(e.currentTarget)
  }
  componentDidMount() {
  
    axios.get('/api/cities')
    .then(result => this.setState({
      restaurants: result.data
      
    }))
    .catch(error => this.setState({
        error
    }));
  }


  render () {
    // console.log(this.state.restaurants.data)
    return (
    <div>
      <Card restaurants={this.state.restaurants} onClick={(e) => this.handleClick(e)}/>
    </div>
    )
  }
}


ReactDOM.render(
  <App />, document.getElementById('app')
);