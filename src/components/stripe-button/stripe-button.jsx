import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KYTloKGyHUXjP2OlQY4QuN1m4NiRiGFbrIKCGoKnExyie3s5GHD1VSZSJQQ8xfq37UC1aziP5cXMHnDTsAhne2N00JCUhv6R4';

    const onToken = token =>{
        console.log(token)
        alert('payment succesfull')
    }
    return(
        <StripeCheckout
        label='Pay now'
        name='ecommerce app'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;