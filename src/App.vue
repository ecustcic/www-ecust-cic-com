<template>
  <div id="app">
    <!-- 网页导航栏 -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white navbar-transparent-light navbar-sticky"
    >
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="./assets/logo-cic.png" alt height="35" />
          <!-- <img src="./assets/logo-cn.png" alt class="logo-scroll" height="35" /> -->
          <!-- <img src="./assets/logo-cic.png" alt class="logo-trans" height="35" /> -->
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact>
                <i class="fa fa-home fa-fw"></i>
                首页
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tech">
                <i class="fa fa-code fa-fw" aria-hidden="true"></i>
                技术
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/service">
                <i class="fa fa-group fa-fw" aria-hidden="true"></i>
                服务
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/publicity">
                <i class="fa fa-share-alt fa-fw" aria-hidden="true"></i>
                组宣
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/e-sports">
                <i class="fa fa-gamepad fa-fw" aria-hidden="true"></i>
                电竞
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="dropdown-other"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-wrench fa-fw" aria-hidden="true"></i>
                其他
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-other">
                <a class="dropdown-item" href="/others/sign">
                  <i class="fa fa-calendar-check-o fa-fw mr-2"></i>签到
                </a>
              </div>
            </li>
            <li class="nav-item" id="nav-about">
              <router-link class="nav-link" to="/about">
                <i class="fa fa-info-circle fa-fw" aria-hidden="true"></i>
                关于
              </router-link>
            </li>
          </ul>

          <div class="my-2 my-lg-0">
            <ul class="navbar-nav mr-auto">
              <template v-if="token">
                <li class="nav-item dropdown" id="dropmenu">
                  <a
                    role="button"
                    id="navbarDropdown"
                    class="nav-link dropdown-toggle"
                    href="javascript:void(0);"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img :src="head" />
                    {{ name }}
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/user/password">
                      <i class="fa fa-key fa-fw mr-2"></i>修改密码
                    </a>
                    <a class="dropdown-item" href="/user/info">
                      <i class="fa fa-info-circle fa-fw mr-2"></i>个人信息
                    </a>
                    <template v-if="admin">
                      <a class="dropdown-item" href="/admin" target="_blank">
                        <i class="fa fa-gear fa-fw mr-2"></i>后台管理
                      </a>
                    </template>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" @click="logout" href="javascript:void(0);">
                      <i class="fa fa-sign-out fa-fw mr-2" aria-hidden="true"></i>退出登录
                    </a>
                  </div>
                </li>
              </template>
              <template v-else>
                <li class="nav-item">
                  <router-link class="user-link" to="/user/login">
                    <i class="fa fa-sign-in fa-fw" aria-hidden="true"></i>登录
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="user-link" to="/user/register">
                    <i class="fa fa-edit fa-fw" aria-hidden="true"></i>注册
                  </router-link>
                </li>
              </template>
            </ul>
          </div>
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
                data-content="<img src='/img/cic_qrcode.jpg' width='86'>"
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
body,
.fullscreen {
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

.navbar .container,
.navbar .container-fluid {
  position: relative;
}

/* .navbar .navbar-brand {
  margin-left: -30px;
} */

/* .navbar .navbar-nav {
  margin-left: 135px;
} */

@media (max-width: 992px) {
  .navbar .navbar-nav {
    margin: 0px;
  }
}

.navbar .navbar-nav .nav-link {
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  border-top: 2px solid transparent;
  cursor: pointer;
}

.navbar-light.navbar .navbar-nav .nav-link {
  color: rgba(70, 73, 92, 0.6);
}

.navbar-light.navbar .navbar-nav .nav-link:hover,
.navbar-light.navbar .navbar-nav .nav-link:focus,
.navbar-light.navbar .navbar-nav .nav-link:active,
.navbar-light.navbar .navbar-nav .nav-link.active {
  color: #1ecfca;
  border-top-color: #1ecfca;
}

.navbar .navbar-nav .dropdown-menu {
  min-width: 0;
  text-align: center;
  font-size: 0.8rem;
}

/* .navbar .navbar-nav .user-link {
  color: #1ecfca;
} */

@media (min-width: 992px) {
  .navbar.navbar-sticky.navbar-transparent-light.bg-white {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: transparent !important;
  }
  /* .navbar.navbar-sticky.navbar-transparent-light.bg-white .navbar-brand > img {
    position: absolute;
    top: 25px;
  } */

  /* logo */
  .navbar.navbar-sticky.navbar-transparent-light.bg-white
    .navbar-brand
    > img.logo-scroll {
    opacity: 0;
  }

  .navbar.navbar-sticky.navbar-transparent-light.bg-white
    .navbar-nav
    .nav-link {
    color: rgba(0, 0, 0, 0.73);
  }
  .navbar.navbar-sticky.navbar-transparent-light.bg-white
    .navbar-nav.navbar-text-white
    .nav-link {
    color: rgba(255, 255, 255, 0.83);
  }
  .navbar.navbar-sticky.navbar-transparent-light.bg-white
    .navbar-nav
    .nav-link:hover,
  .navbar.navbar-sticky.navbar-transparent-light.bg-white
    .navbar-nav
    .nav-link.active,
  .navbar.navbar-sticky.navbar-transparent-light.bg-white
    .navbar-nav
    .nav-link:active,
  .navbar.navbar-sticky.navbar-transparent-light.bg-white
    .navbar-nav
    .nav-link:focus {
    color: #1ecfca;
  }
  .navbar-expand-lg.navbar {
    padding-top: 0;
    padding-bottom: 0;
    z-index: 999;
  }
  .navbar-expand-lg.navbar .navbar-nav .nav-item {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .navbar-expand-lg.navbar .navbar-nav .nav-item:last-child {
    padding-right: 0px;
  }
  .navbar-expand-lg.navbar .navbar-nav .nav-link {
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-nav .nav-item .nav-link.btn {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
    border: 0px !important;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 13px;
    margin-left: 1rem;
  }
  .navbar.navbar-transparent-light.bg-white.navbar-sticky.fixed-top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    animation: fadeInDown 0.4s;
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
    background-color: rgba(255, 255, 255, 0.98) !important;
  }
  .navbar.navbar-transparent-light.bg-white.navbar-sticky.fixed-top
    .navbar-brand
    > img.logo-scroll {
    opacity: 1;
  }
  .navbar.navbar-transparent-light.bg-white.navbar-sticky.fixed-top
    .navbar-brand
    > img.logo-trans {
    opacity: 0;
  }
  .navbar.navbar-transparent-light.bg-white.navbar-sticky.fixed-top
    .navbar-nav
    .nav-link {
    color: rgba(0, 0, 0, 0.73);
  }
  .navbar.navbar-transparent-light.bg-white.navbar-sticky.fixed-top
    .navbar-nav
    .nav-link:hover,
  .navbar.navbar-transparent-light.bg-white.navbar-sticky.fixed-top
    .navbar-nav
    .nav-link.active,
  .navbar.navbar-transparent-light.bg-white.navbar-sticky.fixed-top
    .navbar-nav
    .nav-link:active,
  .navbar.navbar-transparent-light.bg-white.navbar-sticky.fixed-top
    .navbar-nav
    .nav-link:focus {
    color: #1ecfca;
  }

  #navbarDropdown {
    outline: none;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.wow {
  opacity: 0;
}
</style>

<script>
import $ from "jquery";
import Identicon from "identicon.js";
import { Hash } from "crypto";
export default {
  data() {
    return {
      head: null,
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    };
  },
  methods: {
    windowsResize: function() {
      const height =
        $(window).innerHeight() -
        // $(".navbar").outerHeight(true) -
        $(".footer").outerHeight(true) -
        21;
      $(".view").css("min-height", height + "px");
    },
    showHead: function() {
      if (this.token) {
        let hash = Hash("md5");
        hash.update(this.name);
        var imgData = new Identicon(hash.digest("hex"), 30).toString();
        this.head = "data:image/png+xml;base64," + imgData;
      }
    },
    logout: function() {
      this.$cookies.remove("ECUST-CIC");
      this.$store.commit("logout");
      this.$router.go(0);
    }
  },
  computed: {
    name: function() {
      return this.$store.state.name;
    },
    admin: function() {
      return this.$store.state.admin;
    },
    token: function() {
      return this.$store.state.token;
    }
  },
  beforeMount: function() {
    if (this.$cookies.isKey("ECUST-CIC")) {
      const token = this.$cookies.get("ECUST-CIC");
      this.$store.commit("login", token);
    }
  },
  mounted: function() {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]')
      .on("shown.bs.popover", function() {
        $(this).popover("update");
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

    // navbar
    $(document).on("scroll", function() {
      if ($(document).scrollTop() > 150) {
        $(".navbar-sticky").addClass("fixed-top");
      } else {
        $(".navbar-sticky").removeClass("fixed-top");
      }
    });
    $('[data-toggle="dropdown"]').bootstrapDropdownHover();

    // resize
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
    },
    token: function() {
      this.showHead();
      this.$nextTick(function() {
        $('[data-toggle="dropdown"]').bootstrapDropdownHover();
      });
    }
  }
};
</script>
