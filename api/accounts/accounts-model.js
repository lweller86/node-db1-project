const db = require('../../data/db-config');

const getAll = () => {
 return db('accounts');
}

const getById = id => {
 return db('accounts').where('id', id).first()
}

const create = async account => {
 const [ id ] = await db('accounts').insert(account)
 return getById(id)
}

const updateById = async (id, account) => {
  db('accounts').where(id).update(account)
  return getById(id)
}

const deleteById = id => {
  db('account').where(id).delete()
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
