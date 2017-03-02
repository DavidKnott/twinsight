import React from 'react';
import TweetSearch from './tweet_topic_search';
import ReactMapboxGl, {  GeoJSONLayer  } from "react-mapbox-gl";
import cookie from 'react-cookie';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {geo_tweets: [], topic: "clinton"};
    cookie.save('topic', this.state.topic, { path: '/' });
  }

  componentDidMount() {
    this.TweetList();
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  changeTopic(topic) {
    this.setState({topic: topic });
    cookie.save('topic', topic, { path: '/' });
    this.sleep(2000).then(()=> {
      this.setState({ geo_tweets: [] });
      this.TweetList();
    });
  }

  TweetList() {
      var topic_param = "?q=";
      topic_param += this.state.topic;
    return fetch("/tweets/" + topic_param)
      .then(function(response) { return response.json(); })
      .then((json) => {
        this.setState({geo_tweets: (this.state.geo_tweets.concat(json.geo_tweets)).slice(0,3000)});
        this.sleep(3000).then(() => {
          this.TweetList();
          });
      });
  }
  render(){
    const data={"type": "FeatureCollection", "features": this.state.geo_tweets};

    return (
    <div className="col-md-12" >
      <div className="col-md-8 col-md-offset-2">
        <TweetSearch onSubmit={(topic) => this.changeTopic(topic) } current_topic={cookie.load('topic')} />
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
    </div>
    );
  }
}

export default Map;
