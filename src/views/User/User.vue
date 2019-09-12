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
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalTitle">该功能暂未开放</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">敬请期待</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
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
    $("#exampleModal").modal('show');
  }
};
</script>
