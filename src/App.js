import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputField: "lover",
      results: []
    };
    this.getResults = this.getResults.bind(this);
  }
  // To search for song, concatenate inputFiled after 'term=' in URL
  // AND
  // To search for 'musicArtist', 'album', and 'song' (within music entity in URI)
  // AND
  // To search and return only the first 3 items,
  // use the following URL: https://itunes.apple.com/search?term=jack+johnson&entity=music&limit=3.

  componentDidMount() {
    this.getResults();
  }

  // componentWillUnmount() {
  // fire first before next component did mount on new search 'click/enter event'
  // }

  getResults() {
    fetch(
      `https://itunes.apple.com/search?media=music&term=${this.state.inputField}&limit=3`
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          results: json
        })
      );
  }

  // handleChange(prop, val) {
  //   this.setState({
  //     [prop]: val
  //   });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.updateTask(
  //     this.props.tasks.task_name,
  //   );
  // }

  // searching = e => {
  //   this.setState({ filterer: e.target.value.substr(0, 20) });
  // };
  render() {
    // let mappedResults;
    console.log("state", this.state.results);
    return (
      <div className="App">
        <header className="App-header">
          <h1>iTunes Finder</h1>
        </header>
        <div>
          <input></input>
          <button></button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album Name</th>
            </tr>
          </thead>
          {/* insert map below here for first three indexes of search results */}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          {/* map above here */}
        </table>
      </div>
    );
  }
}
