var React = require('react');
require('./logo.svg');
require('./App.css');

var TourTileContainer = require('./Component/TourTileContainer');
var TopTileContainer = require('./Component/TopTileContainer');
var ChooseUsContainer = require('./Component/ChooseUsContainer');
var Footer = require('./Component/Footer');
var Navigation = require('./Component/Navigation');
var AppSlider = require('./Component/AppSlider');
var dara_provider = require('./Util/data_provider');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    var data = dara_provider.getData();

    this.setState(function() {
      return {
        data: data
      }
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navigation />
        </div>
        <div id='Top'>
          {!this.state.data
            ? <p>LOADING</p>
            :<AppSlider Sliders={this.state.data.Sliders}/>}
        </div>
        <div id='TopTileBar' className='pixel_50'></div>
        <div id='TopTile'>
          {!this.state.data
            ? <p>LOADING</p>
            :<TopTileContainer Tops={this.state.data.Tops}/>}
        </div>
        <div id='ChooseUsBar' className='pixel_50'></div>
        <div id='ChooseUs' className='container_wrap_box'>
          {!this.state.data
            ? <p>LOADING</p>
            :<ChooseUsContainer Choices={this.state.data.Choices}/>}
        </div>
        <div id='TourTileBar' className='pixel_50'></div>
        <div id='TourTile'>
          {!this.state.data
            ? <p>LOADING</p>
            :<TourTileContainer Tours={this.state.data.Tours}/>}
        </div>
        <div className='footer_wrap_box background-main'>
          {!this.state.data
            ? <p>LOADING</p>
            :<Footer Data={this.state.data.Footer} />}
        </div>
      </div>
    );
  }
}

module.exports = App;
