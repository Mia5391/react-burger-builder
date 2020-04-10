import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Please enter your contact details:</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="text" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="streetname" placeholder="Streetname" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postcode" />
                    <Button buttonType="Success">ORDER</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;