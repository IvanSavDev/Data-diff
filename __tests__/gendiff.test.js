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

test.each([
  ['filepath1.json', 'filepath2.json', 'expect_file_json.txt', 'instead_file'],
  ['filepath1.yml', 'filepath2.yml', 'expect_file_yaml.txt', 'instead_file'],
  ['filepath1.yaml', 'filepath2.yaml', 'expect_file_yaml.txt', 'instead_file'],
])('gendiff', (file1, file2, expected, folder) => {
  const result = gendiff(getFixturePath(file1, folder), getFixturePath(file2, folder));
  const correctResult = readFile(expected, folder).toString();
  expect(result).toBe(correctResult);
});
