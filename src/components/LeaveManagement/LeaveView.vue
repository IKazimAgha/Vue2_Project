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
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    color="primary"
                    elevation="7"
                    fab
                    @click="leaveRequest"
                ></v-btn>
                </div>
            </v-col>
        </div>
    </v-container>
</template>

<script>
import DataTableView from '../DataTable/DataTableView.vue';

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
  methods: {
    leaveRequest() {
      this.$router.push('/leave_request');
    },
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
