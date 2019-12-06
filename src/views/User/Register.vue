<template>
  <div class="container px-5 pt-3 pb-5" id="register">
    <Loading />
    <AnimWords text="Register" :animation="false" />
    <div class="row mb-3">
      <div class="col-md-2 offset-md-2">
        <label class="form-control" onselectstart="return false;" for="username">邮箱</label>
      </div>
      <div class="col-md-4 offset-md-1">
        <input
          type="text"
          id="username"
          name="username"
          class="form-control"
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
      </div>
      <div class="col-md-3">
        <div class="form-control alert-danger" role="alert" v-show="errors.has('username')">请填写正确的邮箱</div>
      </div>
    </div>
    <div class="row mb-1">
      <div class="col-md-2 offset-md-2">
        <label class="form-control" onselectstart="return false;" for="password">密码</label>
      </div>
      <div class="col-md-4 offset-md-1">
        <div class="input-group">
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="请输入密码"
            maxlength="20"
            @click="disablePopover"
            @input="checkPassword()"
            v-model="password"
          />
          <div class="input-group-append bg-white">
            <button
              class="btn btn-outline-primary"
              type="button"
              tabindex="-1"
              @click="showPassword"
            >
              <i class="fa fa-eye-slash fa-fw" id="eye"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="col-md-3">
        <div
          class="form-control alert-danger"
          role="alert"
          v-show="errors.has('password')"
        >请填写至少6位密码</div>
      </div>-->
    </div>
    <div class="row mb-3">
      <div class="col-md-1 offset-md-5">
        <span class="badge anibadge" id="lowercase">Lowwer</span>
      </div>
      <div class="col-md-1">
        <span class="badge anibadge" id="uppercase">Upper</span>
      </div>
      <div class="col-md-1">
        <span class="badge anibadge" id="digits">Digit</span>
      </div>
      <div class="col-md-1">
        <span class="badge anibadge" id="min">&ge;8Letters</span>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-2 offset-md-2">
        <label class="form-control" onselectstart="return false;" for="passwordAgain">确认密码</label>
      </div>
      <div class="col-md-4 offset-md-1">
        <input
          type="password"
          id="passwordAgain"
          name="passwordAgain"
          class="form-control"
          placeholder="请再次输入密码"
          @click="disablePopover"
          @blur="check('passwordAgain')"
          v-model="passwordAgain"
          v-validate="{'required': 'true', 'is': password}"
        />
      </div>
      <div class="col-md-3">
        <div
          class="form-control alert-danger"
          role="alert"
          v-show="errors.has('passwordAgain')"
        >输入不一致</div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-3 offset-md-2 text-left">
        其他登录方式：
        <button class="btn btn-link p-0" style="vertical-align: inherit;" @click="qqLogin">
          <!-- <i class="fa fa-qq"></i> -->
          <img src="../../assets/img/User/qq_login.png" alt />
        </button>
      </div>
      <div class="col-md-4 text-right">
        <button class="btn btn-link p-0" @click="formValidate(resendVerifyEmail)">未收到激活邮件?</button>
      </div>
    </div>
    <div class="col-md-6 offset-md-3">
      <button class="btn btn-primary btn-lg btn-block" @click="formValidate(cbfn)">注册</button>
    </div>
    <!-- RegisterModal -->
    <Modal title="Register" text="验证邮件已经发送到你的邮箱，请前往邮箱确认..."></Modal>
    <!-- <div
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
    </div>-->
    <!-- SuccessModal -->
    <Modal title="Success" text="浏览器将在3s后跳转登录..."></Modal>
    <!-- <div
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
    </div>-->
    <!-- FailModal -->
    <Modal title="Error" text="服务似乎暂时不可用呢！"></Modal>
    <!-- <div
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
    </div>-->
    <!-- FeatureModal -->
    <Modal title="Feature" text="敬请期待！"></Modal>
  </div>
</template>

<style scoped>
#register {
  background: #dedede;
}

