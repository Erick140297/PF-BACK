const { Router } = require("express")
const router = Router();

//User
const post_user = require("./routes_user/post_user");
const put_user = require("./routes_user/put_user"); 
const get_user = require("./routes_user/get_users");
const get_userById = require("./routes_user/get_userById");
const get_userByEmail = require("./routes_user/get_userByEmail");
const delete_user = require("../routes/routes_user/delete_user");
const get_userTemporaly = require("../routes/routes_user/get_usersTemporaly");
const get_userByEmail = require("./routes_user/get_userByEmail");

router.use(post_user);
router.use(put_user);
router.use(get_user);
router.use(get_userTemporaly);
router.use(get_userById);
router.use(get_userByEmail);
router.use(delete_user);

//Service
const post_service = require("../routes/routes_service/post_service")
const get_services = require("../routes/routes_service/get_services")
const get_serviceById = require("../routes/routes_service/get_serviceById");
const put_service = require("../routes/routes_service/put_service");
const delete_service = require("../routes/routes_service/delete_service");

router.use(post_service);
router.use(get_services);
router.use(get_serviceById);
router.use(put_service);
router.use(delete_service);

//Sales
const get_sales = require("../routes/routes_sales/get_sales");
const get_salesById = require("../routes/routes_sales/get_sales");

router.use(get_sales);
router.use(get_salesById);

//Login
const login = require("../routes/login/login")

router.use(login);

//Email Test
const emailTest = require("./emailTest")

router.use(emailTest);


module.exports = router;
