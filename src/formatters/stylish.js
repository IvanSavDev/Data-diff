import _ from 'lodash';

const countIndent = (depth = 1, symbol = ' ', baseCountSpace = 4) => symbol.repeat(baseCountSpace * depth);

const stringify = (obj, depths) => {
  const countSpaces = countIndent(depths);
  const bracketCount = countIndent(depths - 1);
  if (!_.isObject(obj) || obj === null) {
    return `${obj}`;
  }

  const lines = Object
    .entries(obj)
    .map(([key, value]) => `${countSpaces}${key}: ${stringify(value, depths + 1)}`);

  return ['{', ...lines, `${bracketCount}}`].join('\n');
};

const stylish = (data) => {
  const iter = (currentValue, depth) => {
    const countSpace = countIndent(depth).slice(0, -2);
    const bracketCount = countIndent(depth - 1);
    const getValue = (currentObj, currentCountSpace, currentDepth) => {
      const getPatterString = (symbol, value = 'value') => [`${currentCountSpace}${symbol} ${currentObj.name}: ${stringify(currentObj[value], currentDepth + 1)}`];
      switch (currentObj.type) {
        case 'add':
          return getPatterString('+');
        case 'delete':
          return getPatterString('-');
        case 'recursion':
          return [`${currentCountSpace}  ${currentObj.name}: ${iter(currentObj.value, currentDepth + 1)}`];
        case 'changed':
          return `${getPatterString('-', 'value1')}\n${getPatterString('+', 'value2')}`;
        case 'same':
          return getPatterString(' ');
        default:
          throw new Error(`This type does not exist: ${currentObj.type}`);
      }
    };

    const lines = currentValue.map((element) => getValue(element, countSpace, depth));
    return ['{', ...lines, `${bracketCount}}`].join('\n');
  };
  return iter(data, 1);
};

export default stylish;
