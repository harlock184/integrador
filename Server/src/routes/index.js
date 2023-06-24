const express = require("express")
const router = express.Router()

const {getCharById} = require("../controllers/getCharById")
const login= require("../controllers/login")
// const {postFav, deleteFav}= require("../controllers/handleFavorites")
const postFav = require("../controllers/postFav")
const postUser = require("../controllers/postUser")
const deleteFav = require("../controllers/deleteFav")




router.get ("/character/:id", getCharById )
router.get (" / login " , login )
router.post("/")
router.post("/fav", postFav);
router.delete ( "/fav/:id ", deleteFav )

module.exports = router