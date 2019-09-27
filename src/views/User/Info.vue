<template>
  <div class="container px-5 pt-3 pb-5" id="info">
    <template v-if="guide">
      <div class="alert alert-dismissible fade show guide" role="alert">
        <strong>Welcom To ECUST-CIC!</strong>
        <br />Please fill in your information so that we can contact you.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </template>

    <AnimWords text="UserInfo" :animation="false" fontSize="3rem" />
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="name"
      >昵称</label>
      <span class="form-control col-md-1 transparent">
        <i class="fa fa-spinner fa-pulse"></i>
      </span>
      <input
        type="text"
        id="name"
        name="name"
        class="form-control col-md-4"
        placeholder="昵称"
        @click="disablePopover"
        @blur="check('name')"
        v-model="name"
        v-validate="'required|max:20'"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('name')"
      >昵称至多15个字符</div>
    </div>
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="mobilephone"
      >手机号</label>
      <span class="form-control col-md-1 transparent">
        <i class="fa fa-spinner fa-pulse"></i>
      </span>
      <input
        type="text"
        id="mobilephone"
        name="mobilephone"
        class="form-control col-md-4"
        placeholder="手机号"
        @click="disablePopover"
        @blur="check('mobilephone')"
        v-model="mobilephone"
        v-validate
        required
        pattern="^1[0-9]{10}$"
        title="修改失败"
        data-toggle="popover"
        datas-placement="right"
        data-content="该用户已存在"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('mobilephone')"
      >请填写正确的手机号</div>
    </div>
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="studentNumber"
      >学号</label>
      <span class="form-control col-md-1 transparent">
        <i class="fa fa-spinner fa-pulse"></i>
      </span>
      <input
        type="text"
        id="studentNumber"
        name="studentNumber"
        class="form-control col-md-4"
        placeholder="学号"
        @click="disablePopover"
        @blur="check('studentNumber')"
        v-model="studentNumber"
        v-validate
        required
        pattern="^1[0-9]{7}$"
        title="修改失败"
        data-toggle="popover"
        datas-placement="right"
        data-content="该学号已存在"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('studentNumber')"
      >请填写正确的学号</div>
    </div>
    <div class="row mb-5">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="qqNumber"
      >QQ号</label>
      <span class="form-control col-md-1 transparent">
        <i class="fa fa-spinner fa-pulse"></i>
      </span>
      <input
        type="text"
        id="qqNumber"
        name="qqNumber"
        class="form-control col-md-4"
        placeholder="QQ号"
        @click="disablePopover"
        @blur="check('qqNumber')"
        v-model="qqNumber"
        v-validate="'required|min:5|max:12'"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('qqNumber')"
      >请填写正确的QQ号</div>
    </div>
    <div class="col-md-6 offset-md-3">
      <button class="btn btn-primary btn-lg btn-block" @click="formValidate">确认提交</button>
    </div>
  </div>
</template>

<style scoped>
#info {
  background: #dedede;
}
.transparent {
  box-shadow: none;
  border: none;
  background-color: transparent !important;
}
.guide {
  position: absolute;
  right: 0.25rem;
  top: 80px;
  z-index: 9999;
  max-width: 400px;
  padding: 1rem 2rem;
  opacity: 1;
  color: inherit;
  background-color: #fff;
  box-shadow: 0px 0px 45px rgba(118, 147, 172, 0.35);
}
</style>

<script>
import $ from "jquery";
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: "info",
  components: {
    AnimWords
  },
  data() {
    return {
      guide: "",

      name: "",
      mobilephone: "",
      studentNumber: "",
      qqNumber: ""
    };
  },
  methods: {
    disablePopover: function() {
      $('[data-toggle="popover"]').popover("hide");
      $('[data-toggle="popover"]').popover("disable");
    },
    check: function(name) {
      var target = document.getElementsByName(name)[0];
      target.classList.remove("is-valid");
      target.classList.remove("is-invalid");
      target.classList.add(
        !this[name] | this.errors.has(name) ? "is-invalid" : "is-valid"
      );
    },
    checkAll: function() {
      var targets = [];
      for (var index in targets) {
        this.check(targets[index]);
      }
    },
    formValidate: function() {
      this.checkAll();
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          var captcha = new TencentCaptcha(
            this.globals.TencentAPPID,
            this.cbfn
          );
          captcha.show();
        }
      });
    },
    cbfn: function(res) {
      if (res.ret === 0) {
        var that = this;
        this.$ajax
          .post("/api/user/register", {
            mobilephone: that.mobilephone,
            password: that.password,
            ticket: res.ticket,
            randstr: res.randstr
          })
          .then(res => {
            if (res.data.ret === 0) {
              $("#successModal").modal("show");
              setTimeout(function() {
                $("#successModal").modal("hide");
                that.$router.push({
                  name: "login",
                  query: { redirect: "/user/info" }
                });
              }, 3000);
              return;
            } else if (res.data.ret === 11) {
              $("#mobilephone").popover("enable");
              $("#mobilephone").popover("show");
              const top = document
                .querySelector("#mobilephone")
                .getBoundingClientRect().top;
              const position = window.pageYOffset + top - 200;
              window.scrollTo({ top: position, behavior: "smooth" });
              return;
            }
            $("#failModal").modal("show");
          })
          // eslint-disable-next-line
          .catch(error => {
            $("#failModal").modal("show");
          });
      }
    }
  },
  mounted() {
    this.disablePopover();
    this.guide = this.$route.query.guide;
    setTimeout(function() {
      $(".guide").fadeTo(5000, 0);
    }, 1000);
    this.$ajax.get("/api/user/info").then(res => {
      if (res.data.ret === 0) {
        this.name = res.data.data.name || "";
        this.mobilephone = res.data.data.mobilephone || "";
        this.studentNumber = res.data.data.studentNumber || "";
        this.qqNumber = res.data.data.qqNumber || "";
      }
    });
  }
};
</script>
