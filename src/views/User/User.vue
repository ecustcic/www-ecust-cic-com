<template>
  <div>
    <div class="particles">
      <vue-particles
        color="#8000ff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="polygon"
        :particleSize="4"
        linesColor="#8000ff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </div>
    <div id="navbarHolder"></div>
    <div id="user">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#user {
  padding: 1rem;
  margin: 0 0 0 0;
}
.particles {
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<script>
import $ from "jquery";
export default {
  name: "User",
  methods: {},
  mounted: function() {
    $("#navbarHolder").height($(".navbar").outerHeight(true));
  }
};
</script>
