<template>
  <div id="about">
    <div class="fullScreen-particles bg-primary-dark" id="home"></div>
  </div>
</template>

<style scoped>
.fullScreen-particles {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.fullScreen-particles .content-table {
  display: table;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.bg-primary-dark {
  background: #344880 !important;
  border-color: #344880;
}
@media (min-width: 992px) {
  .navbar.navbar-sticky.navbar-transparent-light.bg-white
    .navbar-nav
    .nav-link {
    color: rgba(255, 255, 255, 0.83);
  }
}
</style>

<script>
import $ from "jquery";
export default {
  name: "About",
  mounted() {
    $("#home").particleground({
      dotColor: "#65749f",
      lineColor: "#65749f"
      // dotColor: "#8000ff",
      // lineColor: "#8000ff"
    });
  }
};
</script>
