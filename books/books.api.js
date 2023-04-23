const router = require('express').Router()
const service = require('./books.service')

router.get("/", async function(req, res){
    try {
        let list = await service.list()
        res.send(list)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
router.get("/:id", async function(req, res){
    try {
        let list = await service.get(req.params.id)
        res.send(list)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
router.post("/", async function(req, res){
    try {
        let list = await service.create(req.body)
        res.send(list)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
router.put("/:id", async function(req, res){
    try {
        let list = await service.update(req.params.id, req.body)
        res.send(list)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
router.delete("/:id", async function(req, res){
    try {
        await service.delete(req.params.id)
        res.send("Deleted :)")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router