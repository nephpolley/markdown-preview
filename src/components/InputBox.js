import React from "react";

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    return this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div id="editorDiv">
        <textarea
          id="editor"
          rows="25"
          cols="50"
          value={this.props.text}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}
