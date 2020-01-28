import React from "react";
import ResultsMap from "./ResultsMap";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputField: "",
      results: []
      // ,
      // isLoading: false
    };
    this.getResults = this.getResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
          results: json.results
        })
      );
  }

  handleChange(e) {
    this.setState({
      inputField: e.target.value
    });
    this.getResults();
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.getResults();
  // }

  // searching = e => {
  //   this.setState({ filterer: e.target.value.substr(0, 20) });
  // };
  render() {
    console.log("state", this.state.results);
    console.log("input", this.state.inputField);
    let mappedResults = this.state.results;
    // if (!mappedResults.length) {
    //   return (
    //     <div className="App">
    //       <h1>iTunes Finder</h1>
    //       <input
    //         placeholder="Song Search.."
    //         className="input"
    //         type="text"
    //         onChange={e => this.handleChange(e)}
    //       ></input>
    //     </div>
    //   );
    // }
    return (
      <div className="App">
        <header className="App-header">
          <h1>iTunes Finder</h1>
        </header>
        <section className="search-bar">
          {/* <form className="form" id="search-song-form"> */}
          <input
            placeholder="Song Search.."
            className="input"
            type="text"
            onChange={e => this.handleChange(e)}
          ></input>
          {/* <button className="button" onClick={this.handleSubmit}>
              Submit
            </button> */}
          {/* </form> */}
        </section>
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
            {mappedResults.map(resultsMapToComponent => {
              return (
                <ResultsMap resultsMapToComponent={resultsMapToComponent} />
              );
            })}
          </tbody>
          {/* map above here */}
        </table>
      </div>
    );
  }
}
