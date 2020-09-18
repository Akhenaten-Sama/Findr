import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from      '../util/Yelp'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/Navbar';
import CardPanel from '../Card Panel/Card-Panel';
import Carousel from '../Carousel/Carousel';
import M from 'materialize-css/dist/js/materialize'






class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: [],
      error:false
    };
    this.searchYelp = this.searchYelp.bind(this);

  }


  componentDidMount(){
    const slider = document.querySelector('.slider')
    M.Slider.init(slider,{
      height:500,
      transition:500,
      interval:4000,
      indicators: false

    });
  }
  
  
  searchYelp(term, location, sortBy) {
    try {
      Yelp.search(term, location, sortBy).then((businesses) =>{
        this.setState({businesses: businesses})
      });
    } catch (error) {
      this.setState({error:true})
      console.log(error)
    }
    
  }
  
  
      render() {
        return (<div>
      <div class="App">
        <Navbar />
        <Carousel />
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList state={this.state} />
        <CardPanel />
        <Footer />


      </div>
    </div>
    )
  }

}


export default App;
