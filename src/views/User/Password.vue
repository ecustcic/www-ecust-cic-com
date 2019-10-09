<template>
  <div class="container px-5 pt-3 pb-5" id="password">
    <AnimWords text="Password" :animation="false" />
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="oldPassword"
      >原密码</label>
      <input
        type="password"
        id="oldPassword"
        name="oldPassword"
        class="form-control col-md-4 offset-md-1"
        placeholder="请输入原密码"
        @blur="check('oldPassword')"
        v-model="oldPassword"
        v-validate="'required|min:6'"
        title="修改失败"
        data-toggle="popover"
        datas-placement="right"
        data-content="原密码错误"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('oldPassword')"
      >请输入正确的密码</div>
    </div>
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="newPassword"
      >新密码</label>
      <div class="input-group col-md-4 offset-md-1 p-0">
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          class="form-control"
          placeholder="请输入新密码"
          @blur="check('newPassword')"
          v-model="newPassword"
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
        v-show="errors.has('newPassword')"
      >请填写至少6位密码</div>
    </div>
    <div class="row mb-5">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="newPasswordAgain"
      >确认密码</label>
      <input
        type="password"
        id="newPasswordAgain"
        name="newPasswordAgain"
        class="form-control col-md-4 offset-md-1"
        placeholder="请再次输入密码"
        @blur="check('newPasswordAgain')"
        v-model="newPasswordAgain"
        v-validate="{'required': 'true', 'is': newPassword}"
      />
      <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('newPasswordAgain')"
      >输入不一致</div>
    </div>
    <div class="col-md-6 offset-md-3">
      <button class="btn btn-primary btn-lg btn-block" @click="formValidate(cbfn)">确认提交</button>
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
            <h5 class="modal-title" id="successModalLabel"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">修改成功!</div>
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
#password {
  background: #dedede;
}
</style>

<script>
import $ from "jquery";
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: "password",
  components: {
    AnimWords
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      newPasswordAgain: ""
    };
  },
  methods: {
    logout: function() {
      this.$cookies.remove("ECUST-CIC");
      this.$store.commit("logout");
      this.$router.go(0);
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
      var targets = ["oldPassword", "newPassword", "newPasswordAgain"];
      for (var index in targets) {
        this.check(targets[index]);
      }
    },
    formValidate: function(func) {
      this.checkAll();
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
      var target = document.getElementById("newPassword");
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
          .post("/api/user/password", {
            old_password: that.oldPassword,
            new_password: that.newPassword,
            ticket: res.ticket,
            randstr: res.randstr
          })
          .then(res => {
            if (res.data.ret === 0) {
              $("#successModal")
                .modal("show")
                .on("hidden.bs.modal", function() {
                  that.logout();
                });
              return;
            } else if (res.data.ret === 12) {
              $("#oldPassword").popover("enable");
              $("#oldPassword").popover("show");
              const top = document
                .querySelector("#oldPassword")
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
    }
  }
};
</script>