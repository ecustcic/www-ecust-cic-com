<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section bg-primary-dark" id="hero">
      <vue-particles
        color="#bcd2ee"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="6"
        linesColor="#bcd2ee"
        :linesWidth="3"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      ></vue-particles>
      <div class="content-table absolute">
        <div class="content-middle">
          <div class="container">
            <div class="row align-items-center">
              <div class="text-center mr-auto ml-auto">
                <img src="@/assets/logo-cn.png" class="py-4 wow fadeIn" alt width="90%" />
                <div>
                  <button
                    class="btn btn-outline-primary"
                    @click="$refs.fullpage.api.moveSectionDown()"
                  >
                    <i class="fa fa-hand-o-right fa-fw"></i>
                    Learn About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="history">
      <div class="content-table absolute">
        <div class="content-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-7 text-left">
                <div class="content-title wow fadeInDown">
                  <h3>History</h3>
                  <div class="line-left"></div>
                </div>
                <div class="content-text wow fadeInLeft">
                  华东理工大学计算机信息交流协会成立于1998年3月，由计算机协会与网络协会合并而来。
                </div>
              </div>
              <div class="col-md-5"></div>
            </div>
          </div>
        </div>
        <!-- <div class="content-row">
          <div class="content-bottom">
            <button class="btn btn-default">
              <i class="fa fa-arrow-circle-o-down fa-5x"></i>
            </button>
          </div>
        </div>-->
      </div>
    </div>
    <div class="section" id="2">
      <div class="content-table absolute">
        <div class="content-middle">
          <h3>Tech</h3>
        </div>
      </div>
    </div>
  </full-page>
</template>

<style scoped>
#about {
  width: 100%;
  height: 100%;
}
.align-items-center {
  align-items: center !important;
  -webkit-box-align: center !important;
}
.bg-primary-dark {
  background: rgb(181, 181, 181) !important;
  border-color: rgb(181, 181, 181);
}
/* .text-alpha-white {
  color: rgba(255, 255, 255, 0.73);
} */
.section {
  position: relative;
}
.section .absolute {
  position: absolute;
}
.section .content-table {
  display: table;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.content-table {
  display: table-row;
}
.content-table .content-middle {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}
.content-table .content-bottom {
  display: table-cell;
  vertical-align: bottom;
  width: 100%;
}
.content-text {
  position: relative;
  background-color: rgb(181, 181, 181);
  width: 40%;
  padding: 25px;
  z-index: 1;
}

.btn:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 100%;
  z-index: -1;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
.btn:hover,
.btn:focus {
  box-shadow: none;
  outline: 0 !important;
}
.btn:hover:before,
.btn:focus:before {
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  z-index: -1;
}
.btn-white-outline {
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
}
.btn-white-outline:hover,
.btn-white-outline:focus,
.btn-white-outline:active {
  color: #333;
  border-color: #fff;
  transform: translateY(-2px);
  -webkit-transform: translateY(-2px);
}
.btn-white-outline:hover:before,
.btn-white-outline:focus:before,
.btn-white-outline:active:before {
  width: 100%;
  background-color: #fff;
}
.btn-outline-primary {
  border: 2px solid #24e6df;
  background-color: transparent;
  color: #24e6df;
}
.btn-outline-primary:hover,
.btn-outline-primary:focus,
.btn-outline-primary:active {
  color: #fff;
  border-color: #bcd2ee;
  background-color: transparent;
  transform: translateY(-2px);
  -webkit-transform: translateY(-2px);
}
.btn-outline-primary:hover:before,
.btn-outline-primary:focus:before,
.btn-outline-primary:active:before {
  width: 100%;
  background-color: #bcd2ee;
}

.line-left {
  width: 60px;
  height: 3px;
  background-color: #32c5d2;
  margin: 0 0 30px 0;
}
</style>

<script>
import $ from "jquery";
import { WOW } from "wowjs";

export default {
  name: "About",
  data() {
    return {
      options: {
        licenseKey: null,
        scrollBar: true
      }
    };
  },
  mounted() {
    // $(
    //   ".navbar.navbar-sticky.navbar-transparent-light.bg-white .navbar-nav"
    // ).addClass("navbar-text-white");
    $("#app").css("height", "100%");
    $(".view").css("height", "100%");
    $(".footer").css("display", "none");

    // $("#hero").particleground({
    //   dotColor: "rgb(188, 210, 238)",
    //   lineColor: "rgb(188, 210, 238)"
    //   // dotColor: "#8000ff",
    //   // lineColor: "#8000ff"
    // });

    // 滚动进入特效
    new WOW({
      animateClass: "animated",
      offset: 100,
      live: true,
      mobile: false
    }).init();
    setTimeout(function() {
      $(".wow").css("opacity", "1");
    }, 100);
  },
  destroyed() {
    // $(
    //   ".navbar.navbar-sticky.navbar-transparent-light.bg-white .navbar-nav"
    // ).removeClass("navbar-text-white");
    $("#app").attr("style", "");
    $("#app").removeAttr("style");
    $(".view").css("height", "");
    $(".footer").attr("style", "");
    $(".footer").removeAttr("style");
  }
};
</script>
