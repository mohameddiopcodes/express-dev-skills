const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render('skills/index', { skills: Skill.getAll() })
}

function show(req, res) {
    res.render('skills/show', { skill: Skill.getSkill(req.params.id) })
}

function create(req, res) {
    const skill = {}
    skill.title = req.body.title ? req.body.title.trim():null
    if(skill.title) {
        Skill.createSkill(skill)
        res.redirect('/skills')
    }
}

function deleteSkill(req, res) {
    Skill.deleteSkill(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', { skill: Skill.getSkill(req.params.id) })
}

function update(req, res) {
    Skill.updateSkill(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}