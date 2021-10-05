module.exports = {
    getAll,
    getSkill
}

const skills = [
    {id: 123, title: 'HTML'},
    {id: 124, title: 'CSS'},
    {id: 125, title: 'Javascript'}
]

function getAll() {
    return skills
}

function getSkill(paramId) {
    return skills.find(skill => skill.id === parseInt(paramId))
}