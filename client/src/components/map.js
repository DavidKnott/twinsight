import React from 'react';
import ReactMapboxGl, {  GeoJSONLayer  } from "react-mapbox-gl";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {geo_tweets: []};
  }

  componentDidMount() {
    this.TweetList();
  }


  TweetList() {
    return fetch("/tweets")
      .then(function(response) { return response.json(); })
      .then((json) => {
        this.setState({geo_tweets: this.state.geo_tweets.concat(json.geo_tweets)});
        setTimeout(this.TweetList(), 60000);
      });
  }
  render(){
    const data={"type": "FeatureCollection", "features": this.state.geo_tweets};

    return (
    <div className="col-md-8 col-md-offset-2">
      <ReactMapboxGl
  style={"mapbox://styles/mapbox/dark-v8"}
  zoom="3"
  center={[-95.7129, 37.0902]}
  accessToken="pk.eyJ1IjoiZGF2aWQxazFub3R0IiwiYSI6ImNpemVvcjBxZzFqcHAycXB4a3kwZ3Z1cHoifQ.s4LDy1vZIyzlvOw9_8yVnA"
  containerStyle={{
    height: "80vh",
    width: "100%",
  }}>,

  <GeoJSONLayer
  data={data}
  symbolLayout={{
    "text-field": "{place}",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-size": 10,
    "text-offset": [0, 0.6],
    "text-anchor": "top",
    "text-allow-overlap": true,
  }}
  symbolPaint={{
    "text-color": "white",
  }}
  circlePaint={{
    "circle-color": {
      "property" : "sentiment",
      "type" : "categorical",
      "stops": [
        ["positive", "green"],
        ["negative", "red"],
        ["neutral", "white"]
      ]
    }
  }}/>
    
</ReactMapboxGl>
</div>
    );
  }
}

export default Map;
