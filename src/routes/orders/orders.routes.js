const { Router } = require("express");
const { getOrder, postOrder } = require("./orders.controller");

const router = Router();

router.get('/orders/:id', getOrder);
router.post('/orders', postOrder);


module.exports = router;