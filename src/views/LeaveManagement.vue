<template>
  <div>
    <side-bar />
    <leave-view />
  </div>
</template>

<script>
import LeaveView from '../components/LeaveManagement/LeaveView.vue';
import SideBar from '../components/SideBar/SidebarView.vue';

export default {
  name: 'LeaveView',
  __name: 'SideBar',

  components: {
    LeaveView,
    SideBar,
  },
};
</script>
