const { Gig } = require('../models')
const { Op } = require('sequelize');

async function index(req, res) {
    const gigs = await Gig.findAll()
    
    res.render('gigs', { gigs })
}

function create(req, res) {
    res.render('add')
}

async function store(req, res) {
    let { title, description, budget, technologies, email } = req.body

    await Gig.create({
        title, description, technologies, budget, email
    })

    res.redirect('/gigs')
}

function search(req, res) {
    const term = req.query.term

    Gig.findAll({
        where: {
            technologies: {
                [Op.substring]: term 
            }
        }
    }).then((gigs) => {
        res.render('gigs', { gigs })
    }).catch((err) => {
        console.error(err)
    });
}

function show(req, res) {
    const id = req.params.id

    Gig.findByPk(id).then((result) => {
        result === null ? res.send('not found') : res.send(result)
    }).catch((err) => {
        console.error(err)
    });
}

module.exports = { index, show, create, store, search }