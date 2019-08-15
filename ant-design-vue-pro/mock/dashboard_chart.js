function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [100, 100, 200, 40, 34, 67];
      break;
    default:
      res = null;
  }
  return res;
}
module.exports = chart;
