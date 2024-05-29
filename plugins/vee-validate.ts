import { extend } from 'vee-validate'
// eslint-disable-next-line camelcase
import { alpha_num, digits, max, min, required } from 'vee-validate/dist/rules'

/*
   |--------------------------------------------------------------------------
   | Custom regex
   |--------------------------------------------------------------------------
   |
   | List of custom regex shared with the backend
   |
   */
const slugRegex = /^[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)*$/
const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
const emailRegex =
  /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/

// eslint-disable-next-line camelcase
extend('alpha_num', { ...alpha_num, message: 'alpha_num' })
extend('digits', { ...digits, message: 'digits' })
extend('required', { ...required, message: 'required' })
extend('max', { ...max, message: 'max' })
extend('min', { ...min, message: 'min' })

/*
 |--------------------------------------------------------------------------
 | Custom validation
 |--------------------------------------------------------------------------
 |
 | Set of custom validation rules in order to use the backend
 | regex and ensure the core functionalities remain intact
 |
 */
extend('permission_slug', (value) =>
  slugRegex.test(value) ? true : 'permission_slug_regex_error'
)
extend('mndl_email_validation', (value) =>
  emailRegex.test(value) ? true : 'mndl_email_validation'
)
extend('mndl_password_validation', (value) =>
  passwordRegex.test(value) ? true : 'mndl_password_validation'
)
