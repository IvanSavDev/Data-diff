const formatingDate = (dateForPath1, dateForPath2, keys) => {
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

  let resultCompare = '';
  arrayResult.forEach((element, index) => {
    if (index === arrayResult.length - 1) {
      resultCompare += `${element}`;
      return;
    }
    resultCompare += `${element}\n`;
  });

  return resultCompare;
};

export default formatingDate;
