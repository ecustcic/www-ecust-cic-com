<template>
  <div class="container px-5 pt-3 pb-5" id="login">
    <AnimWords text="Login" :animation="false" />
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="username"
      >用户名</label>
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
        title="登录失败"
        data-toggle="popover"
        datas-placement="right"
        data-content="该用户不存在"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('username')"
      >请填写正确的用户名</div>
    </div>
    <div class="row mb-5">
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
          v-validate="'required|min:6|max:20'"
          title="登录失败"
          data-toggle="popover"
          datas-placement="right"
          data-content="密码错误"
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
      >请填写正确的密码</div>
    </div>
    <div class="col-md-6 offset-md-3">
      <button class="btn btn-primary btn-lg btn-block" @click="formValidate">登录</button>
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
#login {
  background: #dedede;
}
</style>


<script>
import $ from "jquery";
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: "Login",
  components: {
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
      var target = document.getElementsByName(name)[0];
      target.classList.remove("is-valid");
      target.classList.remove("is-invalid");
      target.classList.add(
        !this[name] | this.errors.has(name) ? "is-invalid" : "is-valid"
      );
    },
    checkAll: function() {
      var targets = ["username", "password"];
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
        console.log(res);
        var that = this;
        this.$ajax
          .post("/api/user/login", {
            username: that.username,
            password: that.password,
            ticket: res.ticket,
            randstr: res.randstr
          })
          .then(res => {
            if (res.data.ret === 0) {
              this.$store.commit("login", res.data.data.token);
              var redirect = that.$route.query.redirect || "/";
              if (redirect === "/user/login") {
                redirect = "/";
              }
              that.$router.push({ path: redirect });
            } else {
              console.log(res);
            }
          })
          // eslint-disable-next-line
          .catch(error => {
            console.log(error);
            $("#failModal").modal("show");
            return;
          });
      }
    }
  },
  mounted() {
    this.disablePopover();
  }
};
</script>
