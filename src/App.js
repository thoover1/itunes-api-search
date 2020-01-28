import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputField: "",
      results: []
    };
    this.getResults = this.getResults.bind(this);
  }

  componentDidMount() {
    this.getResults();
  }

  async getResults() {
    await fetch(
      `https://itunes.apple.com/search?media=music&entity=song&term=${this.state.inputField}&limit=3`
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          results: json.results
        })
      )
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({
      inputField: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getResults();
  }

  render() {
    let mappedResults = this.state.results;
    return (
      <div className="App">
        <header className="App-header">
          <h1>iTunes Finder</h1>
        </header>
        <section className="search-bar">
          <form className="form" id="search-song-form">
            <input
              placeholder="Search.."
              className="input"
              type="text"
              onChange={e => this.handleChange(e)}
            ></input>
            <button className="button" onClick={e => this.handleSubmit(e)}>
              Submit
            </button>
          </form>
        </section>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album Name</th>
            </tr>
          </thead>
          <tbody>
            {mappedResults.map(resultsMap => {
              return (
                <tr id={resultsMap}>
                  <td>{resultsMap.trackName}</td>
                  <td>{resultsMap.artistName}</td>
                  <td>{resultsMap.collectionName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
