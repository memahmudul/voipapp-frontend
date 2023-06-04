import * as auth from './auth'
import * as balance from './balance'
import * as transactionorder from './transactionorder'
import * as commission from './commission'
import * as slider from './slider'
import * as payment from './payment'

export default {
    ...auth,
    ...balance,
    ...transactionorder,
    ...commission,
    ...slider,
    ...payment
}