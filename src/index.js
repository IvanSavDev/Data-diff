import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';
import _ from 'lodash';

const gendiff = (filepath1, filepath2) => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const path2 = path.resolve(process.cwd(), filepath2);
  const dateForPath1 = JSON.parse(readFileSync(path1));
  const dateForPath2 = JSON.parse(readFileSync(path2));
  const keys = Object.keys(dateForPath1).concat(Object.keys(dateForPath2));
  const deleteDublicate = new Set(keys);
  const arrayKeys = Array.from(deleteDublicate);
  const sortByKey = _.sortBy(arrayKeys);
  const arrayResult = ['{'];
  for (const key of sortByKey) {
    if (Object.hasOwn(dateForPath1, key) && Object.hasOwn(dateForPath2, key)) {
      if (dateForPath1[key] === dateForPath2[key]) {
        arrayResult.push(`    ${key}: ${dateForPath1[key]}`);
      } else {
        arrayResult.push(`  - ${key}: ${dateForPath1[key]}`);
        arrayResult.push(`  + ${key}: ${dateForPath2[key]}`);
      }
    }

    if (Object.hasOwn(dateForPath1, key) && !Object.hasOwn(dateForPath2, key)) {
      arrayResult.push(`  - ${key}: ${dateForPath1[key]}`);
    }

    if (!Object.hasOwn(dateForPath1, key) && Object.hasOwn(dateForPath2, key)) {
      arrayResult.push(`  + ${key}: ${dateForPath2[key]}`);
    }
  }
  arrayResult.push('}');

  let resultCompare = '';
  for (const element of arrayResult) {
    resultCompare += `${element}\n`;
  }
  
  return resultCompare;
}

export default gendiff;
