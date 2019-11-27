<template>
  <div class="repair container px-5 pt-3 pb-5">
    <AnimWords text="故障报修" :animation="false" fontSize="3rem" />
    <form>
      <h3 class="mt-3 mb-3">问题</h3>
      <div class="form-group row">
        <div class="col-md-2 offset-md-2">
          <label for="name" class="col-form-label form-control">
            姓名
            <span style="color: red;">*</span>
          </label>
        </div>
        <div class="col-md-5 offset-md-1">
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            placeholder="姓名"
            v-model="name"
            v-validate="'required|max:20'"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-2 offset-md-2">
          <label for="studentNumber" class="col-form-label form-control">
            学号
            <span style="color: red;">*</span>
          </label>
        </div>
        <div class="col-md-5 offset-md-1">
          <input
            type="text"
            id="studentNumber"
            name="computer"
            class="form-control"
            placeholder="学号"
            v-model="studentNumber"
            v-validate
            required
            pattern="^1[0-9]{7}$"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-2 offset-md-2">
          <label for="computer" class="col-form-label form-control">电脑型号</label>
        </div>
        <div class="col-md-5 offset-md-1">
          <input
            type="text"
            id="computer"
            name="computer"
            class="form-control"
            placeholder="电脑型号"
            v-model="computer"
            v-validate="'max:20'"
          />
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-2 offset-md-2">
          <label for="problem" class="col-form-label form-control">描述</label>
        </div>
      </div>-->
      <div class="form-group row">
        <div class="col-md-8 offset-md-2">
          <textarea
            id="problem"
            name="problem"
            class="form-control"
            placeholder="问题描述"
            rows="3"
            v-model="description"
            v-validate="'required|max:20'"
          />
        </div>
      </div>
      <h3 class="mb-3">
        联系方式
        <span style="color: red;">*</span>
      </h3>
      <div class="form-group row">
        <div class="col-md-2 offset-md-2">
          <label for="mobilephone" class="col-form-label form-control">手机号</label>
        </div>
        <div class="col-md-5 offset-md-1">
          <input
            type="text"
            id="mobilephone"
            name="mobilephone"
            class="form-control"
            placeholder="手机号"
            v-model="mobilephone"
          />
        </div>
      </div>
      <div class="form-group row mb-5">
        <div class="col-md-2 offset-md-2">
          <label for="qqNumber" class="col-form-label form-control">QQ号</label>
        </div>
        <div class="col-md-5 offset-md-1">
          <input type="text" id="qqNumber" name="qqNumber" class="form-control" placeholder="QQ号" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <button type="button" class="btn btn-primary btn-lg btn-block">确认提交</button>
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
  data() {
    return {
      name: "",
      studentNumber: "",
      computer: "",
      description: "",
      mobilephone: "",
      qqnumber: ""
    };
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
