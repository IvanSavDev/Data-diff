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
const testFilesStylish = [
  ['filepath1.json', 'filepath2.json', 'expect_file_json.txt', 'flat_file'],
  ['filepath1.yml', 'filepath2.yml', 'expect_file_yaml.txt', 'flat_file'],
  ['filepath1.yaml', 'filepath2.yaml', 'expect_file_yaml.txt', 'flat_file'],
  ['filepath1.json', 'filepath2.json', 'expect_file_json.txt', 'instead_file'],
  ['filepath1.yml', 'filepath2.yml', 'expect_file_yaml.txt', 'instead_file'],
  ['filepath1.yaml', 'filepath2.yaml', 'expect_file_yaml.txt', 'instead_file'],
];

test.each(testFilesStylish)('test format stylish', (file1, file2, expected, folder) => {
  const result = gendiff(getFixturePath(file1, folder), getFixturePath(file2, folder));
  const correctResult = readFile(expected, folder).toString();
  expect(result).toBe(correctResult);
});

const testFilesPlain = [
  ['filepath1.json', 'filepath2.json', 'format_plain.txt', 'instead_file'],
  ['filepath1.yml', 'filepath2.yml', 'format_plain.txt', 'instead_file'],
  ['filepath1.yaml', 'filepath2.yaml', 'format_plain.txt', 'instead_file'],
  ['filepath1.json', 'filepath2.json', 'format_plain.txt', 'flat_file'],
  ['filepath1.yml', 'filepath2.yml', 'format_plain.txt', 'flat_file'],
  ['filepath1.yaml', 'filepath2.yaml', 'format_plain.txt', 'flat_file'],
];

test.each(testFilesPlain)('test format plain', (file1, file2, expected, folder) => {
  const result = gendiff(getFixturePath(file1, folder), getFixturePath(file2, folder), 'plain');
  const correctResult = readFile(expected, folder).toString();
  expect(result).toBe(correctResult);
});
