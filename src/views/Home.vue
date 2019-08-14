<template>
  <div class="home">
    <Carousel :slides="this.slides"></Carousel>
    <div class="container">
      <hr />
      <div class="tlt h3">
        <ul class="texts">
          <li data-in-effect="fadeInLeft" data-out-effect="fadeOut">华东理工大学计算机信息交流协会</li>
          <li data-in-effect="fadeInLeft" data-out-effect="fadeOut">成立于1998年3月</li>
          <li data-in-effect="fadeInLeft" data-out-effect="fadeOut">ECUST-CIC</li>
        </ul>
      </div>
      <div class="text-muted lead">宗旨：服务华理，振兴IT！</div>
      <div class="text-muted">
        更多请看：
        <router-link to="/about">社团介绍</router-link>
      </div>
      <hr />
      <div class="row">
        <div class="card shadow-sm col-md-3">
          <div class="card-img-top mt-4">
            <img src="@/assets/img/Home/tech.png" alt="技术" width="100" height="100" />
          </div>
          <div class="card-body">
            <h2 class="card-title">技术部</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">项目成果</li>
            <li class="list-group-item">编程教学</li>
            <li class="list-group-item">人工智能</li>
          </ul>
          <div class="card-body">
            <a href="/tech" class="card-link">更多</a>
          </div>
        </div>
        <div class="card shadow-sm col-md-3">
          <div class="card-img-top mt-4">
            <img src="@/assets/img/Home/serve.png" alt="服务" width="100" height="100" />
          </div>
          <div class="card-body">
            <h2 class="card-title">服务部</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">免费维修</li>
            <li class="list-group-item">软件安装</li>
            <li class="list-group-item">日常维护</li>
          </ul>
          <div class="card-body">
            <a href="/service" class="card-link">更多</a>
          </div>
        </div>
        <div class="card shadow-sm col-md-3">
          <div class="card-img-top mt-4">
            <img src="@/assets/img/Home/media.png" alt="组宣" width="100" height="100" />
          </div>
          <div class="card-body">
            <h2 class="card-title">组宣部</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">微信公众号</li>
            <li class="list-group-item">QQ运营</li>
            <li class="list-group-item">活动宣传</li>
          </ul>
          <div class="card-body">
            <a href="javascript:void(0);" class="card-link">更多</a>
          </div>
        </div>
        <div class="card shadow-sm col-md-3">
          <div class="card-img-top mt-4">
            <img src="@/assets/img/Home/game.png" alt="电竞" width="100" height="100" />
          </div>
          <div class="card-body">
            <h2 class="card-title">电竞部</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">观看比赛</li>
            <li class="list-group-item">校内比赛</li>
            <li class="list-group-item">校外比赛</li>
          </ul>
          <div class="card-body">
            <a href="/e-sports" class="card-link">更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "home",
  components: {
    Carousel
  },
  data() {
    return {
      slides: [
        {
          img: require("@/assets/img/Home/bg-th1.png"),
          title: "",
          subTitle: "CIC Tech, More Than You Think"
        },
        {
          img: require("@/assets/img/Home/bg-th2.png"),
          title: "",
          subTitle: "CIC Service, Waiting For Serving Everyone"
        },
        {
          img: require("@/assets/img/Home/bg-th3.png"),
          title: "",
          subTitle: "ECUST E-Sports, Go Beyond the Game"
        }
      ]
    };
  },
  mounted() {
    $(".tlt").textillate({
      loop: true,
      delay: 50
    });
  }
};
</script>
