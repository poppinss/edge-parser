/*
* edge-parser
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { makeCallableExpression } from '../Parser/makeCallableExpression'

const WHITE_LISTED = ['Object', 'ctx']

export default {
  toStatement (statement: any): object {
    if (WHITE_LISTED.indexOf(statement.name) > -1) {
      return statement
    }

    return makeCallableExpression('resolve', [
      Object.assign({}, statement, {
        type: 'Literal',
        value: statement.name,
        raw: `'${statement.name}'`,
      }),
    ])
  },
}
