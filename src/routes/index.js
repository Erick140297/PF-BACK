const { Router } = require("express")
const router = Router();

const delete_provider = require("./delete_provider")
const get_providerById = require("./get_providerById")
const get_providerByName = require("./get_providerByName")
const get_providers = require("./get_providers");
const post_provider = require("./post_provider");
const put_provider = require("./put_provider");

router.use(delete_provider);
router.use(get_providerById);
router.use(get_providerByName);
router.use(get_providers);
router.use(post_provider);
router.use(put_provider);

module.exports = router;
