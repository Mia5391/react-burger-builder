import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) =>{
            return <BurgerIngredient key={ingredientKey +i} type ={ingredientKey}></BurgerIngredient>
        });
    });


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;