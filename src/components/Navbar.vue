<template>
    <nav>
        <v-navigation-drawer 
        dense
        v-model="drawer"
        app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        Praxis Academy
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Division
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list nav>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
        app
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
            <v-toolbar-title>Praxis Academy</v-toolbar-title>
            <v-spacer> </v-spacer>
            <v-btn class="btn-top"
            large
            icon
            link to="/">
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <!--  -->

            <v-dialog
                v-model="dialog"
                transition="dialog-bottom-transition"
                max-width="500"
                 >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="btn-top"
                    v-bind="attrs"
                    v-on="on"
                    large
                    icon>
                        <v-icon> mdi-account-multiple-plus</v-icon>
                    </v-btn>
                </template>
                <Register :dialog="dialog" @changeDial ='updateDial'/>
            </v-dialog>
            
            <!--  -->

            <v-dialog
                v-model="dialogTwo"
                transition="dialog-bottom-transition"
                max-width="500"
                 >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="btn-top"
                    v-bind="attrs"
                    v-on="on"
                    icon>
                        <v-icon> mdi-account-key</v-icon>
                    </v-btn>
                </template>
                <LgDial :dialogTwo="dialogTwo" @changeDialTwo = 'updateDialTwo'/>
            </v-dialog>

        </v-app-bar>
    </nav>
</template>

<script>
import Register from '../views/Register'
import LgDial from '../views/Admin/LgDial'

export default {
    name: 'Navbar',
    components:{
        Register,
        LgDial
    },
    data: () => {
      return{
        dialog: false,
        dialogTwo: false,
        drawer: false,
        items: [
            {title: 'Frontend', icon: 'mdi-monitor', route: '/frontend'},
            {title: 'Backend', icon: 'mdi-monitor-multiple', route: '/backend'},
            {title: 'Mobile', icon: 'mdi-cellphone', route: '/mobile'},
            
        ]
      }
    },
    methods:{
        updateDial(upDial){
            this.dialog = upDial
        },

        updateDialTwo(upDialTwo){
            this.dialogTwo = upDialTwo
        }
    }
}
</script>

<style scoped>

.btn-top {
    margin-right: 30px;
}

</style>