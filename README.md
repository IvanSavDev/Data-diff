# Difference calculator

### Hexlet tests and linter status:

[![Actions Status](https://github.com/IvanSavDev/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/IvanSavDev/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/6afd2f68a5e2967de105/maintainability)](https://codeclimate.com/github/IvanSavDev/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6afd2f68a5e2967de105/test_coverage)](https://codeclimate.com/github/IvanSavDev/frontend-project-lvl2/test_coverage)
[![Status](https://github.com/IvanSavDev/frontend-project-lvl2/actions/workflows/gendiff.yml/badge.svg)](https://github.com/IvanSavDev/frontend-project-lvl2/actions/workflows/gendiff.yml)

## Description
Difference calculator is a program that perceives the difference between two data structures. This is a popular task and there are many online services to solve it, such as http://www.jsondiff.com/. probably used in test output or automatic usage tracking in config files.

Utility features:

* Support for different input formats: yaml, json
* Report generation in plain text, style and json

## Installation
Install dependencies
```
make install
```
Run eslint
```
make lint
```
Run tests
```
make test
```

## Use
```
Usage: gendiff [options] <filepath1> <filepath2>
Options:
  -V, --version        output the version number
  -f, --format [type]  output format [stylish, plain, json] (default: 'stylish')
  -h, --help           display help for command
```
## Flat file

[![asciicast](https://asciinema.org/a/W0QsE0hZ1FtY73nHcy1cjOwVZ.svg)](https://asciinema.org/a/W0QsE0hZ1FtY73nHcy1cjOwVZ)

## Stylish format

[![asciicast](https://asciinema.org/a/hlaMtPBXcChimvBZwvifP7h56.svg)](https://asciinema.org/a/hlaMtPBXcChimvBZwvifP7h56)

## Plain format

[![asciicast](https://asciinema.org/a/iweroEIm32MJChcEEuTaEnPp5.svg)](https://asciinema.org/a/iweroEIm32MJChcEEuTaEnPp5)

## JSON format

[![asciicast](https://asciinema.org/a/ZMeeth7GtlgSHHq7a7YUB2BHU.svg)](https://asciinema.org/a/ZMeeth7GtlgSHHq7a7YUB2BHU)
