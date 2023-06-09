const express = require("express")
const router = express.Router()

const {getCharById} = require("../controllers/getCharById")
const {login}= require("../controllers/login")
// const {postFav, deleteFav}= require("../controllers/getCharById")
const {postFav, deleteFav}= require("../controllers/handleFavorites")

router.get ("/character/:id", getCharById )
router.get (" / Login " , login )
// router.post ( " / fav " , postFav )

router.post("/fav", postFav);
router.delete ( "/fav/:id ", deleteFav )

module.exports = router