<template>
  <v-container id="container">
    <h1 class="txt-welcome">Some Welcoming Text!</h1>
    <v-row class="first-row"
    align="center"
    justify="space-around">
      <v-col>
        <v-card class="first-card"
        hover 
        shaped>
          <v-card-title>{{dataSet.title}}</v-card-title>
          <v-img :src="dataSet.pic" id="img-praxis" />
          <v-card-text class="txt-con head">
            {{dataSet.content}}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card v-for="data in dataSet2" :key="data.id"
        class="three-first"
        hover
        shaped>
          <v-card-title>{{data.title}}</v-card-title>
          <v-card-subtitle>{{data.subtitle}}</v-card-subtitle>
          <v-card-text class="txt-con"> {{data.content}} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h1 class="txt-welcome">Info Kuota Pendaftar</h1>
    <v-row
    align="center"
    justify="space-around">
        <v-col>
          <v-card v-for="data in dataSet3" :key="data.id"
          class="three-sec"
          hover
          shaped>
            <v-card-title>{{data.title}}</v-card-title>
            <v-card-subtitle>
              <p>Total Pendaftar: {{data.pendaftar}}</p>
              <p>Pending: {{data.pending}}</p>
              <p>Approved {{data.approved}}</p>
              <p>Sisa Kuota: {{data.sisaKuota}}</p>
            </v-card-subtitle>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      dataSet: {
        title : 'Praxis Academy',
        content: 'Praxis Academy adalah sekolah pemrograman yang khusus menangani aplikasi level enterprise. Kami menggunakan platform Java untuk sisi back end dan JavaScript untuk sisi front end. Sekolah ini didirikan tahun 2019 setelah melihat adanya kesenjangan yang signifikan antara dunia industri dengan dunia pendidikan. Tujuan utama dari pendirian sekolah ini adalah menjembatani dunia industri software dengan calon-calon SDM yang akan berkiprah di industri software tersebut. Sekolah ini didirikan sebagai hasil kerjasama antara pelaku di industri software serta praktisi bidang pendidikan yang secara khusus memang mendedikasikan diri di bidang teknologi software.',
        pic: require('@/assets/praxisnew.png')
      },
      dataSet2: [
        {
          title: 'One',
          id: 1,
          subtitle: 'Subtitle One',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt ipsa aperiam? Sint quibusdam perspiciatis error voluptatem iure quisquam vero debitis temporibus doloremque velit asperiores, beatae aperiam amet. Sed, hic'
        },
        {
          title: 'Two',
          id: 2,
          subtitle: 'Subtitle One',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt ipsa aperiam? Sint quibusdam perspiciatis error voluptatem iure quisquam vero debitis temporibus doloremque velit asperiores, beatae aperiam amet. Sed, hic'
        },
        {
          title: 'Three',
          id: 3,
          subtitle: 'Subtitle Three',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt ipsa aperiam? Sint quibusdam perspiciatis error voluptatem iure quisquam vero debitis temporibus doloremque velit asperiores, beatae aperiam amet. Sed, hic'
        }
      ],
      dataSet3: [
        {
          title: 'Frontend',
          id: 1,
          pendaftar: this.$store.getters.getFrontend.length,
          pending: this.$store.getters.getPendingFrontend.length,
          approved: this.$store.getters.getApprovedFrontend.length,
          sisaKuota: this.$store.getters.getKuotaFrontend
        },
        {
          title: 'Backend',
          pendaftar: this.$store.getters.getBackend.length,
          id: 2,
          pending: this.$store.getters.getPendingBackend.length,
          approved: this.$store.getters.getApprovedBackend.length,
          sisaKuota: this.$store.getters.getKuotaBackend
        },
        {
          title: 'Mobile',
          pendaftar: this.$store.getters.getMobile.length,
          id: 3,
          pending: this.$store.getters.getPendingMobile.length,
          approved: this.$store.getters.getApprovedBackend.length,
          sisaKuota: this.$store.getters.getKuotaMobile
        }
      ]
    }
  },
  created(){
    // console.log(this.$store.getters.getPendingFrontend.length);
  },
  computed: {
    // fPend(){
    //   return this.$store.state.user.filter(function(i){
    //     return this.tes = (i.program === 'Frontend' && i.isApproved === false)
    //   })
    // },
  },
  methods: {
   
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  #container{
    max-width: 1500px;
  }

  .first-row {
    margin-bottom: 20px;
  }

  #img-praxis{
    float: right;
    width: 200px;
    height: auto;
    max-width: 100%;
    margin: 0px 10px;
  }

  .first-card{
    padding: 20px;
  }

  .three-first {
    margin-bottom: 20px;
  }

  .threeFirst:last-child {
    margin-bottom: 0;
  }

  .three-sec{
    margin-bottom: 20px;
  }

  .three-sec:last-child{
    margin-bottom: 20px;
  }
  .custom-card{
    margin-top: 20px;
  }

  .txt-welcome {
    text-align: center;
    margin-bottom: 20px;
    color: gray;
  }
  .txt-con {
    font-size: medium;
    text-align: justify;
  }

  .head {
    font-size: large;
    text-align: start;
  }

</style>