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

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFile = (fileName) => readFileSync(getFixturePath(fileName), 'UTF-8');

const pathExtendFiles = {
  stylish: 'expected_stylish.txt',
  plain: 'expected_plain.txt',
  json: 'expected_json.txt',
};

const testFiles = [
  ['filepath1.json', 'filepath2.json'],
  ['filepath1.yml', 'filepath2.yml'],
  ['filepath1.yaml', 'filepath2.yaml'],
];

test.each(testFiles)('test format stylish', (file1, file2) => {
  const result = gendiff(getFixturePath(file1), getFixturePath(file2));
  const correctResult = readFile(pathExtendFiles.stylish).toString();
  expect(result).toBe(correctResult);
});

test.each(testFiles)('test format plain', (file1, file2) => {
  const result = gendiff(getFixturePath(file1), getFixturePath(file2), 'plain');
  const correctResult = readFile(pathExtendFiles.plain).toString();
  expect(result).toBe(correctResult);
});

test.each(testFiles)('test format json', (file1, file2) => {
  const result = gendiff(getFixturePath(file1), getFixturePath(file2), 'json');
  const correctResult = readFile(pathExtendFiles.json).toString();
  expect(result).toBe(correctResult);
});
