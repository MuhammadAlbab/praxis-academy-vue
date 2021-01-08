<template>
  <v-container class="frontend">
    <h1>Frontend</h1>
    <v-row
    align="center"
    justify="space-around">
      <v-card v-for="user in users" :key="user.name"
      class="con-items"
      hover>
        <v-card-title>{{user.name}} </v-card-title>
        <v-card-subtitle>{{user.address}} </v-card-subtitle>
        <v-card-text v-if="user.isApproved == false">
          Status: Pending
          <v-icon
          color="error">mdi-account-alert</v-icon>  
        </v-card-text>
        <v-card-text v-else>Status: Approved
          <v-icon
          color="success">
            mdi-account-check</v-icon>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.user.filter((user) => {
        return user.program === 'Frontend'
      });
    }
  },
  methods: {
    chngStatBtn(userName){
      this.$store.dispatch('changedStat', userName)
    },
    delBtn(userName){
      this.$store.dispatch('deletedUser', userName)
    }
  }
}
</script>

<style scoped>

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .frontend{
    max-width: 1300px;
  }
  .con-items{
    min-width: 400px;
    margin: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
  }
</style>