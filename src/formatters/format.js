import stylish from './stylish.js';

const format = (data, formatName) => {
  if (formatName === 'stylish') return stylish(data);
  throw new Error(`No such format ${formatName}`);
};

export default format;
