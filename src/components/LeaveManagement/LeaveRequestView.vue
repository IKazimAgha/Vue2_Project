<template>
  <div>
    <sidebar-view />
    <v-card
    :loading="loading"
    class="mx-6 my-12"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
        <v-col v-if="showCards" class="card_col col-12 flex-wrap">
            <leave-cards
                v-for="types in leaveArray"
                :key="types.id"
                :leaves="types"
                @created="handleLeaveType"
            />
        </v-col>
    <v-row class="top-bar-style" v-if="!showCards">
      <v-col cols="2">
        {{this.leaveType}}
      </v-col>
      <br />
      <v-col cols="2">
        Total: 3
      </v-col>
      <br />
      <v-col cols="2">
        Approvd 0
      </v-col>
      <br />
      <v-col cols="2">
        Requested 0
      </v-col>
      <br />
      <v-col cols="2">
        Remaining 0
      </v-col>
      <v-col cols="auto">
        <v-btn @click="showCards = !showCards" rounded>
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-container class="input_container">
      <v-row>
        <v-col
                          cols="12"
                          sm="6"
                          lg="5"
                          class="py-0"
                        >
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="date"
                                label="Start Date"
                                append-icon="mdi-calendar"
                                outlined
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="date"
                              no-title
                              scrollable
                            >
                            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col
                          cols="12"
                          sm="6"
                          lg="5"
                          class="py-0"
                        >
                          <v-menu
                            ref="menu"
                            v-model="menu2"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="date2"
                                label="End Date"
                                append-icon="mdi-calendar"
                                outlined
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="date2"
                              no-title
                              scrollable
                            >
                            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row class="mr-12">
          <v-textarea
            v-model="leave_reason"
            clearable
            clear-icon="mdi-close-circle"
            label="Reason"
            rows="2"
            row-height="15"
            value="Add reason."
          ></v-textarea>
      </v-row>
      <v-row class="button_end">
          <v-btn color="primary" @click="submitLeave">
              Submit for approval
          </v-btn>
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script>
import { createLeave } from '@/helpers/api';
import store from '@/store';
import LeaveCards from './LeaveCards.vue';
import SidebarView from '../SideBar/SidebarView.vue';

export default {
  components: {
    LeaveCards,
    SidebarView,
  },
  data: () => ({
    loading: false,
    leaveType: '',
    leave_reason: '',
    showCards: true,
    selection: 1,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
      .toISOString().substr(0, 10),
    date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
      .toISOString().substr(0, 10),
    // currentDate: (new Date()).toString(),
    menu: false,
    menu2: false,
    startMenu: false,
    endMenu: false,
    users: {},
    leaveArray: [
      {
        id: 1,
        name: 'Annual Leave',
        remaining: '3',
      },
      {
        id: 2,
        name: 'Casual Leave',
        remaining: '3',
      },
      {
        id: 3,
        name: 'Leave Without Pay',
        remaining: '3',
      },
      {
        id: 4,
        name: 'Paternity Leave',
        remaining: '3',
      },
      {
        id: 5,
        name: 'Sick Leave',
        remaining: '3',
      },
      {
        id: 6,
        name: 'Bereavement Leave',
        remaining: '3',
      },
    ],
  }),

  async mounted() {
    const user = await store.state.users;
    console.log({ user });
    this.users = user;
  },
  methods: {
    reserve() {
      this.loading = true;

      // eslint-disable-next-line no-return-assign
      setTimeout(() => this.loading = false, 2000);
    },
    handleLeaveType(leaveType) {
      this.leaveType = leaveType.leaveType;
      this.showCards = false;
    },
    async submitLeave() {
      const leaveData = {
        leave_type: this.leaveType,
        start_date: this.date,
        end_date: this.date2,
        reason: this.leave_reason,
        leave_value: 'Pending',
        leave_nature: 'Regular',
        users: this.users?.email,
        assigned_to: 'Ismaeel',
      };
      this.$store.dispatch('addLeaves', leaveData);
      createLeave(leaveData);
      this.$router.push('/leave_page');
    },
  },
};
</script>

<style scoped>
.card_col{
    display: flex;
    /* flex-wrap: wrap; */
}
.button_end{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
    margin-right: 20px;
}
.input_container{
    margin: 20px 20px;
    width: 100%;
    max-width: inherit;
}
.top-bar-style{
  background: #f9fbff;
  padding: 0px 20px;
  margin: 20px 20px;
}
</style>
