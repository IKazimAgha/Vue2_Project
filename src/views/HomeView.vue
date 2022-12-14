<template>
  <div>
    <side-bar />
    <hello-world />
  </div>
</template>

<script>
import firebase from 'firebase';
import HelloWorld from '../components/HelloWorld.vue';
import SideBar from '../components/SideBar/SidebarView.vue';

export default {
  name: 'HomeView',
  _name: 'SideBar',
  components: {
    HelloWorld,
    SideBar,
  },
  async beforeMount() {
    try {
      const user = await firebase.auth().currentUser;
      console.log({ user });
      this.$router.push('/login');
    } catch (e) {
      console.log({ e });
    }
  },
};
</script>
