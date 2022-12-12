<template>
    <v-col class="px-0 py-0 mb-10">
                  <v-card
                    elevation="2"
                    class="py-10 px-10"
                  >
                    <v-row>
                      <v-col cols="col-3">
                        <v-card-text>
                          Leave Type
                        </v-card-text>
                        <v-select
                          :items="headers"
                          label="Selected"
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col cols="col-3">
                        <v-card-text>
                          Start Date
                        </v-card-text>
                        <v-col
                          cols="12"
                          sm="6"
                          lg="12"
                          class="py-0"
                        >
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="true"
                            transition="scale-transition"
                            offset-y
                            :nudge-right="40"
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
                              scrollable
                            >
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                      </v-col>
                      <v-col cols="col-3">
                        <v-card-text>
                          End Date
                        </v-card-text>
                        <v-col
                          cols="12"
                          sm="6"
                          lg="12"
                          class="py-0"
                        >
                          <v-menu
                            ref="menu"
                            v-model="menu2"
                            :nudge-right="40"
                            :close-on-content-click="true"
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
                              scrollable
                            >
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                      </v-col>
                      <v-col class="col-4">
                        <v-card-text>
                          Status
                          <v-row class="my-2">
                            <v-checkbox
                              v-model="ex4"
                              label="Drafted"
                              color="red"
                              value="red"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              v-model="ex4"
                              label="Pending"
                              color="red"
                              value="red"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              v-model="ex4"
                              label="Approved"
                              color="red"
                              value="red"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              v-model="ex4"
                              label="Rejected"
                              color="red"
                              value="red"
                              hide-details
                            ></v-checkbox>
                          </v-row>
                        </v-card-text>
                      </v-col>
                    </v-row>
                    <v-row class="flex justify-end align-center">
                        <span>Clear</span>
                        <v-btn color="primary" class="ml-5">Filter</v-btn>
                    </v-row>
                  </v-card>
                </v-col>
</template>

<script>
export default {
  data() {
    return {
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
        .toISOString().substr(0, 10),
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
        .toISOString().substr(0, 10),
      // currentDate: (new Date()).toString(),
      menu: false,
      menu2: false,
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
};
</script>
