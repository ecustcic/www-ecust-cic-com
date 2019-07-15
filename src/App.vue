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
            <a class="nav-link" href="/">首页</a>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.print}" id="nav-print">
            <a class="nav-link" href="/tech">
              <i class="fa fa-code fa-fw" aria-hidden="true"></i>
              技术
            </a>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.course}" id="nav-course">
            <a class="nav-link" href="/service">
              <i class="fa fa-television fa-fw" aria-hidden="true"></i>
              服务
            </a>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.resource}" id="nav-file">
            <a class="nav-link" href="/e-sports">
              <i class="fa fa-file-text-o fa-fw" aria-hidden="true"></i>
              电竞
            </a>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.info}" id="nav-info">
            <a class="nav-link" href="/others">
              <i class="fa fa-wrench fa-fw" aria-hidden="true"></i>
              其他
            </a>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item" :class="{active: navbar.about}" id="nav-about">
            <a class="nav-link" href="/about">
              <i class="fa fa-info-circle fa-fw" aria-hidden="true"></i>
              关于
            </a>
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
                  href="#"
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
                  <a class="dropdown-item" @click="logout" href="#">
                    <i class="fa fa-user-times fa-fw" aria-hidden="true"></i>&nbsp;退出登录
                  </a>
                </div>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <a href="/user/login">
                  <i class="fa fa-user-circle-o fa-fw" aria-hidden="true"></i>登录
                </a>
              </li>&nbsp;&nbsp;
              <li class="nav-item">
                <a href="/user/register">
                  <i class="fa fa-location-arrow fa-fw" aria-hidden="true"></i>注册
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <!-- router页面 -->
    <router-view />

    <!-- 页尾 -->
    <footer class="footer mt-auto bg-light">
      <div class="container">
        <div class="my-3 text-muted text-center text-small" id="footercontext">
          <hr />
          <p>当前版本: 开发版v0.1.1</p>
          <a href="https://github.com/ecustcic">
            <i class="fa fa-github fa-fw"></i>
          </a>&nbsp;
          <a href="javascript:void(0);">
            <i
              class="fa fa-weixin fa-fw"
              data-toggle="popover"
              data-animation="true"
              data-container="body"
              data-placement="right"
              data-html="true"
              data-content="<img src='/img/logo.png' width='86'>"
            ></i>
          </a>&nbsp;
          <a
            target="_blank"
            href="//shang.qq.com/wpa/qunwpa?idkey=fa579c8b01a58048503016a0112a0495bb049c9dd8bb1e54120c58c2f250d9fe"
          >
            <i class="fa fa-qq fa-fw"></i>
          </a>
          <p class="mb-1">CopyRight &copy; 2019-2019 ECUST-CIC. All Rights Reserved</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#" target="_blank">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="#" target="_blank">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#" target="_blank">Support</a>
            </li>
            <li class="list-inline-item">
              <a href="#" target="_blank">沪ICP备18036740号</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
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
.content {
  min-height: 100%;
}
</style>

<script>
import $ from "jquery";
export default {
  methods: {
    logout: function() {
      this.$store.commit("handleLogout");
      this.$router.push({ path: "/" });
    }
  },
  computed: {
    navbar: function() {
      var path = this.$route.path.split("/");
      var active = {
        index: false,
        print: false,
        course: false,
        resource: false,
        info: false,
        about: false
      };
      switch (path[1]) {
        case "":
          active.index = true;
          break;
        case "print":
          active.print = true;
          break;
        case "course":
          active.course = true;
          break;
        case "resource":
          active.resource = true;
          break;
        case "info":
          active.info = true;
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
  }
};
</script>
