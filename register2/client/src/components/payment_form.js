import React, {Component} from 'react';

import SquarePaymentForm from 'react-square-hosted-fields';

class PaymentForm extends Component {

  render() {
    return (
        <SquarePaymentForm
          appId="TODO"
          onNonceGenerated={() => {}}/>
        );
  }
}

export default PaymentForm;
