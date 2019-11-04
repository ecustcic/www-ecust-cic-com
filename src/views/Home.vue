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
        <div class="col-md-6 mb-3">
          <router-link class="tdn" to="/tech">
            <div class="hover media shadow-sm wow fadeInLeft">
              <img src="@/assets/img/Home/tech.png" class="mr-3" alt="技术" width="100" height="100" />
              <div class="media-body">
                <br /><h5 class="mt-0 font-weight-bold">技术部</h5>这里有大佬有萌新，但他们都热爱计算机。
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-6 mb-3">
          <router-link class="tdn" to="/service">
            <div class="hover media shadow-sm wow fadeInDown">
              <img src="@/assets/img/Home/serve.png" class="mr-3" alt="服务" width="100" height="100" />
              <div class="media-body">
                <br /><h5 class="mt-0 font-weight-bold">服务部</h5>这里有一群无私奉献、为他人服务的人。
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <router-link class="tdn" to="/publicity">
            <div class="hover media shadow-sm wow fadeInUp">
              <img src="@/assets/img/Home/media.png" class="mr-3" alt="组宣" width="100" height="100" />
              <div class="media-body">
                <br /><h5 class="mt-0 font-weight-bold">组宣部</h5>这里是社团运营以及宣传的大脑。
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-6 mb-3">
          <router-link class="tdn" to="/e-sports">
            <div class="hover media shadow-sm wow fadeInRight">
              <img src="@/assets/img/Home/game.png" class="mr-3" alt="电竞" width="100" height="100" />
              <div class="media-body">
                <br /><h5 class="mt-0 font-weight-bold">电竞部</h5>这里是游戏爱好者的圣地。
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <hr />
      <div class="tlt h3">
        <ul class="texts">
          <li data-in-effect="fadeInLeft" data-out-effect="fadeOut">活动更新</li>
          <li data-in-effect="fadeInLeft" data-out-effect="fadeOut">更新于2019年11月4日</li>
        </ul>
      </div>
      <template v-for="(item, index) in this.news">
        <div :key="index">
          <div class="row">
            <div class="col-md-6">
              {{item.title}}
            </div>
            <div class="col-md-3">
              {{item.date}}
            </div>
            <div class="col-md-3">
              {{item.author}}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.media {
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.tdn {
  color: black;
  text-decoration: none;
}
.hover:hover {
  -webkit-transform: translateY(-6px);
  -ms-transform: translateY(-6px);
  transform: translateY(-6px);
  -webkit-box-shadow: 0 0 6px #999;
  box-shadow: 0 0 6px #999;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
}
</style>

<script>
import $ from "jquery";
import { WOW } from "wowjs";
import { setTimeout } from "timers";
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
      ],
      news: [
        {
          title: "1",
          date: "2019/10/31",
          author: "jishu"
        },
        {
          title: "2",
          date: "2019/10/31",
          author: "jishu"
        },
        {
          title: "3",
          date: "2019/10/31",
          author: "jishu"
        }
      ]
    };
  },
  mounted() {
    // 循环文字特效
    $(".tlt").textillate({
      loop: true,
      delay: 50
    });

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
  }
};
</script>
