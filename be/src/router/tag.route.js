const Router = require('koa-router');

const { findAll, findByTag } = require('../controller/tag.controller');

const router = new Router({ prefix: '/api/tags' });

// 获取标签列表接口
router.get('/', findAll);
// 根据标签查询博客
router.get('/:id', findByTag);

module.exports = router;