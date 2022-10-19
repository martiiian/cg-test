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
      const result = this.ADD_USER(new FormData(e.target))
      result && this.$refs.form.reset()
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
