<template>
  <div class="user">
    <div class="user__id">{{ user.id }}</div>
    <div class="user__nickname">{{ user.nickname }}</div>
    <button class="user__delete-btn" @click="REMOVE_USER(user)">
      <img :src="deleteIcon" width="24" height="24" alt="delete" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import deleteIcon from '~/src/assets/delete.svg'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      deleteIcon
    }
  },

  methods: {
    ...mapMutations([
      'REMOVE_USER',
    ])
  }
}
</script>

<style lang="scss">
.user {
  display: flex;
  padding: 10px;
  border-bottom: 2px solid #dad8d8;

  &__id {
    padding-right: 10px;
  }
  &__nickname {
    flex-grow: 1;
  }
  &__delete-btn {
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
  }
}
</style>
