import plain from './plain.js';
import stylish from './stylish.js';

const getFormat = (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`No such format ${formatName}`);
  }
};

export default getFormat;
