<template>
  <v-card
    :loading="loading"
    class="mx-5 my-5"
    max-width="274"
    max-height="200"
    @click="$emit('created', {leaveType: leaves.name})"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>{{leaves.name}}</v-card-title>

    <v-card-text class="py-0">Remaining 3</v-card-text>

    <v-card-text>
      <v-progress-linear
      background-color="orange"
      color="green"
      value="15"
    ></v-progress-linear>
      <div class="flex flex-wrap my-5">
        <span>
          <v-btn
            class="ma-2"
            x-small
            fab
            height="10px"
            width="10px"
            color="white"></v-btn>
          Remaining </span>
        <span>
          <v-btn
            class="ma-2"
            x-small
            height="10px"
            width="10px"
            fab
            color="orange"></v-btn>
          Requested </span>
        <span>
          <v-btn
            class="ma-2"
            x-small
            height="10px"
            width="10px"
            fab
            color="green"></v-btn>
          Approved </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['leaves', {
    created: { type: Function },
  }],
  data: () => ({
    loading: false,
    selection: 1,
  }),
};
</script>
