const { Router } = require("express")
const router = Router();

const post_user = require("./routes_user/post_user");
const put_user = require("./routes_user/put_user"); 
const get_user = require("./routes_user/get_users");
const get_userById = require("./routes_user/get_userById");
const post_service = require("../routes/routes_service/post_service")
const get_services = require("../routes/routes_service/get_services")
const get_serviceById = require("../routes/routes_service/get_serviceById")

router.use(post_user);
router.use(put_user);
router.use(get_user);
router.use(get_userById);
router.use(post_service);
router.use(get_services);
router.use(get_serviceById);


module.exports = router;
