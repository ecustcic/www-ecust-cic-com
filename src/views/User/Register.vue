<template>
  <div class="container px-5 pt-3 pb-5" id="register">
    <!-- <h1 class="mb-5">Register</h1> -->
    <AnimWords text="Register" :animation="false" />
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="username"
      >手机号</label>
      <input
        type="text"
        id="username"
        name="username"
        class="form-control col-md-4 offset-md-1"
        placeholder="手机号/学号"
        @click="disablePopover"
        @blur="check('username')"
        v-model="username"
        v-validate
        required
        pattern="^1[0-9]{10}$"
        title="登录失败"
        data-toggle="popover"
        datas-placement="right"
        data-content="该用户不存在"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('username')"
      >请填写正确的手机号</div>
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
      <button class="btn btn-primary btn-lg btn-block" @click="formValidate">登录</button>
    </div>
  </div>
</template>

<style>
#register {
  background: #dedede;
}
</style>

<script>
import $ from "jquery";
import AnimWords from '@/components/AnimWords.vue';
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
          var captcha = new TencentCaptcha("2018946756", this.cbfn);
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
        // var that = this;
        // this.$ajax
        //   .post(
        //     "/api/user/register",
        //     $.extend(this.user, {
        //       ticket: res.ticket,
        //       randstr: res.randstr
        //     })
        //   )
        //   .then(res => {
        //
        //   });
      }
    },
  },
  mounted() {
    this.disablePopover();
  }
};
</script>
