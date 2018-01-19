var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return (
        <h2>It's {temp} in {location}</h2>
    );
  }
});


module.exports = WeatherMessage;
