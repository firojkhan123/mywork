import React from 'react';
// import classNames from 'classnames';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: undefined } ;
  }
  render() {
    return (
      <div className={ ('Test', this.state.mode) }>
        { this.props.prop3 }
        {this .props.t}
      </div>
    );
  }
}

