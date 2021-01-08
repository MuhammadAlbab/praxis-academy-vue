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
                :value="alert"
                transition="slide-y-transition">
                Maaf slot pendaftaran penuh, Mohon tunggu batch selanjutnya!
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
            alert: false
        }
    },
    methods: {
        handleSubmit(){
            if(this.$refs.form.validate()){
                if (this.$store.state.user.length >= 8){
                    this.alert = true
                }else{
                    let user = {
                    name: this.name,
                    address: this.address,
                    program: this.program,
                    isApproved: false
                    }
                    this.$store.dispatch('addedUser', user)
                    alert('Data berhasil ditambahkan!')
                    if (user.program == 'Frontend') {
                        this.$router.push({name: 'FrontEnd'})
                    }else if(user.program == 'Backend'){
                        this.$router.push({name: 'BackEnd'})
                    }else{
                        this.$router.push({name: 'Mobile'})
                    }
                    this.$emit('changeDial', !this.dialog)
                }
                
            }
        },
        resetSubmit(){
            this.$refs.form.reset()
        }
    },
    watch: {
        dialog: function(val){
            if (val){
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