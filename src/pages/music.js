import React, { Component } from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import CardMusic from "../components/card-music";

// App
export default class MusicPage extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    this.getMusic();
  }
  getMusic() {
    fetch("http://127.0.0.1:8000/api/music-player/")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results.results }));
  }

  render() {
    return (
      <>
      <br />
      <CardMusic />
        <div className = "" >    
          <ReactJkMusicPlayer audioLists = {this.state.items} autoPlay = {false} mode = "full"
          showMediaSession />     
        </div>
      </>
    );
  }
}