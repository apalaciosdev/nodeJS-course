const { Router } = require('express')
const { check } = require('express-validator')

const { validateFields } = require('../middlewares/validate-fields')
const { isRoleValid, mailExists, userExistsById } = require('../helpers/db-validators')
const { validateJWT } = require('../middlewares/validate-jwt')

const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/user')
const router = Router()


router.get('/', usersGet)

router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('password', 'Password must have more than 6 characters').isLength({min: 6}),
  check('mail', 'Mail is not valid').isEmail(),
  check('mail').custom(mailExists),
  // check('role', 'Role not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom(isRoleValid),
  validateFields
], usersPost)


router.put('/:id',[
  check('id', 'This is not a valid Id').isMongoId(),
  check('id').custom(userExistsById),
  check('role').custom(isRoleValid),
  validateFields
],usersPut)

router.patch('/', usersPatch)

router.delete('/:id', [
  validateJWT,
  check('id', 'This is not a valid Id').isMongoId(),
  check('id').custom(userExistsById),
  validateFields
], usersDelete)


module.exports = router