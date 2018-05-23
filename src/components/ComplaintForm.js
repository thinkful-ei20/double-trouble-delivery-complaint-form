import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, mustBe5, allNumbers } from '../validators';
import { submitPost } from '../actions';
import Input from './Input';

export class ComplaintForm extends React.Component {

  onSubmit = values => {
    this.props.dispatch(submitPost(values));
    // console.log('props', this.props);
    // console.log(value);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="tracking-number"
          type="text"
          label="Tracking number"
          component={Input}
          validate={[required, nonEmpty, mustBe5, allNumbers]}
        />
        <label>Issue</label>
        <Field
          name="issue"
          component="select"
          validate=[]
        >
          <option>not-delivered</option>
          <option>wrong-item</option>
          <option>missing-part</option>
          <option>damaged</option>
          <option>other</option>
        </Field>
        <label>Details</label>
        <Field name="details" component="textarea"/>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'complaint'
})(ComplaintForm);