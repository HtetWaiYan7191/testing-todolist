const sortArr = (arr) => {
  arr.forEach((element, index) => {
    element.index = index + 1;
  });
  return arr;
};

export default sortArr;