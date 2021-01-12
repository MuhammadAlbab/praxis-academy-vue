<template>
  <v-footer app
  id="my-footer">
    <!-- <v-col> -->
      <v-row
      id="first-row">
        <v-col
        align-self="center"
        cols="9"
        id="first-col">
          <v-row
          align="center"
          justify="end"
          >
            <strong>Praxis Academy - </strong>
          </v-row>
        </v-col>
        <v-col
        align-self="center"
        cols="3">
          <v-row
          align="center"
          justify="start">
            <v-btn 
            v-for="item in this.items" :key="item.id"
            icon
            large
            link :href="item.link"
            target="_blank"
            >
              <v-icon
              > {{item.icon}}</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    <!-- </v-col> -->
  </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
      return{
        items: [
          {id: 1, icon: 'mdi-github', link: 'https://github.com/'},
          {id: 2, icon: 'mdi-youtube', link: 'https://youtube.com/'},
          {id: 3, icon: 'mdi-facebook', link: 'https://facebook.com/'},
          {id: 4, icon: 'mdi-twitter', link: 'https://twitter.com/'},
        ],
      }
    }

}
</script>

<style>

  #myFooter{
    padding: 10px;
  }

  #first-row{
    padding: 5px;
  }

  #first-col{
    text-align: justify;
  }


</style>