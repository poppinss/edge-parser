/*
 * edge-parser
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Parser } from '../Parser'
import { makeStatePropertyAccessor } from '../Parser/makeStatePropertyAccessor'

export default {
  toStatement(statement: any, _: string, parser: Parser): object {
    if (
      (parser.options.localVariables || []).indexOf(statement.name) > -1 ||
      parser.stack.has(statement.name) ||
      global[statement.name] !== undefined
    ) {
      return statement
    }

    return makeStatePropertyAccessor(parser.options.statePropertyName, statement)
  },
}
