<template>
  <div class="users">
    <UsersAddUser />
    <UsersUser v-for="user of users" :key="user.key" :user="user" />
  </div>
</template>

<script>
import UsersAddUser from './UsersAddUser'
import UsersUser from './UsersUser'
import { mapState } from 'vuex'


export default {
  components: { UsersAddUser, UsersUser },

  computed: {
    ...mapState([
      'users',
    ])
  }
}
</script>

