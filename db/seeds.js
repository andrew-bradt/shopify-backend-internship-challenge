const {v4: uuidv4} = require('uuid');

const items = [
  {
    name: 'Nice Jewellery',
    description: 'This is a nice ring here',
    imgURL: 'https://i.pcmag.com/imagery/reviews/04LOytI6kS2pMMEsZr1vsUq-1..v1607958887.jpg',
    id: uuidv4()
  },
  {
    name: 'Other Jewellery',
    description: 'This is another ring',
    imgURL: 'https://i.pcmag.com/imagery/reviews/04LOytI6kS2pMMEsZr1vsUq-1..v1607958887.jpg',
    id: uuidv4()
  }
];

module.exports = items;