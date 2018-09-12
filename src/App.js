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

    this.setState({
      columnWidth: colWidth,
      gridWidth: gridWidth
    });
  };

  setMaxWidth(event) {
    this.setState(
      { maxWidth: parseInt(event.target.value, 10) },
      this.updateGrid()
    );
  }
  setGutter(event) {
    this.setState(
      { gutter: parseInt(event.target.value, 10) },
      this.updateGrid()
    );
  }
  setColumns(event) {
    this.setState(
      { columns: parseInt(event.target.value, 10) },
      this.updateGrid()
    );
  }
  setMargin(event) {
    this.setState(
      { margin: parseInt(event.target.value, 10) },
      this.updateGrid()
    );
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
          />
        </div>

        <div className="grid-input">
          <label>Gutter</label>
          <input
            type="number"
            className="gutter"
            value={this.state.gutter}
            onChange={this.setGutter}
          />
        </div>

        <div className="grid-input">
          <label>Number of Columns</label>
          <input
            type="number"
            className="columns"
            value={this.state.columns}
            onChange={this.setColumns}
          />
        </div>

        <div className="grid-input">
          <label>Outside Margin</label>
          <input
            type="number"
            className="margin"
            value={this.state.margin}
            onChange={this.setMargin}
          />
        </div>

        <p>Columns: {this.state.columns}</p>
        <p>Column width: {this.state.columnWidth}</p>
        <p>
          Grid width:
          <span
            className={` grid-width ${
              this.state.gridWidth !== this.state.maxWidth ? 'red' : ''
            }`}
          >
            {this.state.gridWidth}
          </span>
        </p>
      </div>
    );
  }
}

export default App;
