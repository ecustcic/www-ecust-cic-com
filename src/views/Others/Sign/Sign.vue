<template>
  <div id="sign">
    <div id="navbarHolder"></div>
    <div class="live2d-panel">
      <div class="message" style="opacity:0"></div>
      <div class="live2d">
        <canvas id="live2d" width="280" height="250"></canvas>
      </div>
      <div class="hide-button">隐藏</div>
    </div>
    <button class="btn btn-info w-50 mt-4" id="start" @click="startSign">发起签到</button>
    <div class="scan row">
      <div class="col-md-4 scan-qrcode">
        <div class="scan-qrcode-wrapper image-popup" :data-mfp-src="qrcode">
          <template v-if="loading">
            <i class="fa fa-spinner fa-pulse loading"></i>
          </template>
          <template v-else>
            <vue-qr
              :text="scanURL"
              :size="qrcode_width"
              :margin="10"
              :dotScale="1"
              :callback="maxmize_qrcode"
              ref="qrcode"
            ></vue-qr>
            <div class="text-muted image-popup" :data-mfp-src="qrcode">点击放大</div>
          </template>
        </div>
      </div>
      <div class="col-md-8 scan-list">
        <div class="scan-list-wrapper row"></div>
      </div>
    </div>
    <!-- TODO: Support Pause and Resume -->
    <button class="btn btn-info w-50" id="end" @click="closeWebsocket">关闭</button>
  </div>
</template>

<style scoped>
.live2d-panel {
  user-select: none;
  position: relative;
  margin: 30px auto 0 auto;
  bottom: 0;
  width: 280px;
  height: 250px;
  z-index: 10000;
  font-size: 0;
  transition: all 0.3s ease-in-out;
}
.live2d-panel .message {
  position: absolute;
  opacity: 0;
  width: 300px;
  height: auto;
  top: -60px;
  margin: auto;
  padding: 7px;
  text-align: center;
  border: 1px solid rgba(255, 137, 255, 0.4);
  border-radius: 12px;
  background-color: rgba(255, 137, 255, 0.2);
  box-shadow: 0 3px 15px 2px rgba(255, 137, 255, 0.4);
  font-size: 13px;
  font-weight: 400;
  text-overflow: ellipsis;
  text-transform: uppercase;
  overflow: hidden;
  animation-delay: 5s;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-name: shake;
  animation-timing-function: ease-in-out;
}
.live2d-panel .live2d {
  position: absolute;
  width: 280px;
  height: 250px;
  margin: 0 auto;
}
.live2d-panel .hide-button {
  position: absolute;
  top: 10px;
  right: 0;
  /* bottom: 30px; */
  display: none;
  overflow: hidden;
  /* padding: 4px; */
  width: 60px;
  height: 20px;
  border: 1px solid rgba(255, 137, 255, 0.4);
  border-radius: 12px;
  background: rgba(255, 137, 255, 0.2);
  box-shadow: 0 3px 15px 2px rgba(255, 137, 255, 0.4);
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.live2d-panel .hide-button:hover {
  border: 1px solid #f4a7b9;
  background: #f4f6f8;
}

@keyframes shake {
  2% {
    transform: translate(0.5px, -1.5px) rotate(-0.5deg);
  }

  4% {
    transform: translate(0.5px, 1.5px) rotate(1.5deg);
  }

  6% {
    transform: translate(1.5px, 1.5px) rotate(1.5deg);
  }

  8% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }

  10% {
    transform: translate(0.5px, 2.5px) rotate(0.5deg);
  }

  12% {
    transform: translate(1.5px, 1.5px) rotate(0.5deg);
  }

  14% {
    transform: translate(0.5px, 0.5px) rotate(0.5deg);
  }

  16% {
    transform: translate(-1.5px, -0.5px) rotate(1.5deg);
  }

  18% {
    transform: translate(0.5px, 0.5px) rotate(1.5deg);
  }

  20% {
    transform: translate(2.5px, 2.5px) rotate(1.5deg);
  }

  22% {
    transform: translate(0.5px, -1.5px) rotate(1.5deg);
  }

  24% {
    transform: translate(-1.5px, 1.5px) rotate(-0.5deg);
  }

  26% {
    transform: translate(1.5px, 0.5px) rotate(1.5deg);
  }

  28% {
    transform: translate(-0.5px, -0.5px) rotate(-0.5deg);
  }

  30% {
    transform: translate(1.5px, -0.5px) rotate(-0.5deg);
  }

  32% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }

  34% {
    transform: translate(2.5px, 2.5px) rotate(-0.5deg);
  }

  36% {
    transform: translate(0.5px, -1.5px) rotate(0.5deg);
  }

  38% {
    transform: translate(2.5px, -0.5px) rotate(-0.5deg);
  }

  40% {
    transform: translate(-0.5px, 2.5px) rotate(0.5deg);
  }

  42% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }

  44% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }

  46% {
    transform: translate(1.5px, -0.5px) rotate(-0.5deg);
  }

  48% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }

  50% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }

  52% {
    transform: translate(-0.5px, 1.5px) rotate(0.5deg);
  }

  54% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }

  56% {
    transform: translate(0.5px, 2.5px) rotate(1.5deg);
  }

  58% {
    transform: translate(2.5px, 2.5px) rotate(0.5deg);
  }

  60% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }

  62% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }

  64% {
    transform: translate(-1.5px, 1.5px) rotate(1.5deg);
  }

  66% {
    transform: translate(0.5px, 2.5px) rotate(1.5deg);
  }

  68% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }

  70% {
    transform: translate(2.5px, 2.5px) rotate(0.5deg);
  }

  72% {
    transform: translate(-0.5px, -1.5px) rotate(1.5deg);
  }

  74% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }

  76% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }

  78% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }

  80% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
  }

  82% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
  }

  84% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }

  86% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }

  88% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }

  90% {
    transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
  }

  92% {
    transform: translate(-1.5px, -1.5px) rotate(1.5deg);
  }

  94% {
    transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }

  96% {
    transform: translate(2.5px, -0.5px) rotate(-0.5deg);
  }

  98% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }

  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }
}

