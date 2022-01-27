import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <br />
        <button onClick={this.handlerClick}>
          Классовый компонент нажали {this.state.counter} раз
        </button>
      </>
    );
  }
}
