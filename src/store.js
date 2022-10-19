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
      state.users.push({
        id: +user.get('id'),
        nickname: user.get('nickname')
      })
    },

    REMOVE_USER(state, user) {
      state.users = state.users.filter((u) => u.id !== user.id)
    }
  }
}
