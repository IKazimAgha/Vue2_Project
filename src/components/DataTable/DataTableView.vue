<template>
  <v-data-table
    :headers="headers"
    :items="leaves"
    :items-per-page="5"
    :loading="loading"
    item-key="name"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  >
  <template v-slot:[`item.leave_value`]="{ item }">
        <v-chip
          :color="getColor(item.leave_value)"
          dark
        >
          {{ item.leave_value }}
        </v-chip>
  </template>
  <template v-slot:[`item.start_date`]="{ item }">
    <span>{{moment(item.start_date).format('MMM DD, YYYY')}}</span>
  </template>
  <template v-slot:[`item.end_date`]="{ item }">
    <span>{{moment(item.end_date).format('MMM DD, YYYY')}}</span>
  </template>
  <template v-slot:[`item.action`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="displayLeaveInfo(item)"
      >
        mdi-arrow-expand-all
      </v-icon>
      <v-icon
        small
        @click="delete_item(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
</template>
<script>
import { deleteLeave } from '@/helpers/api';

export default {
  data() {
    return {
      leaves: [],
      loading: true,
      options: {},
      headers: [
        {
          text: 'LEAVE TYPE',
          value: 'leave_type',
        },
        {
          text: 'LEAVE STATUS',
          value: 'leave_value',
        },
        {
          text: 'NATURE',
          value: 'leave_nature',
        },
        {
          text: 'START DATE',
          value: 'start_date',
        },
        {
          text: 'END DATA',
          value: 'end_date',
        },
        {
          text: 'ASSIGNED TO',
          value: 'assigned_to',
        },
        {
          text: 'ACTIONS',
          value: 'action',
        },
      ],
    };
  },
  methods: {
    delete_item(value) {
      deleteLeave(value.id);
      const result = this.leaves.filter((item) => item.id !== value.id);
      this.leaves = result;
      console.log('delete leaves', result);
    },
    getColor(leave) {
      if (leave === 'Approved') return 'green';
      if (leave === 'Pending') return 'orange';
      if (leave === 'Rejected') return 'red';
      return 'green';
    },
  },
  created() {
    const leave = this.$store.state.leaves;
    this.leaves = leave;
    this.loading = false;
  },
};
</script>
