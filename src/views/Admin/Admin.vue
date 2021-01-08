<template>
  <v-container class="pendaftar">
    <v-row id="header"
    align="center"
    justify="space-around">
      <v-card
      hover
      class="head-card">
          <v-card-title>FRONTEND</v-card-title>
          <v-card-subtitle>Total Terdaftar: {{frontendTotal.length}}</v-card-subtitle>
          <v-card-text class="txt-head"> Approved : {{frontendApp.length}} 
            <v-icon color="success">mdi-account-check</v-icon>
          </v-card-text>
          <v-card-text class="txt-head"> Pending: {{frontendPen.length}} 
            <v-icon color="error">mdi-account-alert</v-icon>  
          </v-card-text>
      </v-card>
      <v-card
      hover
      class="head-card">
          <v-card-title>BACKEND</v-card-title>
          <v-card-subtitle>Total Terdaftar: {{backendTotal.length}}</v-card-subtitle>
          <v-card-text class="txt-head"> Approved : {{backendApp.length}} 
            <v-icon color="success">mdi-account-check</v-icon>
          </v-card-text>
          <v-card-text class="txt-head"> Pending : {{backendPen.length}} 
            <v-icon color="error">mdi-account-alert</v-icon>  
          </v-card-text>
      </v-card>
      <v-card
      hover
      class="head-card">
          <v-card-title>MOBILE</v-card-title>
          <v-card-subtitle>Total Terdaftar: {{mobileTotal.length}}</v-card-subtitle>
          <v-card-text class="txt-head"> Approved : {{mobileApp.length}} 
            <v-icon color="success">mdi-account-check</v-icon>
          </v-card-text>
          <v-card-text class="txt-head"> Pending : {{mobilePen.length}} 
            <v-icon color="error">mdi-account-alert</v-icon>  
          </v-card-text>
      </v-card>
    </v-row>
    <h1>Kelola Pendaftar:</h1>
    <v-row
    align="center"
    justify="space-around">
      <v-card v-for="user in users" :key="user.name"
      class="con-items"
      hover>
        <v-card-title>{{user.name}} </v-card-title>
        <v-card-subtitle>{{user.address}} </v-card-subtitle>
        <v-card-text class="txt-prog">Program: {{user.program}} </v-card-text>
        <v-card-text class="txt-prog" v-if="user.isApproved == false">
          Status: Pending
          <v-icon
          color="error">mdi-account-alert</v-icon>  
        </v-card-text>
        <v-card-text class="txt-prog" v-else>Status: Approved
          <v-icon
          color="success">
            mdi-account-check</v-icon>
        </v-card-text>
          <v-card-actions>
            <v-row
            align="center"
            justify="end">
              <v-btn v-if="user.isApproved == false" @click="chngStatBtn(user.name)"
              small
              text
              color="primary"> Approve
                <v-icon
                right>mdi-check-circle</v-icon>
              </v-btn>
              <v-btn v-else @click="chngStatBtn(user.name)"
              small
              text
              color="warning"> Dissaprove
                <v-icon
                right>mdi-minus-circle</v-icon>
              </v-btn>
              <v-btn @click="delBtn(user.name)"
              small
              text
              color="error">
                Delete
                <v-icon
                right>mdi-delete-forever</v-icon>
              </v-btn>
            </v-row>
          </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Admin',

  data(){
    return {
    
    }
  },

  computed: {
    users() {
      return this.$store.state.user
    },
    
    frontendTotal(){
      return this.$store.state.user.filter((e) => {
        return e.program === 'Frontend'
      });
    },
    frontendApp(){
      return this.$store.state.user.filter((e) => {
        return (e.isApproved === true &&  e.program === 'Frontend')
      });
    },
    frontendPen(){
      return this.$store.state.user.filter((e) => {
        return (e.isApproved === false &&  e.program === 'Frontend')
      });
    },

    backendTotal(){
      return this.$store.state.user.filter((e) => {
        return e.program === 'Backend'
      });
    },
    backendApp(){
      return this.$store.state.user.filter((e) => {
        return (e.isApproved === true &&  e.program === 'Backend')
      });
    },
    backendPen(){
      return this.$store.state.user.filter((e) => {
        return (e.isApproved === false &&  e.program === 'Backend')
      });
    },

    mobileTotal(){
      return this.$store.state.user.filter((e) => {
        return e.program === 'Mobile'
      });
    },
    mobileApp(){
      return this.$store.state.user.filter((e) => {
        return (e.isApproved === true &&  e.program === 'Mobile')
      });
    },
    mobilePen(){
      return this.$store.state.user.filter((e) => {
        return (e.isApproved === false &&  e.program === 'Mobile')
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

    #header{
        margin: 10px
    }

    .head-card{
        width: 450px;
        height: 150px;
        margin: 20px;
    }

    .txt-head{
      padding: 0px 16px;
      margin: 0;
    }

    h1 {
      text-align: center;
      padding-bottom: 20px;
    }
    .pendaftar{
    max-width: 1300px;
    }

    .con-items{
    min-width: 400px;
    margin: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    }

    .txt-prog{
        padding: 0px 16px;
    }
</style>