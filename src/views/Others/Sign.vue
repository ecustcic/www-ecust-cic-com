<template>
  <div id="sign">
    <div id="navbarHolder"></div>
    <div class="live2d-panel">
      <div class="message" style="opacity:1"></div>
      <div class="live2d">
        <canvas id="live2d" width="280" height="250"></canvas>
      </div>
      <div class="hide-button">隐藏</div>
    </div>
    <div class="container">
      <button class="btn btn-info w-50">发起签到</button>
    </div>
  </div>
</template>

<style scoped>
.live2d-panel {
  user-select: none;
  position: relative;
  margin: 30px auto;
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

.hide-button {
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

.hide-button:hover {
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
</style>

<script>
import $ from "jquery";
export default {
  name: "sign",
  data() {
    return {
      webSocket: null
    };
  },
  methods: {
    startWebsocket: function() {
      if ("WebSocket" in window) {
        this.webSocket = new WebSocket("ws://" + location.host + "/api/others/sign/websocket");
      } else {
        alert("您的浏览器不支持WebSocket!");
      }
    }
  },
  mounted() {
    $("#navbarHolder").height($(".navbar").outerHeight(true) + 60);
    // eslint-disable-next-line
    $.getScript("/live2d/js/live2d.js", function(response, status) {
      // eslint-disable-next-line
      $.getScript("/live2d/js/message.js", function(response, status) {
        // eslint-disable-next-line
        loadlive2d("live2d", "/live2d/model/Pio/model.json");
      });
    });
  }
};
</script>