// default-parameters.3
var scope = 'outer_scope'
function scoper (val = scope) {
  scope = 'inner_scope'
  console.log(val) // outer_scope
}
scoper()
