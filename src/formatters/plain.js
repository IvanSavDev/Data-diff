import _ from 'lodash';

const getCurrentFormat = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return _.isObject(value) ? '[complex value]' : value;
};

const plain = (data) => {
  const iter = (node, depth) => {
    const getValue = (currentNode) => {
      const currentName = depth !== '' ? `${depth}.${currentNode.name}` : `${currentNode.name}`;
      const currentValue = currentNode.value;

      switch (currentNode.type) {
        case 'add':
          return `Property '${currentName}' was added with value: ${getCurrentFormat(currentValue)}`;
        case 'delete':
          return `Property '${currentName}' was removed`;
        case 'recursion':
          return iter(currentNode.value, currentName);
        case 'changed':
          return `Property '${currentName}' was updated. From ${getCurrentFormat(currentNode.value1)} to ${getCurrentFormat(currentNode.value2)}`;
        case 'same':
          return [];
        default:
          throw new Error(`This type does not exist: ${currentNode.type}`);
      }
    };

    const list = node.flatMap((element) => getValue(element));

    return list.join('\n');
  };

  return iter(data, '');
};

export default plain;
