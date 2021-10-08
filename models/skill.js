module.exports = {
    getAll,
    getSkill,
    createSkill,
    deleteSkill,
    updateSkill
}

const lorem = require('../utils/lorem')

let skills = [
    {id: 123, title: 'HTML', description: lorem()},
    {id: 124, title: 'CSS', description: lorem()},
    {id: 125, title: 'Javascript', description: lorem()}
]

function getAll() {
    return skills
}

function getSkill(paramId) {
    return skills.find(skill => skill.id === parseInt(paramId))
}

function createSkill(skill) {
    skill.id = Math.floor(Math.random() * 500)
    skill.description = lorem()
    skills.push(skill)
    return skill
}

function deleteSkill(id) {
    id = parseInt(id)
    skills = skills.filter( skill => skill.id !== id)
}

function updateSkill(id, payload) {
    id = parseInt(id)
    skills = skills.map( skill => skill.id === id ? { ...skill, ...payload }:skill )
}