const { Router } = require('express')
const { check } = require('express-validator')
const Role = require('../models/role')

const { validateFields } = require('../middlewares/validate-fields')
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/user')

const router = Router()

router.get('/', usersGet)

router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('password', 'Password must have more than 6 characters').isLength({min: 6}),
  check('mail', 'Mail is not valid').isEmail(),
  // check('role', 'Role not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom( async(role = '') => {
    const roleExists = await Role.findOne({ role })
    if(!roleExists){
      throw new Error(`Role ${role} is not registered in DB`)
    }
  }),
  validateFields
], usersPost)

router.put('/:id', usersPut)

router.patch('/', usersPatch)

router.delete('/', usersDelete)


module.exports = router