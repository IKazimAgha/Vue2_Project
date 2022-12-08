<template>
    <v-container>
        <!-- <div>
                <nav-bar-view />
        </div> -->
        <div>
            <v-col>
                <v-col>
                    <v-row class="justify-space-between">
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
            <v-col class="fab_button">
                <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <!-- <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn> -->
        <v-btn
          v-bind="attrs"
          v-on="on"
                    color="primary"
                    elevation="7"
                    fab
                ></v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
           cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
            </v-col>
        </div>
    </v-container>
</template>

<script>
import DataTableView from '../DataTable/DataTableView.vue';
// import getAllLeaves from '../../helpers/api';
// import NavBarView from '../NavBar/NavBarView.vue';
// import SidebarView from '../SideBar/SidebarView.vue';

export default {
  components: {
    DataTableView,
    // NavBarView,
    // SidebarView,
  },
  async mounted() {
    // const leaves = await getAllLeaves();
    // console.log({ leaves });
  },
  created() {
    this.$store.dispatch('getLeaves');
  },
  //   name: 'HelloWorld',

};
</script>

<style scoped>
    /* .fab_button{
        display: flex;
        justify-content: flex-end;
    } */
</style>
