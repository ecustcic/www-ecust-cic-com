<template>
  <div class="container px-5 pt-3 pb-5" id="register">
    <div class="alert alert-dismissible fade show loading" role="alert">
      <strong>
        <i class="fa fa-spinner fa-pulse"></i>&nbsp;Loading...
      </strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <AnimWords text="Register" :animation="false" />
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="username"
      >邮箱</label>
      <input
        type="text"
        id="username"
        name="username"
        class="form-control col-md-4 offset-md-1"
        placeholder="邮箱"
        @click="disablePopover"
        @blur="check('username')"
        v-model="username"
        v-validate="'required|email'"
        title="注册失败"
        data-toggle="popover"
        datas-placement="right"
        data-content="该用户已存在"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('username')"
      >请填写正确的邮箱</div>
    </div>
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="password"
      >密码</label>
      <div class="input-group col-md-4 offset-md-1 p-0">
        <input
          type="password"
          id="password"
          name="password"
          class="form-control"
          placeholder="请输入密码"
          @click="disablePopover"
          @blur="check('password')"
          v-model="password"
          v-validate="'required|min:6'"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            tabindex="-1"
            @click="showPassword"
          >
            <i class="fa fa-eye-slash fa-fw" id="eye"></i>
          </button>
        </div>
      </div>
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('password')"
      >请填写至少6位密码</div>
    </div>
    <div class="row mb-5">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="passwordAgain"
      >确认密码</label>
      <input
        type="password"
        id="passwordAgain"
        name="passwordAgain"
        class="form-control col-md-4 offset-md-1"
        placeholder="请再次输入密码"
        @click="disablePopover"
        @blur="check('passwordAgain')"
        v-model="passwordAgain"
        v-validate="{'required': 'true', 'is': password}"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('passwordAgain')"
      >输入不一致</div>
    </div>
    <div class="col-md-6 offset-md-3">
      <button class="btn btn-primary btn-lg btn-block" @click="formValidate(cbfn)">注册</button>
    </div>
    <!-- RegisterModal -->
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="registerModalLabel">离成功一步之遥！</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">验证邮件已经发送到你的邮箱，请前往邮箱确认...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="formValidate(resendVerifyEmail)"
            >未收到邮件？</button>
          </div>
        </div>
      </div>
    </div>
    <!-- SuccessModal -->
    <div
      class="modal fade"
      id="successModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="successModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="successModalLabel">注册成功！</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">浏览器将在3s后跳转登录...</div>
        </div>
      </div>
    </div>
    <!-- FailModal -->
    <div
      class="modal fade"
      id="failModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="failModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="failModalLabel">Error</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">服务似乎暂时不可用呢！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#register {
  background: #dedede;
}
.loading {
  position: absolute;
  right: 0.25rem;
  top: 80px;
  z-index: 9999;
  max-width: 400px;
  padding: 1rem 2rem;
  opacity: 0;
  color: inherit;
  background-color: #fff;
  box-shadow: 0px 0px 45px rgba(118, 147, 172, 0.35);
}
</style>

<script>
import $ from "jquery";
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: "Register",
  components: {
    AnimWords
  },
  data() {
    return {
      username: "",
      password: "",
      passwordAgain: ""
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
      var targets = ["username", "password", "passwordAgain"];
      for (var index in targets) {
        this.check(targets[index]);
      }
    },
    formValidate: function(func) {
      this.checkAll();
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          var captcha = new TencentCaptcha(
            this.globals.TencentAPPID,
            func
          );
          captcha.show();
        }
      });
    },
    showPassword: function() {
      var eye = document.getElementById("eye");
      var target = document.getElementById("password");
      if (eye.classList.contains("fa-eye-slash")) {
        eye.classList.replace("fa-eye-slash", "fa-eye");
        target.type = "text";
      } else {
        eye.classList.replace("fa-eye", "fa-eye-slash");
        target.type = "password";
      }
    },
    cbfn: function(res) {
      if (res.ret === 0) {
        var that = this;
        this.$ajax
          .post("/api/user/register", {
            username: that.username,
            password: that.password,
            ticket: res.ticket,
            randstr: res.randstr
          })
          .then(res => {
            if (res.data.ret === 0) {
              $("#registerModal").modal("show");
              return;
            } else if (res.data.ret === 11) {
              $("#username").popover("enable");
              $("#username").popover("show");
              const top = document
                .querySelector("#username")
                .getBoundingClientRect().top;
              const position = window.pageYOffset + top - 200;
              window.scrollTo({ top: position, behavior: "smooth" });
              return;
            }
            console.log(res);
            $("#failModal").modal("show");
          })
          // eslint-disable-next-line
          .catch(error => {
            $("#failModal").modal("show");
          });
      }
    },
    resendVerifyEmail: function(res) {
      $(".loading").slideDown(500).css("opacity", "1");
      if (res.ret === 0) {
        var that = this;
        this.$ajax
          .post("/api/user/resend-verify-email", {
            username: that.username,
            password: that.password,
            ticket: res.ticket,
            randstr: res.randstr
          })
          .then(res => {
            $(".loading").css("opacity", "0").slideUp(500);
            if (res.data.ret === 0) {
              $("#successModal").modal("show");
              return;
            }
            console.log(res);
            $("#failModal").modal("show");
          })
          // eslint-disable-next-line
          .catch(error => {
            console.log(error);
            $(".loading").css("opacity", "0").slideUp(500);
            $("#failModal").modal("show");
            return;
          });
      }
    },
    verifyEmail: function(ticket) {
      var that = this;
      this.$ajax
        .post("/api/user/verify", {
          ticket: ticket
        })
        .then(res => {
          if (res.data.ret === 0) {
            $("#successModal").modal("show");
            setTimeout(function() {
              $("#successModal").modal("hide");
              that.$router.push({
                name: "login",
                query: { redirect: "/user/info?guide=true" }
              });
            }, 3000);
            return;
          }
          console.log(res);
          $("#failModal").modal("show");
        })
        // eslint-disable-next-line
        .catch(error => {
          $("#failModal").modal("show");
        });
    }
  },
  mounted() {
    this.disablePopover();
    if (this.$route.query.ticket) {
      this.verifyEmail(this.$route.query.ticket);
    }
  }
};
</script>
