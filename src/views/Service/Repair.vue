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
            @blur="check('name')"
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
            name="studentNumber"
            class="form-control"
            placeholder="学号"
            v-model="studentNumber"
            @blur="check('studentNumber')"
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
            @blur="check('computer')"
            v-model="computer"
            v-validate="'max:20'"
          />
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-2 offset-md-2">
          <label for="description" class="col-form-label form-control">描述</label>
        </div>
      </div>-->
      <div class="form-group row">
        <div class="col-md-8 offset-md-2">
          <textarea
            id="description"
            name="description"
            class="form-control"
            placeholder="问题描述"
            rows="3"
            @blur="check('description')"
            v-model="description"
            v-validate="'required|max:200'"
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
            @blur="checkContact"
            v-model="mobilephone"
            v-validate
            pattern="^1[0-9]{10}$"
          />
        </div>
      </div>
      <div class="form-group row mb-5">
        <div class="col-md-2 offset-md-2">
          <label for="qqNumber" class="col-form-label form-control">QQ号</label>
        </div>
        <div class="col-md-5 offset-md-1">
          <input
            type="text"
            id="qqNumber"
            name="qqNumber"
            class="form-control"
            placeholder="QQ号"
            @blur="checkContact"
            v-model="qqNumber"
            v-validate
            pattern="^[1-9][0-9]{4,11}$"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            @click="formValidate(commitRepair)"
          >确认提交</button>
        </div>
      </div>
    </form>

    <!-- SuccessModal -->
    <Modal title="Success" text="提交成功!"></Modal>
    <!-- FailModal -->
    <Modal title="Error" :text="errorText"></Modal>
  </div>
</template>

<style scoped>
.repair {
  background: #dedede;
}
</style>

<script>
import $ from "jquery";
import Modal from "@/components/Modal.vue";
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: "repair",
  components: {
    Modal,
    AnimWords
  },
  data() {
    return {
      name: "",
      studentNumber: "",
      computer: "",
      description: "",
      mobilephone: "",
      qqNumber: "",

      errorText: "服务似乎暂时不可用呢!"
    };
  },
  methods: {
    check: function(name) {
      var target = $(`[name="${name}"]`);
      target.removeClass("is-valid");
      target.removeClass("is-invalid");
      target.addClass(
        !this[name] | this.errors.has(name) ? "is-invalid" : "is-valid"
      );
    },
    checkContact: function() {
      $("#mobilephone").removeClass("is-valid");
      $("#mobilephone").removeClass("is-invalid");
      $("#qqNumber").removeClass("is-valid");
      $("#qqNumber").removeClass("is-invalid");
      if (!$("#mobilephone").val() && !$("#qqNumber").val()) {
        $("#mobilephone").addClass("is-invalid");
        $("#qqNumber").addClass("is-invalid");
      } else if (this.errors.has("mobilephone")) {
        $("#mobilephone").addClass("is-invalid");
      } else if (this.errors.has("qqNumber")) {
        $("#qqNumber").addClass("is-invalid");
      } else {
        $("#mobilephone").addClass("is-valid");
        $("#qqNumber").addClass("is-valid");
        return true;
      }
      return false;
    },
    checkAll: function() {
      var targets = ["name", "studentNumber", "description"];
      for (var index in targets) {
        this.check(targets[index]);
      }
      if (!this.checkContact()) return;
    },
    formValidate: function(callback) {
      this.checkAll();
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          var captcha = new TencentCaptcha(this.globals.TencentAPPID, callback);
          captcha.show();
        }
      });
    },
    commitRepair: function(res) {
      if (res.ret === 0) {
        this.$ajax
          .post("/api/repair/new", {
            name: this.name,
            student_number: this.studentNumber,
            computer: this.computer,
            description: this.description,
            mobilephone: this.mobilephone,
            qqnumber: this.qqNumber,
            ticket: res.ticket,
            randstr: res.randstr
          })
          .then(res => {
            if (res.data.ret === 0) {
              $("#SuccessModal").modal("show");
            } else {
              this.errorText = res.data.msg;
              $("#ErrorModal").modal("show");
            }
          })
          .catch(error => {
            console.log(error);
            this.errorText = "服务似乎暂时不可用呢!";
            $("#ErrorModal").modal("show");
          });
      }
    },
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
