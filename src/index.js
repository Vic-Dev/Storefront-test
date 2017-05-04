import './test.tag.html';
import { searchandiser } from 'searchandiser-ui';

searchandiser({
  customerId: 'gbipocindigo',
  collection: 'productsRollupAll2',
  // area: 'Production',

  fields: ['*'],

  structure: {
    title: 'title',
    price: 'price',
    image: 'genImage',

    _transform: (meta) => {
      const imageId = ((meta.variants || [])[0] || {}).ISBN;

      return Object.assign(meta, {
        genImage: `https://dynamic.indigoimages.ca/books/${imageId}.jpg?width=140&quality=85&maxheight=200`
      });
    },
    // define your data structure here!
  },

  // disable tracker to hide errors if not configured for client
  services: {
    tracker: false
  },

  tags: {
    query: {
      sayt: false
    }
  },

  // put the rest of your configuration here!
  simpleAttach: false
});

searchandiser.attach('gb-query');
searchandiser.attach('gb-results');
searchandiser.attach('bt-test');
