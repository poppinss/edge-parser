/*
* edge-parser
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export default {
  toStatement (statement, parser) {
    statement.left = parser.acornToEdgeExpression(statement.left)
    statement.right = parser.acornToEdgeExpression(statement.right)
    return statement
  },
}
