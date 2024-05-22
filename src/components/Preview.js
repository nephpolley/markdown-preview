import React from "react";

export default class Preview extends React.Component {
  render() {
    return (
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      ></div>
    );
  }
}

Preview.propTypes = {};
