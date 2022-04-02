import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';
import parse from './parser.js';
import diff from './diff.js';
import getFormat from './formatters/index.js';

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const path2 = path.resolve(process.cwd(), filepath2);
  const readFile1 = readFileSync(path1, 'UTF-8');
  const readFile2 = readFileSync(path2, 'UTF-8');
  const dateForPath1 = parse(path1, readFile1);
  const dateForPath2 = parse(path2, readFile2);
  const resultDiff = diff(dateForPath1, dateForPath2);
  return getFormat(resultDiff, formatName);
};

export default gendiff;
