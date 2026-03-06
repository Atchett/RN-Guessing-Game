function generateRandomNumberBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}

export default generateRandomNumberBetween;
