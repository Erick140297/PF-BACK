const { Router } = require("express")
const router = Router();

const post_provider = require("./post_provider");
const get_providers = require("./get_providers");

router.use(post_provider);
router.use(get_providers);

module.exports = router;
