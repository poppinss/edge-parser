(function (template, ctx) {
  let out = '';
  out += 'Hello ';
  out += `${ctx.escape(ctx.resolve('upper')(ctx.resolve('auth').user.getUsername()))}`;
  return out;
})(template, ctx)