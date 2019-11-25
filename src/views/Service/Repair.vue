<template>
  <div class="repair container px-5 pt-3 pb-5">
    <AnimWords text="故障报修" :animation="false" fontSize="3rem" />
    <form>
      <h3 class="mb-3">问题</h3>
      <div class="form-group row">
        <div class="col-md-2 offset-md-2">
          <label for="computer" class="col-form-label form-control">电脑型号</label>
        </div>
        <div class="col-md-4 offset-md-1">
          <input type="text" id="computer" name="computer" class="form-control" placeholder="电脑型号" />
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-2 offset-md-2">
          <label for="problem" class="col-form-label form-control">描述</label>
        </div>
      </div>-->
      <div class="form-group row">
        <div class="col-md-7 offset-md-2">
          <textarea id="problem" name="problem" class="form-control" placeholder="问题描述" rows="3" />
        </div>
      </div>
      <h3 class="mb-3">联系方式</h3>
      <div class="form-group row">
        <div class="col-md-2 offset-md-2">
          <label for="mobilephone" class="col-form-label form-control">手机号</label>
        </div>
        <div class="col-md-4 offset-md-1">
          <input
            type="text"
            id="mobilephone"
            name="mobilephone"
            class="form-control"
            placeholder="手机号"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-2 offset-md-2">
          <label for="qqNumber" class="col-form-label form-control">QQ号</label>
        </div>
        <div class="col-md-4 offset-md-1">
          <input type="text" id="qqNumber" name="qqNumber" class="form-control" placeholder="QQ号" />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.repair {
  background: #dedede;
}
</style>

<script>
import $ from "jquery";
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: "repair",
  components: {
    AnimWords
  },
  methods: {
    windowResize: function() {
      this.$nextTick(function() {
        $(".footer").attr("style", "");
        $(".footer").removeAttr("style");
        if (
          $(".repair").outerHeight() +
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
  },
  destroyed() {
    $(".navbar").attr("style", "");
    $(".navbar").removeAttr("style");
    $(".footer").attr("style", "");
    $(".footer").removeAttr("style");
  }
};
</script>
