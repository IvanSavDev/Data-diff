import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

let __filename;
let __dirname;

beforeAll(() => {
  __filename = fileURLToPath(import.meta.url);
  __dirname = path.dirname(__filename);
});

const getFixturePath = (fileName, folder) => path.join(__dirname, '..', '__fixtures__', folder, fileName);
const readFile = (fileName, folder) => readFileSync(getFixturePath(fileName, folder), 'UTF-8');

const pathExtendFiles = {
  stylish: 'expect_file.txt',
  plain: 'format_plain.txt',
  json: 'json_test.txt',
};

const testFiles = [
  ['filepath1.json', 'filepath2.json', 'flat_file'],
  ['filepath1.yml', 'filepath2.yml', 'flat_file'],
  ['filepath1.yaml', 'filepath2.yaml', 'flat_file'],
  ['filepath1.json', 'filepath2.json', 'instead_file'],
  ['filepath1.yml', 'filepath2.yml', 'instead_file'],
  ['filepath1.yaml', 'filepath2.yaml', 'instead_file'],
];

test.each(testFiles)('test format stylish', (file1, file2, folder) => {
  const result = gendiff(getFixturePath(file1, folder), getFixturePath(file2, folder));
  const correctResult = readFile(pathExtendFiles.stylish, folder).toString();
  expect(result).toBe(correctResult);
});

test.each(testFiles)('test format plain', (file1, file2, folder) => {
  const result = gendiff(getFixturePath(file1, folder), getFixturePath(file2, folder), 'plain');
  const correctResult = readFile(pathExtendFiles.plain, folder).toString();
  expect(result).toBe(correctResult);
});

test.each(testFiles)('test format json', (file1, file2, folder) => {
  const result = gendiff(getFixturePath(file1, folder), getFixturePath(file2, folder), 'json');
  const correctResult = readFile(pathExtendFiles.json, folder).toString();
  expect(result).toBe(correctResult);
});
