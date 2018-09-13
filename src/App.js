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
      console.log(index, current.length);
      const isLastItem = current.length - 1 <= index;
      const columnWidth = this.getColumnWidth();
      return (
        <React.Fragment>
          <div className="column" style={{ width: columnWidth }} />
          {!isLastItem && (
            <div className="gutter" style={{ width: this.state.gutter }} />
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
        <div className="grid-values">
          <div className="grid-input">
            <label>Max Grid Width</label>
            <input
              type="number"
              className="max-width"
              value={this.state.maxWidth}
              onChange={this.setMaxWidth}
              min={1}
            />
          </div>

          <div className="grid-input">
            <label>Gutter</label>
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
            <p>
              Column width:
              {this.getColumnWidth()}
            </p>
          </div>
          <div className="grid-calculated">
            <p
              className={` grid-width-value ${
                this.getGridWidth() !== this.state.maxWidth ? 'not-exact' : ''
              }`}
            >
              Grid width: {this.getGridWidth()}
            </p>
          </div>
        </div>

        <div className="grid">{this.renderGrid()}</div>
      </div>
    );
  }
}

export default App;
