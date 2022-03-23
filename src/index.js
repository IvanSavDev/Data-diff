import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';
import _ from 'lodash';
import formatingData from './format.js';
import parse from './parser.js';

const gendiff = (filepath1, filepath2) => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const path2 = path.resolve(process.cwd(), filepath2);
  const readFile1 = readFileSync(path1, 'UTF-8');
  const readFile2 = readFileSync(path2, 'UTF-8');
  const dateForPath1 = parse(path1, readFile1);
  const dateForPath2 = parse(path2, readFile2);
  const keys = Object.keys(dateForPath1).concat(Object.keys(dateForPath2));
  const deleteDublicate = new Set(keys);
  const arrayKeys = Array.from(deleteDublicate);
  const sortByKey = _.sortBy(arrayKeys);
  return formatingData(dateForPath1, dateForPath2, sortByKey);
};

export default gendiff;