.badge {
  width: 100%;
  height: auto;
  line-height: 1.5;
  padding: 0.25rem 0.35rem;
  border-radius: 4px;
  font-size: 0.65rem;
  position: relative;
}
.badge.anibadge:before,
.badge.anibadge:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 2px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}
.badge.anibadge:after {
  z-index: 10;
  background-color: 5px solid rgba(242, 246, 248, 0.4);
  animation: not-blink 2s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  -webkit-animation: not-blink 2s cubic-bezier(0.65, 0.815, 0.735, 0.395)
    infinite;
}
.badge.anibadge.badge-danger:after {
  background-color: rgba(250, 98, 94, 0.75);
}
.badge.anibadge.badge-success:after {
  background-color: rgba(148, 223, 74, 0.75);
}
.badge.anibadge.badge-warning:after {
  background-color: rgba(243, 215, 104, 0.75);
}
.badge.anibadge.badge-info:after {
  background-color: rgba(134, 212, 245, 0.75);
}
.badge.anibadge.badge-teal:after {
  background-color: rgba(44, 221, 190, 0.75);
}
.badge.anibadge.badge-purple:after {
  background-color: rgba(169, 94, 199, 0.75);
}
.badge.anibadge.badge-primary:after {
  background-color: rgba(0, 132, 255, 0.75);
}
.badge.anibadge.badge-dark:after {
  background-color: rgba(44, 45, 58, 0.75);
}
.badge.anibadge.badge-pink:after {
  background-color: rgba(247, 125, 194, 0.75);
}
.badge.anibadge.badge-light:after {
  background-color: #f3f8fa;
}
@keyframes not-blink {
  0% {
    transform: scale(1);
    -wekbit-transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.25);
    -wekbit-transform: scale(1.25);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.5);
    -wekbit-transform: scale(1.5);
    opacity: 0;
  }
}
@-webkit-keyframes not-blink {
  0% {
    transform: scale(1);
    -wekbit-transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.25);
    -wekbit-transform: scale(1.25);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.5);
    -wekbit-transform: scale(1.5);
    opacity: 0;
  }
}
</style>

<script>
import $ from "jquery";
import passwordValidator from "password-validator";
import Modal from "@/components/Modal.vue";
import Loading from "@/components/Loading.vue";
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: "Register",
  components: {
    Modal,
    Loading,
    AnimWords
  },
  data() {
    return {
      username: "",
      password: "",
      passwordAgain: "",
      schema: null
    };
  },
  methods: {
    disablePopover: function() {
      $('[data-toggle="popover"]').popover("hide");
      $('[data-toggle="popover"]').popover("disable");
    },
    check: function(name) {
      var target = $(`[name="${name}"]`);
      target.removeClass("is-valid");
      target.removeClass("is-invalid");
      target.addClass(
        !this[name] | this.errors.has(name) ? "is-invalid" : "is-valid"
      );
    },
    checkPassword: function() {
      $(".badge").removeClass("badge-danger");
      $(".badge").addClass("badge-success");
      $("[name='password']").removeClass("is-valid");
      $("[name='password']").removeClass("is-invalid");
      if (!this.schema.validate(this.password)) {
        $("[name='password']").addClass("is-invalid");
        let errors = this.schema.validate(this.password, { list: true });
        for (let item of errors) {
          $(`#${item}`).removeClass("badge-success");
          $(`#${item}`).addClass("badge-danger");
        }
        return false;
      } else {
        $("[name='password']").addClass("is-valid");
        return true;
      }
    },
    checkAll: function() {
      var targets = ["username", "passwordAgain"];
      for (var index in targets) {
        this.check(targets[index]);
      }
    },
    formValidate: function(func) {
      this.checkAll();
      if (!this.checkPassword()) return;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          var captcha = new TencentCaptcha(this.globals.TencentAPPID, func);
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
              $("#RegisterModal").modal("show");
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
            $("#ErrorModal").modal("show");
          })
          // eslint-disable-next-line
          .catch(error => {
            $("#ErrorModal").modal("show");
          });
      }
    },
    resendVerifyEmail: function(res) {
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
            if (res.data.ret === 0) {
              $("#SuccessModal").modal("show");
              return;
            }
            console.log(res);
            $("#ErrorModal").modal("show");
          })
          // eslint-disable-next-line
          .catch(error => {
            console.log(error);
            $("#ErrorModal").modal("show");
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
            $("#SuccessModal").modal("show");
            setTimeout(function() {
              $("#SuccessModal").modal("hide");
              that.$router.push({
                name: "login",
                query: { redirect: "/user/info?guide=true" }
              });
            }, 3000);
            return;
          }
          console.log(res);
          $("#ErrorModal").modal("show");
        })
        // eslint-disable-next-line
        .catch(error => {
          $("#ErrorModal").modal("show");
        });
    },
    qqLogin: function() {
      $("#FeatureModal").modal("show");
    }
  },
  mounted() {
    this.disablePopover();
    this.schema = new passwordValidator();
    this.schema
      .is()
      .min(8) // Minimum length 8
      .is()
      .max(20) // Maximum length 20
      .has()
      .uppercase() // Must have uppercase letters
      .has()
      .lowercase() // Must have lowercase letters
      .has()
      .digits() // Must have digits
      .has()
      .not()
      .spaces();
    if (this.$route.query.ticket) {
      this.verifyEmail(this.$route.query.ticket);
    }
  }
};
</script>
