import React from 'react';
import { reduxForm, Field } from 'redux-form';

export class ComplaintForm extends React.Component {
  constructor() {
   super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (value) {
    console.log('props', this.props);
    console.log(value);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <label>Name</label>
        <Field name="name" type="text" component="input"/>
        <label>Email</label>
        <Field name="email" type="email" component="input"/>
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'complaint'
})(ComplaintForm);