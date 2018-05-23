import React from 'react';

import {connect} from 'react-redux';

const Header = (props) => {

  console.log(props);

  let message;
  if (props.message !== ''){
    message = props.message;
  }
  return (
    <div>
      <h1>Report Complaint</h1>
      {message}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.post.message
  };
};

export default connect(mapStateToProps)(Header);