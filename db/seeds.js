const {v4: uuidv4} = require('uuid');

const items = [
  {
    name: 'Lorem Ipsum',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    imgURL: 'https://i.pcmag.com/imagery/reviews/04LOytI6kS2pMMEsZr1vsUq-1..v1607958887.jpg',
    id: uuidv4()
  },
  {
    name: 'Product Name',
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'`,
    imgURL: 'https://i.pcmag.com/imagery/reviews/04LOytI6kS2pMMEsZr1vsUq-1..v1607958887.jpg',
    id: uuidv4()
  },
  {
    name: 'Gold Ring',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    imgURL: 'https://i.pcmag.com/imagery/reviews/04LOytI6kS2pMMEsZr1vsUq-1..v1607958887.jpg',
    id: uuidv4()
  }
];

// Deletion log initialized as an empty string
const comments = '';

module.exports = {items, comments};