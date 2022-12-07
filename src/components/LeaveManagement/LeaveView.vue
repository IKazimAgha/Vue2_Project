<template>
    <v-container>
        <!-- <div>
                <nav-bar-view />
        </div> -->
        <div>
            <v-col>
                <v-col>
                    <v-row class="justify-lg-space-between">
                        <div>
                            <h2> Leave Mangement </h2>
                            <p> Leave Management </p>
                        </div>
                        <div>
                            <v-btn> Filters </v-btn>
                        </div>
                    </v-row>
                </v-col>
                <v-col class="pa-0">
                    <data-table-view />
                </v-col>
            </v-col>
        </div>
    </v-container>
</template>

<script>
import DataTableView from '../DataTable/DataTableView.vue';
// import NavBarView from '../NavBar/NavBarView.vue';
// import SidebarView from '../SideBar/SidebarView.vue';

export default {
  components: {
    DataTableView,
    // NavBarView,
    // SidebarView,
  },
  //   name: 'HelloWorld',

};
</script>
