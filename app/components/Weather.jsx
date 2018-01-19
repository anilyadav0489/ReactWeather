var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return ({
      isLoading: false
    });
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});


    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({isLoading:false});
      alert(err);
    });

  },
  render: function(){

    var {isLoading, temp, location} = this.state;
    console.log('[isLoading: '+isLoading+'] [temp: '+this.state.temp + '] [location'+ this.state.location+']');
    debugger;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching data...</h3>;
      }else if(temp, location){
        return <WeatherMessage temp={temp} location = {location} />;
      }

    };
    return (
      <div>
        <h2>Weather component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
