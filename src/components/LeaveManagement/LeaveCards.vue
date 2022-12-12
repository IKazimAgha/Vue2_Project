<template>
  <v-card
    :loading="loading"
    class="mx-5"
    max-width="274"
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

    <v-divider class="mx-4"></v-divider>

    <v-card-text>Remaining 3</v-card-text>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Remaining</v-chip>

        <v-chip>Requested</v-chip>

        <v-chip>Approved</v-chip>
      </v-chip-group>
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
