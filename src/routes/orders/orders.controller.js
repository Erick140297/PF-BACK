const Orders = require("../../models/orders");
const User = require("../../models/user");

const getOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Orders.find({buyerId:id}).populate("services");
        
        res.status(200).json(order)
    } catch(error) {
        res.status(400).json("Order error");
    }
}

const postOrder = async (req, res) => {
    try {
        const { purchaseId, servicesId, status, userMail } = req.body;
        let services = servicesId.map(el => {
            return({
                _id: el,
                rated: false
            })
        })
        const user = await User.findOne({ email: userMail });

        const newOrder = new Orders({
            purchaseId,
            services,
            status,
            buyerId: user._id
        });

        const saveOrder = await newOrder.save();
        user.orders = user.orders.concat(saveOrder._id);
        user.save();
        res.status(200).json(saveOrder);
    } catch(error) {
        res.status(400).json(error);
    }
    
}


module.exports = {
    getOrder,
    postOrder
}