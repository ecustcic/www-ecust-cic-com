<template>
  <div id="app">
    <!-- 网页导航栏 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a class="navbar-brand" href="/">
        <img id="img" src="./assets/logo.png" width="30" />
        <i id="title">ECUST-CIC</i>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{active: navbar.index}" id="nav-index">
            <router-link class="nav-link" to="/">
              <i class="fa fa-home fa-fw"></i>首页
            </router-link>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.tech}" id="nav-print">
            <router-link class="nav-link" to="/tech">
              <i class="fa fa-code fa-fw" aria-hidden="true"></i>
              技术
            </router-link>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.service}" id="nav-course">
            <router-link class="nav-link" to="/service">
              <i class="fa fa-group fa-fw" aria-hidden="true"></i>
              服务
            </router-link>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar['e-sports']}" id="nav-file">
            <router-link class="nav-link" to="/e-sports">
              <i class="fa fa-gamepad fa-fw" aria-hidden="true"></i>
              电竞
            </router-link>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.others}" id="nav-info">
            <router-link class="nav-link" to="/others">
              <i class="fa fa-wrench fa-fw" aria-hidden="true"></i>
              其他
            </router-link>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.about}" id="nav-about">
            <router-link class="nav-link" to="/about">
              <i class="fa fa-info-circle fa-fw" aria-hidden="true"></i>
              关于
            </router-link>
          </li>
        </ul>

        <div class="my-2 my-lg-0">
          <ul class="navbar-nav mr-auto userinfo">
            <template v-if="token">
              <li class="nav-item" id="shopping-cart">
                <a class="nav-link" href="/shopping-cart">
                  <i class="fa fa-shopping-cart fa-fw" aria-hidden="true"></i>
                </a>
              </li>

              <li class="nav-item dropdown active userinfo" id="dropmenu" display="block">
                <a
                  role="button"
                  id="navbarDropdown"
                  class="nav-link dropdown-toggle"
                  href="javascript:void(0);"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >{{ user.username }}</a>
                <div class="dropdown-menu userinfoframe" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/user">
                    <i class="fa fa-info-circle fa-fw"></i>&nbsp;个人信息
                  </a>
                  <a class="dropdown-item" href="/order">
                    <i class="fa fa-print fa-fw"></i>&nbsp;订单管理
                  </a>
                  <template v-if="user.level == 'admin'">
                    <a class="dropdown-item" href="/admin" target="_blank">
                      <i class="fa fa-gear fa-fw"></i>&nbsp;后台管理
                    </a>
                  </template>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" @click="logout" href="javascript:void(0);">
                    <i class="fa fa-user-times fa-fw" aria-hidden="true"></i>&nbsp;退出登录
                  </a>
                </div>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <router-link to="/user/login">
                  <i class="fa fa-user-circle-o fa-fw" aria-hidden="true"></i>登录
                </router-link>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <router-link to="/user/register">
                  <i class="fa fa-edit fa-fw" aria-hidden="true"></i>注册
                </router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <div class="view">
      <!-- router页面 -->
      <router-view />
    </div>

    <!-- 页尾 -->
    <footer class="footer bg-light">
      <div class="container">
        <div class="text-muted text-center text-small" id="footercontext">
          <hr />
          <ul class="list-inline my-0">
            <li class="list-inline-item">
              <a href="//github.com/ecustcic" target="_blank">
                <i class="fa fa-github fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item" id="wechat">
              <a
                href="javascript:void(0);"
                data-toggle="popover"
                data-animation="true"
                data-container="#wechat"
                data-placement="top"
                data-trigger="manual"
                data-html="true"
                data-content="<img src='/img/logo.png' width='86'>"
              >
                <i class="fa fa-weixin fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                target="_blank"
                href="//shang.qq.com/wpa/qunwpa?idkey=af607f76d7922e9451289720bb66388bae6906fb605390e9c5c0d4b6b0304399"
              >
                <i class="fa fa-qq fa-fw"></i>
              </a>
            </li>
          </ul>
          <p class="mb-1">CopyRight &copy; 2019-2019 ECUST-CIC. All Rights Reserved</p>
          <ul class="list-inline my-0">
            <!-- <li class="list-inline-item">
              <a href="javascript:void(0);" target="_blank">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="javascript:void(0);" target="_blank">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="javascript:void(0);" target="_blank">Support</a>
            </li>-->
            <li class="list-inline-item">
              <a href="javascript:void(0);" target="_blank">沪ICP备18036740号</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#title {
  padding: 10px;
}
.userinfo {
  padding-right: 1.5em;
}
.userinfoframe {
  min-width: 5em;
  left: -2em;
  margin: 0;
}
.userinfo:hover > .userinfoframe {
  display: block;
}
</style>

<script>
import $ from "jquery";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    };
  },
  methods: {
    logout: function() {
      this.$store.commit("handleLogout");
      this.$router.push({ path: "/" });
    },
    windowsResize: function() {
      const height =
        $(window).innerHeight() -
        $(".navbar").outerHeight(true) -
        $(".footer").outerHeight(true) -
        21;
      $(".view").css("min-height", height + "px");
    }
  },
  computed: {
    navbar: function() {
      var path = this.$route.path.split("/");
      var active = {
        index: false,
        tech: false,
        service: false,
        "e-sports": false,
        others: false,
        about: false
      };
      switch (path[1]) {
        case "":
          active.index = true;
          break;
        case "tech":
          active.tech = true;
          break;
        case "service":
          active.service = true;
          break;
        case "e-sports":
          active["e-sports"] = true;
          break;
        case "others":
          active.others = true;
          break;
        case "about":
          active.about = true;
          break;
      }
      return active;
    },
    user: function() {
      return this.$store.state.user;
    },
    token: function() {
      return this.$store.state.token;
    }
  },
  mounted: function() {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]')
      .on("shown.bs.popover", function() {
        $('[data-toggle="popover"]').popover("update");
      })
      .on("mouseenter", function() {
        var that = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function() {
          $(that).popover("hide");
        });
      })
      .on("mouseleave", function() {
        var that = this;
        setTimeout(function() {
          if (!$(".popover:hover").length) {
            $(that).popover("hide");
          }
        }, 500);
      });
    this.windowsResize();
    var that = this;
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      that.screenWidth = document.documentElement.clientWidth; //窗口宽度
      that.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
  },
  watch: {
    // eslint-disable-next-line
    screenHeight: function(val) {
      this.windowsResize();
    }
  }
};
</script>
