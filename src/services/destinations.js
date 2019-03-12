import random from 'lodash/random';
import destinations from './fixtures/destinations.json';

export async function find(search) {
  return new Promise(resolve => {
    setTimeout(() => {
      let found = [];
      if (search.length > 0) {
        found = destinations.filter(dest =>
          dest.name.toLowerCase().startsWith(search.toLowerCase())
        );
      }
      resolve(found);
    }, random(100, 800));
  });
}
