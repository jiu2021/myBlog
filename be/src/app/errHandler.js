module.exports = (err, ctx) => {
  let status = 200;
  switch (err.code) {
    case '10001':
    case '10002':
    case '10004':
    case '10005':
    case '10101':
    case '10102':
    case '10103':
    case '10401':
      status = 400
      break;
    case '10003':
    case '10006':
    case '10201':
    case '10202':
    case '10203':
    case '10204':
    case '10205':
    case '10206':
    case '10301':
    case '10302':
    default:
      status = 500;
  };
  ctx.status = status;
  ctx.body = err;
  ctx.body.code = status;
}