module.exports = (err, ctx) => {
  let status = 500;
  switch (err.code) {
    case '10001':
    case '10002':
      status = 400
      break;
    case '10003':
    default:
      status = 500;
  };
  ctx.status = status;
  ctx.body = err;
}