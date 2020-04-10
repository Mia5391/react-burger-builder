import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';




class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Cosi',
                address: {
                    street: 'Testroad 12',
                    zipCode: '12345',
                    country: 'Neverland'
                },
                email: 'mia@cosis.com'
            },
            deliveryMethod: 'bike'
        }
        axios.post("/orders.json", order) //'.json' is for Firebase only
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render () {
        let form = (
            <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your name" />
            <input className={classes.Input} type="text" name="email" placeholder="Your email" />
            <input className={classes.Input} type="text" name="streetname" placeholder="Streetname" />
            <input className={classes.Input} type="text" name="postal" placeholder="Postcode" />
            <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Please enter your contact details:</h4>
                {form}

            </div>
        );
    }

}

export default ContactData;