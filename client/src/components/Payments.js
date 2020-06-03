import React ,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import * as actions from '../actions';

class Payments extends Component{
    render(){
        return(
            <StripeCheckout
                name="Feedbacker"
                description="Add credits for creating Surveys"
                amount={500}//500cents
                token={token=>this.props.handleToken(token)}//callbackfunction
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null,actions) (Payments);