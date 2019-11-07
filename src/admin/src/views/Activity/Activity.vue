<template>
  <router-view></router-view>
</template>

<script>
import $ from "jquery";
export default {
  name: "activity",
  mounted() {
    $("#activity").addClass("mm-active");
  },
  destroyed() {
    $("#activity").removeClass("mm-active");
  }
};
</script>