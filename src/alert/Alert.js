import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { connect } from 'react-redux';

import { dismissAlert } from './AlertActions';

export const Alert = ({ message, type, dismiss }) => (
  <div>
    { message &&
      <BootstrapAlert bsStyle={typeToStyle(type)} onDismiss={dismiss}>{message}</BootstrapAlert>
    }
  </div>
);

export function mapStateToProps({ alert }) {
  return alert;
}

export function mapDispatchToProps(dispatch) {
  return {
    dismiss: () => dispatch(dismissAlert())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);

const TYPES_TO_STYLES = {
  error: 'danger',
  success: 'success'
}

function typeToStyle(type) {
  return TYPES_TO_STYLES[type] || 'info'
}
