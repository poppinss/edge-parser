(function (template, ctx) {
  let out = '';
  let edge_debug_line = 1;
  let edge_filename = '{{ __dirname }}index.edge';
  try {
    out += `${ctx.escape(ctx.resolve('username') || 'virk')}`;
  } catch (error) {
    ctx.reThrow(error, edge_filename, edge_debug_line);
  }
  return out;
})(template, ctx)