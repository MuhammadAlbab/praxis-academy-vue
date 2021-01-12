<template>
    <v-container>
        <v-row class="justify-center">
                <v-card 
                id="login-card">
                    <v-card-title class="justify-center"> 
                        <h3>Login Admin</h3>
                    </v-card-title>
                    <v-form>
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
        </v-row>
    </v-container>
</template>

<script>
export default {
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
                let login = true
                localStorage.setItem('Authentication', login)
                this.$store.commit("setAuthentication", login)
                this.$store.dispatch("login", this.admin)
                alert('Login success!')
                this.$emit('changeDialTwo', !this.dialogTwo)
                // location.reload()
            }
        this.$router.push('/admin')
        }
    }
}
</script>

<style scoped>
    #login-card{
        margin: 50px;
        min-width: 400px;
    }
</style>