import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div>
            <h1>We hope you enjoy your burger:</h1>
            <div style={{width: '100%', margin:"auto", textAlign:"center"}}>
            <Burger ingredients={props.ingredients}/>
            <Button buttonType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button buttonType="Success" clicked={props.checkoutContinued}>Confirm</Button>
            </div>
        </div>
    )

}

export default checkoutSummary;