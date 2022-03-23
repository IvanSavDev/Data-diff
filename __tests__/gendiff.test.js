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

test.each([
  ['filepath1.json', 'filepath2.json', 'expect_file_json.txt'],
  ['filepath1.yml', 'filepath2.yml', 'expect_file_yaml.txt'],
  ['filepath1.yaml', 'filepath2.yaml', 'expect_file_yaml.txt'],
])('gendiff', (file1, file2, expected) => {
  const result = gendiff(getFixturePath(file1), getFixturePath(file2));
  const correctResult = readFile(expected).toString();
  expect(result).toBe(correctResult);
});
