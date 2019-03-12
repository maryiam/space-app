import random from "lodash/random";
import currenciesFixture from "./fixtures/payment.json";

export async function find(currencies) {
  return new Promise(resolve => {
    setTimeout(() => {
      let found = [];
      if (currencies.length > 0) {
        found = currenciesFixture.filter(curr => currencies.indexOf(curr.id) > -1);
      }
      resolve(found);
    }, random(100, 800));
  });
}
