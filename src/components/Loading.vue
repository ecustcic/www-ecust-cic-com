<template>
  <div class="loading">
    <div
      class="modal"
      id="LoadingModal"
      tabindex="-1"
      role="dialog"
      data-backdrop="static"
      data-keyboard="false"
      aria-hidden="true"
      :style="style"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="w-100">
          <Spinner :name="type" :color="color" :fadeIn="fadeIn" :height="height"></Spinner>
          <h3>Loading...</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/spinkit/base.css";
@import "../assets/css/spinkit/fade-in.css";

@import "../assets/css/spinkit/rotating-plane.css";
@import "../assets/css/spinkit/double-bounce.css";
@import "../assets/css/spinkit/wave.css";
@import "../assets/css/spinkit/wandering-cubes.css";
@import "../assets/css/spinkit/pulse.css";
@import "../assets/css/spinkit/chasing-dots.css";
@import "../assets/css/spinkit/three-bounce.css";
@import "../assets/css/spinkit/circle.css";
@import "../assets/css/spinkit/cube-grid.css";
@import "../assets/css/spinkit/fading-circle.css";
@import "../assets/css/spinkit/folding-cube.css";
@import "../assets/css/spinkit/wordpress.css";

@import "../assets/css/spinkit/loaders-css.css";

@import "../assets/css/spinkit/circle-solid-spin.css";
@import "../assets/css/spinkit/dual-ring.css";
@import "../assets/css/spinkit/ellipsis.css";
@import "../assets/css/spinkit/facebook.css";
@import "../assets/css/spinkit/grid.css";
@import "../assets/css/spinkit/heart.css";
@import "../assets/css/spinkit/hourglass.css";
@import "../assets/css/spinkit/ring.css";
@import "../assets/css/spinkit/ripple.css";
@import "../assets/css/spinkit/roller.css";

@import "../assets/css/spinkit/clock.css";
@import "../assets/css/spinkit/hydrogen.css";
@import "../assets/css/spinkit/loadbar.css";
@import "../assets/css/spinkit/circle-fade.css";
@import "../assets/css/spinkit/moon.css";
</style>

<script>
import Spinner from "vue-spinkit";
export default {
  name: "Loading",
  components: {
    Spinner
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "three-bounce"
    },
    color: {
      type: String,
      required: false,
      default: "#f8f9fa"
    },
    fadeIn: {
      type: String,
      required: false,
      default: "quarter"
    },
    height: {
      type: String,
      required: false,
      default: "50"
    }
  },
  computed: {
    style() {
      let color = this.color !== "" ? "color: " + this.color + ";" : "";
      return color;
    }
  }
};
</script>