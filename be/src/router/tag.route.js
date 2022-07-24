const Router = require('koa-router');

const { findAll } = require('../controller/tag.controller');

const router = new Router({ prefix: '/tags' });

// 获取标签列表接口
router.get('/getTags', findAll);

module.exports = router;