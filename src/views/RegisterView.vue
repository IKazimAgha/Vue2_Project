<template>
  <div id="login_container">
      <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-text-field
        v-model="email"
        label="E-mail"
        required
        full-width
        ></v-text-field>

        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

        <v-btn
          color="primary"
          elevation="2"
          class="mr-4 mt-4"
          @click="login_action"
        >
          Register
        </v-btn>
        <p class="footer_text">
            Already have an account? <router-link to="/login"> Login </router-link>
        </p>
    </v-form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login_action',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login_action() {
      try {
        const user = await firebase
          .auth().createUserWithEmailAndPassword(this.email, this.password);
        console.log({ user });
        if (user) {
          this.$router.push('/');
        }
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>

<style scoped>
  #login_container{
      display: grid;
      justify-content: center;
  }
  .footer_text{
      margin-top: 20px;
  }
</style>
