import React, { PureComponent, memo, useState } from 'react';

class TryClass extends PureComponent {
  state = {
    result: this.props.result,
    try: this.props.try,
  };

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default TryClass;
