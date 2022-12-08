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
  <template v-slot:[`item.action`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
</template>
<script>
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
          value: 'assiged_to',
        },
        {
          text: 'ACTIONS',
          value: 'action',
        },
      ],
      // values: [
      //   {
      //     leave_type: 'Casual Leave',
      //     leave_status: 'APPROVED',
      //     leave_nature: 'Regular',
      //     start_date: 'Nov 25, 2022',
      //     end_date: 'Nov 27, 2022',
      //     assigned_to: '',
      //   },
      //   {
      //     leave_type: 'Casual Leave',
      //     leave_status: 'PENDING',
      //     leave_nature: 'Regular',
      //     start_date: 'Nov 25, 2022',
      //     end_date: 'Nov 27, 2022',
      //     assigned_to: '',
      //   },
      // ],
    };
  },
  mounted() {
    const leave = this.$store.state.leaves;
    console.log({ leave });
    this.leaves = leave;
    this.loading = false;
  },
};
</script>
