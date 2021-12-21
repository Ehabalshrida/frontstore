export default store=>next=>action=>
typeof action==='function'?action(store.dispatch,store.getstate):next(action)

