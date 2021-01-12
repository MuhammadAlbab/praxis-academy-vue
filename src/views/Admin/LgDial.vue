<template v-slot:default="dialogTwo">
    <v-card 
    id="login-card">
        <v-card-title class="justify-center"> 
            <h3>Login Admin</h3>
        </v-card-title>
        <v-form ref="form">
            <v-alert 
                color="error" 
                type="error" 
                :value="error.username"
                transition="slide-y-transition">
                Username incorrect!
            </v-alert>
                <v-alert 
                color="error" 
                type="error" 
                :value="error.password"
                transition="slide-y-transition">
                Password incorrect!
            </v-alert>
                <v-alert 
                color="error" 
                type="error" 
                :value="error.userpass"
                transition="slide-y-transition">
                Username and password incorrect!
            </v-alert>
            <v-card-text>
                <v-text-field 
                outlined
                label="Username" prepend-inner-icon="mdi-account-circle" v-model="admin.username"/>
                <v-text-field 
                outlined
                label="Password" prepend-inner-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="handleClick" v-model="admin.password"/>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn
                text
                @click="handleSubmit">Submit</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'LgDial',
    props: ['dialogTwo', 'Authentication'],
    data: () => ({
        admin: {
            username : '',
            password : ''
        },
        showPassword: false,
        error: {
            username: false,
            password: false,
            userpass: false
        }
    }),
    methods: {
        handleClick() {
            this.showPassword = !this.showPassword
        },
        handleSubmit() {
            const adminUsername = this.$store.state.admin.username
            const adminPassword = this.$store.state.admin.password
            if(this.admin.username !== adminUsername && this.admin.password !== adminPassword) {
                this.error.userpass = true
            } else if(this.admin.username !== adminUsername) {
                this.error.username = true
            } else if(this.admin.password !== adminPassword) {
                this.error.password = true
            } else {
                this.$store.dispatch("loggedAdmin", this.admin)
                this.$store.dispatch("getAuthenticated", true)
                localStorage.setItem('Authentication', true)
                localStorage.getItem('Authentication');
                this.$emit('changeDialTwo', !this.dialogTwo, !this.Authentication)
                alert('Login success!')
                this.$router.push('/admin')
            }
        }
    },
    watch: {
        dialogTwo: function(val){
            if (val){
                this.$refs.form.reset()
            }
        }
    }
}
</script>

<style scoped>
    #login-card{
        margin: 0;
        padding-bottom: 20px;
        padding-top: 10px;
        padding-right: 10px;
    }
</style>