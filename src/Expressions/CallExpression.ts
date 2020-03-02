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
    if (statement.callee.type !== 'MemberExpression') {
      statement.arguments = statement.arguments.map((node) => {
        node.start += 3
        node.end += 3
        return node
      })
    }

    statement.callee = parser.acornToEdgeExpression(statement.callee)
    statement.arguments = statement.arguments.map((node) => parser.acornToEdgeExpression(node))
    return statement
  },
}
