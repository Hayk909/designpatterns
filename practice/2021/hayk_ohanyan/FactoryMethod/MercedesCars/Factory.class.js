const C = require('./Models/C.class');

class MercedesFactory {
  static models = {
    c300: new C('c300', 250, '$41,600', 2021),
    c200: new C('c200', 234, '$37,500', 2021),
    c180: new C('c300', 223, '$25,000', 2019)
  }

  create(model) {
    if (!MercedesFactory.models[model]) {
      throw new Error(`Model ${model} not found :(`);
    }

    return MercedesFactory.models[model];
  }
}

module.exports = MercedesFactory;
