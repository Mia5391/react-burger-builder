import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('OrderSummatry DID update');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(
                igKey => {
                    return (<li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
                });

        return (
            <Aux>
                <h3>Your order summary:</h3>
                <p>A burger with:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            </Aux >
        );
    }
}
export default OrderSummary;