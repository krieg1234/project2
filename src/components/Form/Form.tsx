import React, { Component } from 'react';

interface IFormProps {}
interface IFormState {}

export class Form extends React.Component<IFormProps, IFormState> {
  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submited');
  };

  handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(`copied`);
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Simple text:
          <input
            onFocus={this.handleFocus}
            onCopy={this.handleCopy}
            type={'text'}
            name="name"
          />
          <button type="submit">Submit</button>
        </label>
      </form>
    );
  }
}
