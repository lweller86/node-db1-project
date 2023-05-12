exports.checkAccountPayload = (req, res, next) => {
  const errMsg = {status:400 }
  const { name, budget } = req.body
  if(name === undefined || budget === undefined) {
    errMsg.message = 'name and  budget are required'
    next(errMsg)
  }
  else if(name.trim().length <  3 || name.trim().length > 100) {
    errMsg.message = ' name of account must be between 3 and 100'
    next(errMsg)
  }
  else if(budget.length < 0 || budget.length > 1000000) {
    errMsg.message = 'budget of account is too large or too small'
    next(errMsg)
  } else if(typeof budget !== 'number') {
    errMsg.message = 'budget of account must be a number'
    next(errMsg)
  }
  else next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  const errMsg = {status:400 }
  const { name } = req.body
  if(name === undefined || budget === undefined) {
    errMsg.message = 'name and  budget are required'
  }
}

exports.checkAccountId = async (req, res, next) => {
  try{
    const account = await Account.getById(rq.params.id)
    if(!account) {
      next({ status: 404, message: 'not found'})
    } else {
      req.account = account
      next()
    }
  } catch(err) {
    next(err)
  }
}