.scan {
  margin: 0;
  padding: 10px;
}

.scan-qrcode {
  padding: 0;
  display: none;
}
.scan-qrcode .scan-qrcode-wrapper {
  height: 100%;
  width: 100%;
  min-height: 250px;
  padding: 25px;
  display: inline-block;
  vertical-align: middle;
  border: 2px solid #000;
  border-radius: 0.25rem;
}
.scan-qrcode .scan-qrcode-wrapper .loading {
  font-size: 100px;
}
.scan-list {
  padding: 0;
  display: none;
}
.scan-list .scan-list-wrapper {
  height: 100%;
  min-height: 250px;
  overflow-y: scroll;
  padding: 30px;
  background-color: #ebe9e9;
  border: 2px solid #000;
  border-radius: 0.25rem;
}

#end {
  display: none;
}
</style>

<script>
import $ from "jquery";
import { Hash } from "crypto";
import Identicon from "identicon.js";
export default {
  name: "sign",
  data() {
    return {
      qrcode: null,
      qrcode_width: null,
      webSocket: null,
      loading: true,
      loaded: false,
      popup: false,
      scanURL: null,
      scanID: null,
      qrcode_id: null,
      ping_id: null
    };
  },
  methods: {
    startSign: function() {
      // eslint-disable-next-line
      var captcha = new TencentCaptcha(
        this.globals.TencentAPPID,
        this.startWebsocket
      );
      captcha.show();
    },
    startWebsocket: function() {
      if ("WebSocket" in window) {
        console.log("Start Websocket...");
        var protol =
          process.env.NODE_ENV === "development" ? "ws://" : "wss://";
        this.webSocket = new WebSocket(
          protol + window.location.host + "/api/others/sign/websocket"
        );
        this.webSocket.onopen = this.ws_open;
        this.webSocket.onmessage = this.ws_message;
        this.webSocket.onclose = this.ws_close;
        this.change_interface();
      } else {
        alert("您的浏览器不支持WebSocket!");
      }
    },
    closeWebsocket: function() {
      this.webSocket.close();
    },
    ws_open: function() {
      console.log("Websocket connection success.");
      // Web Socket PING/PONG
      if (this.ping_id) {
        this.ping_id = null;
        window.clearInterval(this.ping_id);
      }
      this.ping_id = setInterval(this.ws_ping, 30000);
    },
    ws_message: function(event) {
      if (event.data === "pong") return;
      console.log(event);
      if (this.loading && !this.scanID) {
        this.scanID = event.data;

        // 动态刷新二维码
        if (this.qrcode_id) {
          this.qrcode_id = null;
          window.clearInterval(this.qrcode_id);
        }
        this.change_qrcode();
        this.qrcode_id = setInterval(this.change_qrcode, 10000);

        // 准备完成
        this.loading = false;
      } else {
        var data = JSON.parse(event.data);
        this.append_child(data.name);
      }
    },
    ws_close: function() {
      console.log("Websocket connection closed.");
      if (this.qrcode_id) {
        window.clearInterval(this.qrcode_id);
        this.qrcode_id = null;
      }
      if (this.ping_id) {
        window.clearInterval(this.ping_id);
        this.ping_id = null;
      }
      this.webSocket = null;
      this.loading = true;
      this.loaded = false;
      this.scanURL = null;
      this.scanID = null;
      this.qrcode = null;
      this.remove_child();
      $(".live2d-panel").attr("style", "");
      $(".live2d-panel").removeAttr("style");
      $(".scan-qrcode").attr("style", "");
      $(".scan-qrcode").removeAttr("style");
      $(".scan-list").attr("style", "");
      $(".scan-list").removeAttr("style");
      $("#start").attr("style", "");
      $("#start").removeAttr("style");
      $("#end").attr("style", "");
      $("#end").removeAttr("style");
    },
    ws_ping: function() {
      this.webSocket.send("ping");
    },
    change_interface: function() {
      $("#start").css("display", "none");
      $(".scan-qrcode").css("display", "block");
      $(".scan-list").css("display", "block");
      $(".live2d-panel")
        .css("position", "fixed")
        .css("bottom", "0")
        .css("right", "30px");
      $("#end").css("display", "inline-block");
    },
    change_qrcode: function() {
      const href = window.location.origin + "/others/scan?";
      let time = Math.round(Date.now() / 1000).toString();
      this.scanURL = href + "scan_id=" + this.scanID + "&time=" + time;
    },
    maxmize_qrcode: function(data) {
      this.loaded = true;
      this.qrcode = data;
      if (this.popup) {
        var popup = $.magnificPopup.instance;
        popup.items[0].src = this.qrcode;
        popup.updateItemHTML();
      }
    },
    append_child: function(name) {
      var scan_list = $(".scan-list-wrapper");
      var card = $("<div>");
      card.attr("class", "card col-sm-2");
      card.attr("style", "padding: 15px; height: 150px;");
      card.html(`
      <img src="${this.construct_head(
        name
      )}" class="card-img-top" alt style="width: 50px; margin: 0 auto;">
      <div class="card-body" style="padding: 0; margin-top: 15px;">
        <h5 class="card-title">${name}</h5>
      </div>
      `);
      scan_list.append(card);
    },
    remove_child: function() {
      var scan_list = $(".scan-list-wrapper");
      scan_list.empty();
    },
    construct_head: function(name) {
      let hash = Hash("md5");
      hash.update(name);
      let head = new Identicon(hash.digest("hex"), 50).toString();
      return "data:image/png+xml;base64," + head;
    }
  },
  mounted() {
    $("#navbarHolder").height($(".navbar").outerHeight(true) + 60);

    var that = this;
    that.qrcode_width = $(".scan-qrcode").innerWidth() - 100;
    $(".scan-qrcode").height(that.qrcode_width + 100);
    $(".scan-list").height(that.qrcode_width + 100);

    // 动态改变二维码大小
    // eslint-disable-next-line
    window.onresize = function() {
      that.qrcode_width = $(".scan-qrcode").innerWidth() - 100;
      $(".scan-qrcode").height(that.qrcode_width + 100);
      $(".scan-list").height(that.qrcode_width + 100);
    };

    // TODO: Support Qrcode Size Zooming
    // magnific-popup
    $(".image-popup").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      image: {
        cursor: "mfp-zoom-out-cur"
      },
      zoom: {
        enabled: true,

        duration: 300,
        easing: "ease-in-out",

        opener: function(openerElement) {
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        }
      },
      callbacks: {
        open: function() {
          that.popup = true;
        },
        close: function() {
          that.popup = false;
        }
      }
    });

    // 加载模型
    // eslint-disable-next-line
    $.getScript("/live2d/js/live2d.js", function(response, status) {
      // eslint-disable-next-line
      $.getScript("/live2d/js/message.js", function(response, status) {
        // eslint-disable-next-line
        loadlive2d("live2d", "/live2d/model/Pio/model.json");
      });
    });

    // 确保websocket关闭
    window.onbeforeunload = function() {
      if (that.webSocket) {
        that.closeWebsocket();
      }
    };
  }
};
</script>