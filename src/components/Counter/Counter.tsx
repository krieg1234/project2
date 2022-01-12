import React, { Component } from 'react';

type CounterProps = {
  readonly title?: string;
};
type CounterState = {
  count: number;
};

export class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  static defaultProps: CounterProps = {
    title: 'Default',
  };

  static getDerivedStateFromProps(
    nextProps: CounterProps,
    prevState: CounterState
  ): CounterState | null {
    return false ? { count: 2 } : null;
  }

  componentDidMount(): void {}

  shouldComponentUpdate(
    nextProps: CounterProps,
    nextState: CounterState
  ): boolean {
    return true;
  }

  handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    console.log(`x:${e.clientX}, y:${e.clientY}`);
    this.setState(({ count }) => ({
      count: ++count,
    }));
  };

  render(): React.ReactNode {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.props.title}</h1>
        <button onClick={this.handleClick}>+1</button>
        <a href="#" onClick={this.handleClick}>
          link
        </a>
      </div>
    );
  }
}
