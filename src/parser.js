import path from 'path';
import yaml from 'js-yaml';

const parse = (fileName, fileData) => {
  const formatFile = path.extname(fileName).slice(1);

  if (formatFile === 'json') {
    const dataFromFile = JSON.parse((fileData), 'UTF-8');
    return dataFromFile;
  }
  if (formatFile === 'yaml' || formatFile === 'yml') {
    const dataFromFile = yaml.load(fileData);
    return dataFromFile;
  }

  throw new Error(`Format not supported ${formatFile}`);
};

export default parse;
