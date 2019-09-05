function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`).catch(function(e) {
    console.error('Failed to import component ' + JSON.stringify(e))
  })
}

export {loadView}
