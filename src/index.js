import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';
import _ from 'lodash';
import formatingData from './format.js';

const gendiff = (filepath1, filepath2) => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const path2 = path.resolve(process.cwd(), filepath2);
  const dateForPath1 = JSON.parse(readFileSync(path1), 'UTF-8');
  const dateForPath2 = JSON.parse(readFileSync(path2), 'UTF-8');
  const keys = Object.keys(dateForPath1).concat(Object.keys(dateForPath2));
  const deleteDublicate = new Set(keys);
  const arrayKeys = Array.from(deleteDublicate);
  const sortByKey = _.sortBy(arrayKeys);
  return formatingData(dateForPath1, dateForPath2, sortByKey);
};

export default gendiff;
