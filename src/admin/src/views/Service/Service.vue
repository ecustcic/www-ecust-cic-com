<template>
  <router-view></router-view>
</template>

<script>
import $ from "jquery";
export default {
  name: "service",
  mounted() {
    $("#service").addClass("mm-active");
  },
  destroyed() {
    $("#service").removeClass("mm-active");
  }
};
</script>