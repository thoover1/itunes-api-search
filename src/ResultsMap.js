import React, { Component } from "react";

export default class ResultsMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <tr id={this.props.resultsMapToComponent}>
          <td>{this.props.resultsMapToComponent.trackName}</td>
          <td>{this.props.resultsMapToComponent.artistName}</td>
          <td>{this.props.resultsMapToComponent.collectionName}</td>
        </tr>
      </div>
    );
  }
}
