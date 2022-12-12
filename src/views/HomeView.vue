<template>
  <div>
    <side-bar />
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import SideBar from '../components/SideBar/SidebarView.vue';

export default {
  name: 'HomeView',
  _name: 'SideBar',
  components: {
    HelloWorld,
    SideBar,
  },
};
</script>
