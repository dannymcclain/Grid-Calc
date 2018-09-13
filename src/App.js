import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxWidth: 1280,
      gutter: 40,
      columns: 12
    };

    this.setMaxWidth = this.setMaxWidth.bind(this);
    this.setGutter = this.setGutter.bind(this);
    this.setColumns = this.setColumns.bind(this);
  }

  getColumnWidth = () => {
    return Math.floor(
      (this.state.maxWidth - (this.state.columns - 1) * this.state.gutter) /
        this.state.columns
    );
  };

  getGridWidth = () => {
    const colWidth = this.getColumnWidth();
    return (
      colWidth * this.state.columns +
      (this.state.columns - 1) * this.state.gutter
    );
  };

  renderGrid = () => {
    return [...Array(this.state.columns)].map((_, index, current) => {
      const isLastItem = current.length - 1 <= index;
      const columnWidth = this.getColumnWidth();
      const count = index + 1;
      return (
        <React.Fragment key={count}>
          <div
            className="column"
            style={{ width: columnWidth }}
            key={'Column ' + count}
          />
          {!isLastItem && (
            <div
              className="gutter"
              style={{ width: this.state.gutter }}
              key={'Gutter ' + count}
            />
          )}
        </React.Fragment>
      );
    });
  };
  setMaxWidth(event) {
    this.setState({ maxWidth: parseInt(event.target.value, 10) || 0 });
  }
  setGutter(event) {
    this.setState({ gutter: parseInt(event.target.value, 10) || 0 });
  }
  setColumns(event) {
    this.setState({ columns: parseInt(event.target.value, 10) || 1 });
  }

  render() {
    return (
      <div className="container">
        <h1>Grid Calc</h1>
        <div className="grid-values">
          <div className="grid-input px-suffix">
            <label for="max-grid">Width (px)</label>
            <input
              type="number"
              className="max-width"
              id="max-grid"
              value={this.state.maxWidth}
              onChange={this.setMaxWidth}
              min={1}
            />
          </div>

          <div className="grid-input px-suffix">
            <label>Gutter (px)</label>
            <input
              type="number"
              className="gutter-input"
              value={this.state.gutter}
              onChange={this.setGutter}
              min={0}
            />
          </div>

          <div className="grid-input">
            <label>Columns</label>
            <input
              type="number"
              className="columns"
              value={this.state.columns}
              onChange={this.setColumns}
              min={1}
            />
          </div>
        </div>
        <div className="grid-values">
          <div className="grid-calculated">
            <p className="column-width-value">
              Column width: {this.getColumnWidth()}
              px
            </p>
          </div>
          <div className="grid-calculated">
            <p
              className={` grid-width-value ${
                this.getGridWidth() !== this.state.maxWidth ? 'not-exact' : ''
              }`}
            >
              Grid width: {this.getGridWidth()}
              px
            </p>
          </div>
        </div>

        <div className="grid">{this.renderGrid()}</div>
      </div>
    );
  }
}

export default App;
