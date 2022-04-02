import _ from 'lodash';

const sortOfKeys = (obj1, obj2) => {
  const keys = Object.keys(obj1).concat(Object.keys(obj2));
  const deleteDublicate = new Set(keys);
  const arrayKeys = Array.from(deleteDublicate);
  const sortByKey = _.sortBy(arrayKeys);
  return sortByKey;
};

const diff = (dateFromPath1, dateFromPath2) => {
  const sortedKeys = sortOfKeys(dateFromPath1, dateFromPath2);

  return sortedKeys.map((key) => {
    const valueObj1 = dateFromPath1[key];
    const valueObj2 = dateFromPath2[key];

    if (!_.has(dateFromPath1, key)) {
      return { type: 'add', name: key, value: valueObj2 };
    }

    if (!_.has(dateFromPath2, key)) {
      return { type: 'delete', name: key, value: valueObj1 };
    }

    if (_.isPlainObject(valueObj1) && _.isPlainObject(valueObj2)) {
      return { type: 'recursion', name: key, value: diff(valueObj1, valueObj2) };
    }

    if (_.has(dateFromPath1, key) && _.has(dateFromPath2, key)) {
      if (valueObj1 !== valueObj2) {
        return {
          type: 'changed', name: key, value1: valueObj1, value2: valueObj2,
        };
      }
    }

    return { type: 'same', name: key, value: valueObj1 };
  });
};

export default diff;
