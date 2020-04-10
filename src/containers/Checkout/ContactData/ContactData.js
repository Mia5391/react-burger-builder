import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';


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
            <div>
                <h4>Please enter your contact details:</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="text" name="email" placeholder="Your email" />
                    <input type="text" name="streetname" placeholder="Streetname" />
                    <input type="text" name="postal" placeholder="Postcode" />
                    <Button buttonType="Success">ORDER</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;