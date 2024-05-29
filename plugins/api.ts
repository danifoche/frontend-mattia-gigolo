import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import Utils from '~/api/utils'

export default (context: Context, inject: Inject) => {
  const repositories = { utils: Utils(context.$axios) }
  inject('api', repositories)
}
