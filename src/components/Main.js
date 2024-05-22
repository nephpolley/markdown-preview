import React from "react";
import InputBox from "./InputBox";
import Preview from "./Preview";
import { marked } from "marked";

const defaultText =
  "# Welcome to my React Markdown Previewer!\n\n## Subheading\n### Sub-subheading\n\nCode: `<div></div>`\n\n```\n// Multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n**Bold**, _italic_, **_bold + italic_**, and ~~strikethrough~~\n\n[Link](https://www.freecodecamp.org)\n> Block Quote\n\nHeader 1 | Header 2 | Header 3\n------------ | ------------- | -------------\nRow 1 | Cell 1 | Cell 2\nRow 2 | Cell 3 | Cell 4\n\n- List\n  - With\n     - Multiple\n        - Levels\n\n\n1. Numbered list item 1\n2. Numbered list item 2\n3. Numbered list item 3\n\nImage:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    this.setState({ text });
  }

  render() {
    return (
      <div id="mainDiv">
        <InputBox text={this.state.text} onChange={this.handleChange} />
        <Preview
          html={marked(this.state.text, {
            breaks: true,
          })}
        />
      </div>
    );
  }
}
