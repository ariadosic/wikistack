const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const { Page, User } = require("../models/index");
const wikipage = require("../views/wikipage")
const main = require("../views/main");


router.use(express.json());
router.use(express.urlencoded({extended:false}))

router.get("/", async (req, res) => {
    const posts = await Page.findAll();
    res.send(main(posts));
});

router.post("/", async (req, res, next) => {
    console.log(req.body);
    try {
        const page = await Page.create({
            title: req.body.title,
            slug: "",
            content: req.body.content,
            status: req.body.status,
         })

         const user = await User.create({
            name: req.body.name,
            email: req.body.email
         })
        
         res.redirect(`/wiki/${page.slug}`);
    } catch(error){
        next(error);
    }
});

router.get("/add", (req, res) => {
    res.send(addPage());
})

router.get("/:slug", async (req, res, next) => {
    const slugURL = req.params.slug;
    try{
        const post = await Page.findOne({
            where: {
                slug: slugURL
            }
        })
        res.send(wikipage(post, post.author));
    } catch (error) { next(error) }
})

module.exports = router;