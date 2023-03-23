import * as auth from './auth'
import * as balance from './balance'
import * as transactionorder from './transactionorder'

export default {
    ...auth,
    ...balance,
    ...transactionorder
}