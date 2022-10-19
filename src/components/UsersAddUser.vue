<template>
  <form class="add-user" @submit.prevent="addUser" ref="form">
    <input class="add-user__input" type="text" name="nickname" placeholder="Введите имя" />
    <input class="add-user__input" type="text" name="id" placeholder="Введите id" />
    <button class="add-user__input">Добавить</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'ADD_USER'
    ]),

    addUser(e) {
      const userData = new FormData(e.target)
      if (this.checkExist(userData)) {
        alert('с таким id уже существует, ахтунг')
      } else {
        this.ADD_USER(userData)
        this.$refs.form.reset()
      }
    },

    checkExist(user) {
      return this.$store.state.users.some(u => u.id === +user.get('id'))
    }
  }
}
</script>

<style lang="scss">
.add-user {
  &__input {
    padding: 5px;
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
