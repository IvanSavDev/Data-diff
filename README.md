# Data diff

[![Actions Status](https://github.com/IvanSavDev/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/IvanSavDev/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/6afd2f68a5e2967de105/maintainability)](https://codeclimate.com/github/IvanSavDev/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6afd2f68a5e2967de105/test_coverage)](https://codeclimate.com/github/IvanSavDev/frontend-project-lvl2/test_coverage)
[![Status](https://github.com/IvanSavDev/frontend-project-lvl2/actions/workflows/gendiff.yml/badge.svg)](https://github.com/IvanSavDev/frontend-project-lvl2/actions/workflows/gendiff.yml)

## Описание

Данная программа позволяет определять разницу между двумя форматами данных. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

* Поддержка разных форматов ввода: yaml, json
* Генерация отчетов в виде обычного текста, stylish и json

## Установка

```
make install
```

## Запуск тестов

```
make test
```

## Использование

```
Использование: gendiff [опции] <filepath1> <filepath2>
Опции:
  -V, --версия        показывает версию
  -f, --формат [тип]  формат вывода [stylish, plain, json] (по умолчанию: 'stylish')
  -h, --помощь        показать справку по команде
```

## Примеры

### Flat файлы

[![asciicast](https://asciinema.org/a/W0QsE0hZ1FtY73nHcy1cjOwVZ.svg)](https://asciinema.org/a/W0QsE0hZ1FtY73nHcy1cjOwVZ)

### Stylish формат

[![asciicast](https://asciinema.org/a/hlaMtPBXcChimvBZwvifP7h56.svg)](https://asciinema.org/a/hlaMtPBXcChimvBZwvifP7h56)

### Plain формат

[![asciicast](https://asciinema.org/a/iweroEIm32MJChcEEuTaEnPp5.svg)](https://asciinema.org/a/iweroEIm32MJChcEEuTaEnPp5)

### JSON формат

[![asciicast](https://asciinema.org/a/ZMeeth7GtlgSHHq7a7YUB2BHU.svg)](https://asciinema.org/a/ZMeeth7GtlgSHHq7a7YUB2BHU)
