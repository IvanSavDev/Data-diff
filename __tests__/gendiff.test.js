import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFile = (fileName) => readFileSync(getFixturePath(fileName), 'UTF-8');

test('gendiff', () => {
  const result = gendiff(getFixturePath('filepath1.json'), getFixturePath('filepath2.json'));
  const correctResult = readFile('expect_file_json.txt').toString();
  expect(result).toEqual(correctResult);
});
