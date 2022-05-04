module.exports = (err, ctx) => {
  let status = 200;
  switch (err.code) {
    case '10001':
    case '10002':
    case '10004':
    case '10005':
    case '10100':
    case '10101':
    case '10102':
      status = 400
      break;
    case '10003':
    case '10006':
    default:
      status = 500;
  };
  ctx.status = status;
  ctx.body = err;
  ctx.body.code = status;
}