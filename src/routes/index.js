const { Router } = require("express")
const router = Router();

/* const delete_provider = require("./delete_provider")
const get_providerById = require("./get_providerById")
const get_providerByName = require("./get_providerByName")
const get_providers = require("./get_providers");
const post_provider = require("./post_provider");
const put_provider = require("./put_provider"); */
const post_user = require("./post_user");
const get_user = require("./get_users");
const get_userById = require("./get_userById");

/* router.use(delete_provider);
router.use(get_providerById);
router.use(get_providerByName);
router.use(get_providers);
router.use(post_provider);
router.use(put_provider); */
router.use(post_user);
router.use(get_user);
router.use(get_userById);

module.exports = router;
