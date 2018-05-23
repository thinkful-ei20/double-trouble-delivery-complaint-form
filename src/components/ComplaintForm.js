import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, mustBe5, allNumbers } from '../validators';
import { submitPost } from '../actions';
import Header from './Header';
import Input from './Input';

export class ComplaintForm extends React.Component {
  
  onSubmit = (values) => {
    this.props.dispatch(submitPost(values));
  }
  
  render() {
      
    return (
      <div>
        <Header />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="trackingNumber"
            type="text"
            label="Tracking number"
            component={Input}
            validate={[required, nonEmpty, mustBe5, allNumbers]}
          />
          <Field
            name="issue"
            component={Input}
            element="select"
            label="Issue"
            validate={[required]}
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
      </div>
    );
  }
}

export default reduxForm({
  form: 'complaint'
})(ComplaintForm);