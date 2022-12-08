<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
        <v-col class="card_col">
            <leave-cards
                v-for="types in leaveArray"
                :key="types.id"
                :leaves="types"
                @created="handleLeaveType"
            />
        </v-col>

    <v-container class="input_container">
      <v-row>
        <v-col
          cols="12"
          sm="5"
          class="px-0"
        >
         <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Start Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu = false"
        ></v-date-picker>
      </v-menu>
        </v-col>

        <v-col
          cols="12"
          sm="5"
          class="px-0 ml-10"
        >
          <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date2"
            label="End Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date2"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
        </v-col>
      </v-row>
      <v-row>
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
</template>

<script>
import { createLeave } from '@/helpers/api';
import LeaveCards from './LeaveCards.vue';
// import CreateLeave from '../../helpers/api';

export default {
  components: {
    LeaveCards,
  },
  data: () => ({
    loading: false,
    leaveType: '',
    selection: 1,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
      .toISOString().substr(0, 10),
    date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
      .toISOString().substr(0, 10),
    // currentDate: (new Date()).toString(),
    menu: false,
    menu2: false,
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
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;

      // eslint-disable-next-line no-return-assign
      setTimeout(() => this.loading = false, 2000);
    },
    handleLeaveType(leaveType) {
      console.log(leaveType.leaveType);
      this.leaveType = leaveType.leaveType;
    },
    async submitLeave() {
      console.log(this.leaveType, this.date2, this.date, this.leave_reason);
      const leaveData = {
        leave_type: this.leaveType,
        start_date: this.date,
        end_date: this.date2,
        reason: this.leave_reason,
        leave_status: 'Pending',
        assigned_to: 'Ismaeel',
      };
      createLeave(leaveData);
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
</style>
