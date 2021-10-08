const LoremIpsum = new require('lorem-ipsum').LoremIpsum

const Lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
})

const lorem = () => Lorem.generateParagraphs(10)

module.exports = lorem