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


router.post('/',
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  async (req, res, next) => {
    try {
      const newAccount = await Account.create(req.body)
      res.status(201).json(newAccount)
    } catch (err) {
      next(err)
    }
  })

router.put('/:id',
  md.checkAccountId,
  md.checkAccountNameUnique,
  md.checkAccountPayload,
 async (req, res, next) => {
  try{
const updatedAccount = await Account.updateById(req.params.id, req.body)
    res.status(200).json(updatedAccount)
  } catch (err) {
    next(err)
  }
    
  });

router.delete('/:id', md.checkAccountId, async (req, res, next) => {
   try {
     await Account.deleteById(req.params.id)
      res.json(req.account)
    }
    catch(err) {
      next(err)
    }
  })

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    customMessage:' something bad happened',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
