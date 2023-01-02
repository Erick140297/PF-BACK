const axios = require("axios");

require('dotenv').config();
const api = process.env.PAYPAL_API
const apiClient = process.env.PAYPAL_API_CLIENT
const apiSecret = process.env.PAYPAL_API_SECRET



const createOrder = async (req, res) => {
    try {

        const { value, description } = req.body;

        //Doc:  https://developer.paypal.com/docs/api/orders/v2/
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value
                    },     
                    description
                }
            ],
            application_context: {
                brand_name: "Freelance Workers",
                landing_page: "LOGIN", // LOGIN/BILLING/NO_PREFERENCE
                user_action: "PAY_NOW",
                return_url: "http://localhost:3001/capture-order",
                cancel_url: "http://localhost:3001/cancel-order"
            }
        }

        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");

        //Getting token: https://developer.paypal.com/reference/get-an-access-token/
        const { data: { access_token } } = await axios.post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: apiClient,
                password: apiSecret
            }
        })

        //console.log(access_token);
        //Create order: https://developer.paypal.com/api/rest/requests/
        const response = await axios.post(`${api}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        res.json(response.data);
    } catch(error) {
        return res.status(500).send("Something went wrong");
    }
    
}


const captureOrder = async (req, res) => {
    //Capture order: https://developer.paypal.com/docs/api/orders/v2/
    const { token } = req.query;

    const response = await axios.post(`${api}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: apiClient,
            password: apiSecret
        }
    });
    console.log(response.data)
    return res.redirect("http://localhost:5173/payment");
    //55
}

const cancelOrder = (req, res) => {

  

    res.redirect("https://pf-front-three.vercel.app/paymentDeclined")

}



module.exports = {
    cancelOrder, 
    captureOrder,
    createOrder
};