<template>
  <div class="container px-5 pt-3 pb-5" id="login">
    <Loading />
    <AnimWords text="Login" :animation="false" />
    <div class="row mb-3">
      <div class="col-md-2 offset-md-2">
        <label class="form-control" onselectstart="return false;" for="username">用户名</label>
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
          title="登录失败"
          data-toggle="popover"
          datas-placement="right"
          data-content="该用户不存在"
        />
      </div>
      <div class="col-md-3">
        <div
          class="form-control alert-danger"
          role="alert"
          v-show="errors.has('username')"
        >请填写正确的用户名</div>
      </div>
    </div>
    <div class="row mb-3">
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
            @click="disablePopover"
            @blur="check('password')"
            v-model="password"
            v-validate="'required|min:6|max:20'"
            title="登录失败"
            data-toggle="popover"
            datas-placement="right"
            data-content="密码错误"
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
      <div class="col-md-3">
        <div class="form-control alert-danger" role="alert" v-show="errors.has('password')">请填写正确的密码</div>
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
        <router-link to="/user/register" class="btn btn-link p-0 mr-1">还没有账号?</router-link>
        <button class="btn btn-link p-0" @click="formValidate(resendVerifyEmail)">未收到激活邮件?</button>
      </div>
    </div>
    <div class="col-md-6 offset-md-3">
      <button class="btn btn-primary btn-lg btn-block" @click="formValidate(cbfn)">登录</button>
    </div>
    <!-- ActiveModal -->
    <Modal title="Active" text="请先激活你的邮箱!"></Modal>
    <!-- <div
      class="modal fade"
      id="activeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="avtiveModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="activeModalLabel">Denied</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">请先激活你的邮箱!</div>
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
    <Modal title="Success" text="激活邮件发送成功！"></Modal>
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
            <h5 class="modal-title" id="successModalLabel">Success</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">激活邮件发送成功！</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
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
#login {
  background: #dedede;
}
</style>


<script>
import $ from "jquery";
import Modal from "@/components/Modal.vue";
import Loading from "@/components/Loading.vue";
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: "Login",
  components: {
    Modal,
    Loading,
    AnimWords
  },
  data() {
    return {
      username: "",
      password: ""
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
    checkAll: function() {
      var targets = ["username", "password"];
      for (var index in targets) {
        this.check(targets[index]);
      }
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
        $("#LoadingModal").modal("show");
        var that = this;
        this.$ajax
          .post("/api/user/login", {
            username: that.username,
            password: that.password,
            ticket: res.ticket,
            randstr: res.randstr
          })
          .then(res => {
            $("#LoadingModal").modal("hide");
            if (res.data.ret === 0) {
              this.$store.commit("login", res.data.data.token);
              var redirect = that.$route.query.redirect || "/";
              if (redirect === "/user/login") {
                redirect = "/";
              }
              that.$router.push({ path: redirect });
              return;
            } else if (res.data.ret === 10) {
              $("#username").popover("enable");
              $("#username").popover("show");
              const top = document
                .querySelector("#username")
                .getBoundingClientRect().top;
              const position = window.pageYOffset + top - 200;
              window.scrollTo({ top: position, behavior: "smooth" });
              return;
            } else if (res.data.ret === 12) {
              $("#password").popover("enable");
              $("#password").popover("show");
              const top = document
                .querySelector("#password")
                .getBoundingClientRect().top;
              const position = window.pageYOffset + top - 200;
              window.scrollTo({ top: position, behavior: "smooth" });
              return;
            } else if (res.data.ret === 13) {
              $("#ActiveModal").modal("show");
              return;
            }
            console.log(res);
            $("#ErrorModal").modal("show");
          })
          // eslint-disable-next-line
          .catch(error => {
            $("#LoadingModal").modal("hide");
            $("#ErrorModal").modal("show");
            return;
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
            // $(".loading").css("opacity", "0").slideUp(500);
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
            // $(".loading").css("opacity", "0").slideUp(500);
            $("#ErrorModal").modal("show");
            return;
          });
      }
    },
    qqLogin: function() {
      $("#FeatureModal").modal("show");
    }
  },
  mounted() {
    this.disablePopover();
  }
};
</script>
