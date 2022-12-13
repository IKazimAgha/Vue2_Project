<template>
    <div>
        <div>
          <sidebar-view />
        </div>
        <v-container fluid>
            <v-col>
                <v-col>
                    <v-row class="justify-space-between">
                        <div>
                            <h2> Leave Mangement </h2>
                            <p> Leave Management </p>
                        </div>
                        <div>
                            <v-btn
                              elevation="1"
                              @click="showFilter = !showFilter"
                              text
                            >
                              Filter
                              <v-icon right>
                                mdi-filter
                              </v-icon>
                            </v-btn>
                        </div>
                    </v-row>
                </v-col>
                <v-col v-if="showFilter">
                  <leave-filter />
                </v-col>
                <v-col class="pa-0">
                    <data-table-view />
                </v-col>
            </v-col>
            <v-col class="fab_button">
                <div class="text-center">
                  <v-btn
                    color="primary"
                    elevation="7"
                    fab
                    @click="leaveRequest"
                >
                  <v-icon color="white">
                    mdi-edit
                  </v-icon>
                </v-btn>
              </div>
            </v-col>
        </v-container>
    </div>
</template>

<script>
import store from '@/store';
import DataTableView from '../DataTable/DataTableView.vue';
import SidebarView from '../SideBar/SidebarView.vue';
import LeaveFilter from './LeaveFilter.vue';

export default {
  components: {
    DataTableView,
    SidebarView,
    LeaveFilter,
  },
  data() {
    return {
      showFilter: false,
      users: {},
    };
  },
  async mounted() {
    // const leaves = await getAllLeaves();
  },
  created() {
    const user = store.state.users;
    this.$store.dispatch('getLeaves', user?.email);
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
