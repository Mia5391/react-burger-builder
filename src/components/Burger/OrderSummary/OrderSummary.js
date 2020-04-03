import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map (
        igKey => {
            return (<li key={igKey}> 
                <span style={{ textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
});
        
return (
    <Aux>
        <h3>Your order summary:</h3>
        <p>A burger with:</p>
        <ul>
            {ingredientSummary}
        </ul>
<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button buttonType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    



    </Aux>
)
};

export default OrderSummary;