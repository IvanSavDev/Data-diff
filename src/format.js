const getData = (dateForPath1, dateForPath2, keys) => {
  const arrayResult = ['{'];
  keys.forEach((key) => {
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
  });
  arrayResult.push('}');

  return arrayResult;
};

const formatingData = (dateForPath1, dateForPath2, keys) => {
  const values = getData(dateForPath1, dateForPath2, keys);
  let resultCompare = '';

  values.forEach((element, index) => {
    if (index === values.length - 1) {
      resultCompare += `${element}`;
      return;
    }
    resultCompare += `${element}\n`;
  });

  return resultCompare;
};

export default formatingData;
