export default {
  state: {
    users: [
      {
        id: 1,
        nickname: 'Братанчик'
      }
    ]
  },

  mutations: {
    ADD_USER(state, user) {
      const exist = state.users.some(u => u.id === +user.get('id'))

      if (exist) return false

      state.users.push({
        id: +user.get('id'),
        nickname: user.get('nickname')
      })

      return true
    },

    REMOVE_USER(state, user) {
      state.users = state.users.filter((u) => u.id !== user.id)
    }
  }
}
