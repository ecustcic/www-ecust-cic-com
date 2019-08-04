<template>
  <div class="home">
    <Carousel :slides="this.slides"></Carousel>
    <div class="container">
      <hr />
      <h3 class="text-left">华理计算机信息交流协会 创立于1998年3月</h3>
      <h3 class="text-right">宗旨：服务华理，振兴IT！</h3>
      <h5 class="text-right">
        更多请看：
        <router-link to="/about">社团介绍</router-link>
      </h5>
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
          img: require("@/assets/img/Home/bg-th1.jpg"),
          title: "技术",
          subTitle: "CIC Tech, More Than You Think"
        },
        {
          img: require("@/assets/img/Home/bg-th2.jpg"),
          title: "服务",
          subTitle: "second"
        },
        {
          img: require("@/assets/img/Home/bg-th3.jpg"),
          title: "电竞",
          subTitle: "ECUST E-Sports, Go Beyond the Game"
        }
      ]
    };
  }
};
</script>
