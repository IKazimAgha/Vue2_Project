<template>
  <div id="login_container">
    <v-card class="card_height" max-width="400">
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
            label="Password"
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
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase';
import { createUser } from '@/helpers/api';

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
        if (user) {
          const userData = {
            email: this.email,
            password: this.password,
            access_token: user.user.uid,
          };
          await sessionStorage.setItem('email', this.email);
          await createUser(userData);
          this.$store.dispatch('addUsers', userData);
          this.$router.push('/leave_page');
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
      background-image: url(https://syshcm.systemsltd.com/EssPlus/login-bg.e69a8f472a164296cfd3.jpg);
      height: 100%;
  }
  .footer_text{
      margin-top: 20px;
  }

  .card_height{
    height: 70%;
    padding: 5%;
    margin-top: 20%;
    width: 400px;
  }
</style>
