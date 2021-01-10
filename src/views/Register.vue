<template v-slot:default="dialog">
    <v-card 
    class="card-reg">
        <v-card-title>Register</v-card-title>
        
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam. Culpa, delectus molestias cupiditate quisquam, officia consequatur veritatis doloribus officiis inventore explicabo magnam odio minima! Ullam quidem explicabo ipsa, dolor culpa necessitatibus quod eligendi placeat? Incidunt debitis accusantium quis possimus!</v-card-text>
        <v-form 
        ref="form">
            <v-alert 
                color="error" 
                type="error" 
                :value="alertFrontend"
                transition="slide-y-transition">
                Maaf slot pendaftaran 'FRONTEND' sudah penuh, Mohon tunggu batch selanjutnya!
            </v-alert>
            <v-alert 
                color="error" 
                type="error" 
                :value="alertBackend"
                transition="slide-y-transition">
                Maaf slot pendaftaran 'Backend' sudah penuh, Mohon tunggu batch selanjutnya!
            </v-alert>
            <v-alert 
                color="error" 
                type="error" 
                :value="alertMobile"
                transition="slide-y-transition">
                Maaf slot pendaftaran 'Mobile'sudah penuh, Mohon tunggu batch selanjutnya!
            </v-alert>                        
            <v-card-text>
                <v-text-field 
                prepend-inner-icon="mdi-account-edit"
                outlined
                label="Name" 
                v-model="name"
                :rules="nameRules"
                 />
                <v-textarea
                outlined
                prepend-inner-icon="mdi-map-marker"
                label="Address" 
                v-model="address"
                :rules="addressRules" />
                <v-select 
                outlined
                prepend-inner-icon="mdi-code-not-equal-variant"
                label="Select Program"
                v-model="program"
                :items="programKu"
                :rules="programRules" />
            </v-card-text>
            <v-card-actions>
                <v-row 
                align="center"
                justify="space-around" >
                    <v-btn
                    text
                    color="warning"
                    @click="resetSubmit">  reset
                        <v-icon
                        right
                        large> mdi-restart </v-icon>
                    </v-btn>
                    <v-btn
                    text
                    color="success"
                    @click="handleSubmit"> submit
                        <v-icon
                        right
                        large> mdi-checkbox-marked-circle-outline </v-icon>
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'Register',
    props: ['dialog'],
    data(){
        return{
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length >= 5 || 'Name must be more than 5 characters'
            ],
            address: '',
            addressRules: [
                v => !!v || 'Address is required',
                v => v.length >= 8 || 'Address must be more than 8 characters'
            ],
            program: '',
            programRules: [
                v => !!v || 'Select your program!',
            ],
            programKu: ['Frontend', 'Backend', 'Mobile'],
            alertFrontend: false,
            alertBackend: false,
            alertMobile: false
        }
    },
    methods: {
        handleSubmit(){
            if(this.$refs.form.validate()){
                let user = {
                    name: this.name,
                    address: this.address,
                    program: this.program,
                    isApproved: false
                }
                    if (user.program === 'Frontend') {
                        if (this.$store.getters.getApprovedFrontend.length >= this.$store.getters.getKuotaFrontend){
                            this.alertFrontend = true
                        }else{
                            alert('Data berhasil ditambahkan!')
                            this.$store.dispatch('addedUser', user)
                            this.$emit('changeDial', !this.dialog)
                            this.$router.push({name: 'FrontEnd'})
                        }
                    }else if(user.program ==='Backend'){
                        if (this.$store.getters.getApprovedBackend.length >= this.$store.getters.getKuotaBackend){
                            this.alertBackend = true
                        }else{
                            alert('Data berhasil ditambahkan!')
                            this.$store.dispatch('addedUser', user)
                            this.$emit('changeDial', !this.dialog)
                            this.$router.push({name: 'BackEnd'})
                        }
                    }else if(user.program === 'Mobile'){
                        if (this.$store.getters.getApprovedMobile.length >= this.$store.getters.getKuotaMobile){
                            this.alertMobile = true
                        }else{
                            alert('Data berhasil ditambahkan!')
                            this.$store.dispatch('addedUser', user)
                            this.$emit('changeDial', !this.dialog)
                            this.$router.push({name: 'Mobile'})
                        }
                    }
                    
            }
        },
        resetSubmit(){
            this.alertFrontend = false
            this.alertBackend = false
            this.alertMobile = false
            this.$refs.form.reset()
        },
    },
    watch: {
        dialog: function(val){
            if (val){
                this.alertFrontend = false
                this.alertBackend = false
                this.alertMobile = false
                this.$refs.form.reset()
            }
        }
    }
}
</script>

<style>
.card-reg{
    margin: 0;
    padding-bottom: 20px;
    padding-top: 10px;
    padding-right: 10px;
}
</style>