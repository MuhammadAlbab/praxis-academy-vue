<template>
  <v-container id="container">
    <v-row>
      <v-col>
        <v-card hover shaped>
          <!-- <div class="content"> -->
          <!-- <v-img src="../assets/praxisnew.png" id="img-praxis" /> -->
          <v-card-text class="txt-con">
            Praxis Academy adalah sekolah pemrograman yang khusus menangani aplikasi level enterprise. Kami menggunakan platform Java untuk sisi back end dan JavaScript untuk sisi front end. Sekolah ini didirikan tahun 2019 setelah melihat adanya kesenjangan yang signifikan antara dunia industri dengan dunia pendidikan. Tujuan utama dari pendirian sekolah ini adalah menjembatani dunia industri software dengan calon-calon SDM yang akan berkiprah di industri software tersebut. Sekolah ini didirikan sebagai hasil kerjasama antara pelaku di industri software serta praktisi bidang pendidikan yang secara khusus memang mendedikasikan diri di bidang teknologi software.
          </v-card-text>
          <!-- </div> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }

  #container{
    /* background-color: red; */
    max-width: 1500px;
  }

  #img-praxis{
    float: left;
    width: 200px;
    height: auto;
    max-width: 100%;
    margin: 0px 10px;
  }

  .txt-con {
    font-size: medium;
    text-align: justify;
  }

</style>