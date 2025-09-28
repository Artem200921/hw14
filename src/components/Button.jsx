import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <div className="Button-wrap">
      <button type="button" className="Button" onClick={this.props.loadMore}>
        load more
      </button></div>
    );
  }
}
