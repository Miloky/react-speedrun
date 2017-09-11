import React, { Component } from 'react';
import './style.scss';

class Wiki extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      results: null,
    };
  }

  handleChange = async (e) => {
    this.setState({ search: e.target.value });
    const response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${e.target.value}`);
    const results = await response.json();
    this.setState({ results });
  }

  render() {
    return (
      <section>
        <header className="content__heading">
          <h1>Wikipedia Viewer</h1>
        </header>
        <section className="wikisearch">
          <input className="wikisearch_input" value={this.state.search} placeholder="Type to search" onChange={this.handleChange} />
          <button className="btn-secondary">
            <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">Get Random Page</a>
          </button>
          <div>
            <h2>Results</h2>
            {(this.state.results && this.state.search && this.state.results.query) &&
              Object.entries(this.state.results.query.pages).map(entry => (
                <div>
                  <p><a href={entry[1].fullurl} target="_blank">{entry[1].title}</a></p>
                  <p>{entry[1].extract}</p>
                </div>
              ))}
          </div>
        </section>
      </section>
    );
  }
}
export default Wiki;
