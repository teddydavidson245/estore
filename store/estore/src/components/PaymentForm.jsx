// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"
// import { useState } from "react"
// import "../styles/stripe.css"

// // Card Options imported from Stripe docs.
// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "#c4f0ff",
// 			color: "#fff",
// 			fontWeight: 500,
// 			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "#fce883" },
// 			"::placeholder": { color: "#87bbfd" }
// 		},
// 		invalid: {
// 			iconColor: "#ffc7ee",
// 			color: "#ffc7ee"
// 		}
// 	}
// }

// export default function PaymentForm( cart ) {
//     const [ success, setSuccess ] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()
//     // const [ userData, setUserData ] = useState({
//     //     name: '',
//     //     email: '',
//     //     address: ''
//     // })

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })
    

//     if(!error) {
//         try { // Dummy post to change later with correct route.
//             const {id} = paymentMethod
//             const response = await axios.post("http://localhost:4000/payment", {
//                 amount: 1000,
//                 id
//             })

//             if(response.data.success) {
//                 console.log("Successful Payment")
//                 setSuccess(true)
//             }
//         } catch (error) {
//             console.log("error", error)
//         }
//     } else {
//         console.log(error.message)
//     }
// }


//     return (
//         <>
//         {!success ?
//         <form onSubmit={handleSubmit}>
//             <fieldset className="FormGroup">
//                 <div className="FormRow">
//                     <CardElement options={CARD_OPTIONS}/>
//                 </div>
//             </fieldset>
//             <button>Pay</button>
//         </form>
//         :
//         <div> 
//             <h2>
//             Successful purchase of this item! 
//             </h2>
//         </div>
//         }
//         </>
//     )
// }


import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentRequestButtonElement } from '@stripe/react-stripe-js';


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle payment submission
    // Use stripe and elements to process the payment

    if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Handle payment submission using stripe and elements
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement />
      </label>

      {/* Additional options for Google Pay and Apple Pay */}
      <PaymentRequestButtonElement
        options={{
          paymentRequest: {
            country: 'US',
            currency: 'usd',
            total: {
              label: 'Total',
              amount: 1000, // Amount in cents
            },
          },
        }}
      />
      
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
