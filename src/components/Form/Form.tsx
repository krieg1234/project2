import React, { Component } from 'react';

interface IFormProps {}
type IFormState = {
  inputText: string;
  textareaText: string;
  selectText: string;
  showData: {
    name: string;
    text: string;
    position: string;
  };
};
type Position = {
  id: string;
  value: string;
  title: string;
};
const POSITIONS: Position[] = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end Develope',
    title: 'Back-end Develope',
  },
];

const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value;
const styles: React.CSSProperties = {
  display: 'block',
  marginBottom: '10px',
};

export class Form extends React.Component<IFormProps, IFormState> {
  // handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  //   console.log(e.currentTarget);
  // };

  // handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('submited');
  // };

  // handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log(`copied`);
  // };

  constructor(props: IFormProps) {
    super(props);
    this.state = {
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: '',
        text: '',
        position: '',
      },
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputText = e.target.value;
    this.setState({ inputText });
  };

  handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const textareaText = e.target.value;
    this.setState({ textareaText });
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectText = e.target.value;
    this.setState({ selectText });
  };

  handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;

    this.setState({
      inputText: '',
      textareaText: '',
      selectText: DEFAULT_SELECT_VALUE,
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      },
    });
  };

  private rootRef = React.createRef<HTMLSelectElement>();

  render() {
    return (
      <>
        <form>
          <label style={styles}>
            Name:
            <input
              type={'text'}
              value={this.state.inputText}
              onChange={this.handleInputChange}
            />
          </label>
          <label style={styles}>
            Text:
            <textarea
              value={this.state.textareaText}
              onChange={this.handleTextAreaChange}
            />
          </label>
          <select
            style={styles}
            value={this.state.selectText}
            onChange={this.handleSelectChange}
            ref={this.rootRef}
          >
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>

          <button onClick={this.handleShow}>Show Data</button>
        </form>

        <h2>{this.state.showData.name}</h2>
        <h3>{this.state.showData.text}</h3>
        <h3>{this.state.showData.position}</h3>
      </>
    );
  }
}
