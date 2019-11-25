<template>
  <div class="container py-3" id="activity">
    <div class="row">
      <div class="col-md-9 text-left">
        <h1>{{ activity.title }}</h1>
        <hr />
        <!-- <div class="lf">{{ activity.content }}</div> -->
        <mavon-editor
          v-model="activity.content"
          :boxShadow="config.boxShadow"
          :previewBackground="config.previewBackground"
          :subfield="config.subfield"
          :defaultOpen="config.defaultOpen"
          :editable="false"
          :toolbarsFlag="config.toolbarsFlag"
          :shortCut="config.shortCut"
        ></mavon-editor>
      </div>
      <div class="col-md-3">
        <div class="df card">
          <img class="im card-img-top" :src="activity.cover" />
          <div class="card-body">
            <h5 class="card-title">{{ activity.author }}</h5>
            <p class="card-text text-muted">发布时间：{{ activity.date}}</p>
            <button class="btn btn-success">
              <i class="fa fa-envelope mr-2"></i>Contact Now
            </button>
          </div>
          <!-- <div class="card-header">更多活动：</div>
          <div class="list-group list-group-flush">
            <button type="button" class="list-group-item hover">本学期第一次义诊顺利举行！</button>
            <button type="button" class="list-group-item hover">害，没头发了呀</button>
            <button type="button" class="list-group-item hover">我想谈恋爱</button>
            <button type="button" class="list-group-item hover">女生节牛逼！</button>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.v-note-wrapper {
  border: none;
  z-index: auto !important;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
  padding: 0;
}
/* .page {
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
}
.lf {
  text-align: left;
}
.subtitle {
  float: left;
  color: #6c757d;
  position: relative;
  bottom: -0.5rem;
}
.title {
  padding-left: 1rem;
}
.line {
  float: left;
  width: 50px;
  border-right: 1px solid #c0c0c0;
  padding-bottom: 1600px;
  margin-bottom: -1600px;
}
.maindiv {
  overflow: hidden;
}
.df {
  width: 20%;
  right: 10%;
  top: 15%;
  position: fixed;
}
.im {
  width: 100%;
  height: auto;
  padding-left: 0;
}
a.list-title {
  text-decoration: none;
  color: #fff;
}
a.list-title:hover {
  color: #fff;
  text-decoration: none;
}
.hover:hover {
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px);
  -webkit-box-shadow: 0 0 6px #999;
  box-shadow: 0 0 6px #999;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.list-group-item {
  z-index: 2;
}
.list-group-item.active {
  z-index: 1;
} */
</style>

<script>
import $ from "jquery";
export default {
  name: "activity",
  data() {
    return {
      activity: {
        id: "",
        date: "",
        cover: "",
        title: "",
        author: "",
        content: ""
      },
      config: {
        boxShadow: false,
        previewBackground: "#ffffff",
        subfield: false,
        defaultOpen: "preview",
        editable: false,
        toolbarsFlag: false,
        shortCut: false
      }
    };
  },
  methods: {
    load_detail: function() {
      this.$ajax
        .get("/api/activity/detail", {
          params: { id: this.$route.params.id }
        })
        .then(res => {
          if (res.data.ret === 0) {
            this.activity = res.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    windowResize: function() {
      this.$nextTick(function() {
        $(".footer").attr("style", "");
        $(".footer").removeAttr("style");
        if (
          $("#activity").outerHeight() +
            $(".navbar").outerHeight() +
            $(".footer").outerHeight() <
          $(window).innerHeight()
        ) {
          $(".footer").css("position", "fixed");
          $(".footer").css("bottom", "0");
        }
      });
    }
  },
  mounted() {
    $(".navbar").css("position", "relative");
    this.windowResize();
    window.onresize = this.windowResize;
    this.load_detail();
  },
  destroyed() {
    $(".navbar").attr("style", "");
    $(".navbar").removeAttr("style");
    $(".footer").attr("style", "");
    $(".footer").removeAttr("style");
  }
};
</script>