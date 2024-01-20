const router = require("express").Router();
const { home } = require("../controllers/home");
const { crush } = require("../controllers/crush");
const { anime } = require("../controllers/anime");
const { horny } =
require("../controllers/horny");
const { alon } =
require("../controllers/alon");
const { baby } =
require("../controllers/baby");
const { islam } =
require("../controllers/islam");
const { item } =
require("../controllers/item");
const { hot } =
require("../controllers/hot");
const { sad } =
require("../controllers/sad");
const { love } =
require("../controllers/love");
const { sura } =
require("../controllers/sura");
const { nutural } =
require("../controllers/nutural");

router.get("/", home);
router.get("/crush", crush);
router.get("/anime", anime);
router.get("/horny", horny);
router.get("/alon", alon);
router.get("/baby", baby);
router.get("/islam", islam);
router.get("/hot", hot);
router.get("/sad", sad);
router.get("/item", item);
router.get("/love", love);
router.get("/sura", sura);
router.get("/nutural", nutural);

module.exports = router;