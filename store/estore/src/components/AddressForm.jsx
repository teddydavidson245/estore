// eslint-disable-next-line no-unused-vars
import { AddressElement, useElements, useStripe } from "@stripe/react-stripe-js";


const ADDRESS_OPTIONS = {
    mode: 'shipping',
  allowedCountries: ['US'],
  blockPoBox: true,
  fields: {
    phone: 'always',
  },
  validation: {
    phone: {
      required: 'never',
    },
  },
}

export default function AddressForm() {
    // const stripe = useStripe();
    const elements = useElements()

    const handleNextStep = async () => {
        const addressElement = elements.getElement('address');
        const { complete, value } = await addressElement.getValue();
        if (complete) {
            console.log(value)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Perform any additional processing and submit the form
        // Could use stripe and elements here for card processing.
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
            <h3> Shipping </h3>
            <AddressElement onChange={handleNextStep} 
            options={ADDRESS_OPTIONS} />
            <p> <button type="submit">Submit</button> </p>
        </form>
        
        </>
    )
}