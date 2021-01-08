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
            <v-divider></v-divider>            
            <v-list>
                <v-list-group
                :value="false"
                prepend-icon="mdi-account-key">
                    <template v-slot:activator>
                        <v-list-item-title>Admin</v-list-item-title>
                    </template>
                    <v-list-item v-for="item in itemsAdmin" :key="item.title" link :to="item.route">
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
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
            <v-btn class="btn-top" 
            large
            icon
            >
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
import Register from '../views/Register'
export default {
    name: 'Navbar',
    components:{
        Register
    },
    data: () => {
      return{
        dialog: false,
        drawer: false,
        items: [
            {title: 'Frontend', icon: 'mdi-monitor', route: '/frontend'},
            {title: 'Backend', icon: 'mdi-monitor-multiple', route: '/backend'},
            {title: 'Mobile', icon: 'mdi-cellphone', route: '/mobile'},
            
        ],
        itemsAdmin: [
            {title: 'Kelola Pendaftar', icon: 'mdi-account-convert', route: '/login'}
        ]
      }
    },
    methods:{
        updateDial(upDial){
            this.dialog = upDial
        }
    }
}
</script>

<style scoped>

.btn-top {
    margin-right: 30px;
}

</style>