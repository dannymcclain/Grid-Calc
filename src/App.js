import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxWidth: 1280,
      gutter: 40,
      columns: 12,
      margin: 0
    };

    this.setMaxWidth = this.setMaxWidth.bind(this);
    this.setGutter = this.setGutter.bind(this);
    this.setColumns = this.setColumns.bind(this);
    this.setMargin = this.setMargin.bind(this);
  }

  componentDidMount() {
    this.updateGrid();
  }

  updateGrid = () => {
    const colWidth = Math.floor(
      (this.state.maxWidth -
        ((this.state.columns - 1) * this.state.gutter +
          2 * this.state.margin)) /
        this.state.columns
    );

    const gridWidth =
      colWidth * this.state.columns +
      (this.state.columns - 1) * this.state.gutter +
      2 * this.state.margin;
  };

  getColumns = () => {
    return this.state.columns;
  };

  getColumnWidth = () => {
    return Math.floor(
      (this.state.maxWidth -
        ((this.state.columns - 1) * this.state.gutter +
          2 * this.state.margin)) /
        this.state.columns
    );
  };

  getGridWidth = () => {
    const colWidth = this.getColumnWidth();
    return (
      colWidth * this.state.columns +
      (this.state.columns - 1) * this.state.gutter +
      2 * this.state.margin
    );
  };

  setMaxWidth(event) {
    this.setState({ maxWidth: parseInt(event.target.value, 10) });
  }
  setGutter(event) {
    this.setState({ gutter: parseInt(event.target.value, 10) });
  }
  setColumns(event) {
    this.setState({ columns: parseInt(event.target.value, 10) });
  }
  setMargin(event) {
    this.setState({ margin: parseInt(event.target.value, 10) });
  }

  render() {
    return (
      <div className="container">
        <div className="grid-input">
          <label>Max Width</label>
          <input
            type="number"
            className="max-width"
            value={this.state.maxWidth}
            onChange={this.setMaxWidth}
            min={0}
          />
        </div>

        <div className="grid-input">
          <label>Gutter</label>
          <input
            type="number"
            className="gutter"
            value={this.state.gutter}
            onChange={this.setGutter}
            min={0}
          />
        </div>

        <div className="grid-input">
          <label>Number of Columns</label>
          <input
            type="number"
            className="columns"
            value={this.state.columns}
            onChange={this.setColumns}
            min={0}
          />
        </div>

        <div className="grid-input">
          <label>Outside Margin</label>
          <input
            type="number"
            className="margin"
            value={this.state.margin}
            onChange={this.setMargin}
            min={0}
          />
        </div>

        <p>Columns: {this.getColumns()}</p>
        <p>Column width: {this.getColumnWidth()}</p>
        <p>
          Grid width:
          <span
            className={` grid-width ${
              this.getGridWidth() !== this.state.maxWidth ? 'red' : ''
            }`}
          >
            {this.getGridWidth()}
          </span>
        </p>
      </div>
    );
  }
}

export default App;
