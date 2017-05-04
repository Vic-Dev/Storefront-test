import './test.tag.html';
import { searchandiser } from 'searchandiser-ui';
import { extractImage } from './utils';

searchandiser({
  customerId: 'gbipocindigo',
  collection: 'productsRollupAll2',
  // area: 'Production',

  fields: ['*'],

  structure: {
    title: 'title',
    price: 'price',
    image: 'genImage',

    _transform: (meta) => Object.assign(meta, {
      genImage: extractImage(meta)
    }),
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
