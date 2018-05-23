import React from 'react';


export default class Input extends React.Component {

  render() {
    const Element = this.props.element || "input";

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div>{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <div>{this.props.meta.warning}</div>;
    }

    return (
      <div>
        <lable htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </lable>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => this.input = input}
        >
          {this.props.children}
        </Element>
      </div>


    );


  }

}