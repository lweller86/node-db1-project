const router = require('express').Router()
const md = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, async (req, res,) => {
  res.json(req.account)
})


router.post(
  '/',
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
  })

router.put(
  '/:id',
  md.checkAccountId,
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
    // DO YOUR MAGIC
  });

router.delete(
  '/:id',
  md.checkAccountId,
  (req, res, next) => {
    // DO YOUR MAGIC
  })

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
