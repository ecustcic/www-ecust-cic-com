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
    <div class="row mb-1">
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
          @input="checkPassword()"
          v-model="newPassword"
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
      <!-- <div
        class="form-control alert-danger col-md-3"
        role="alert"
        v-show="errors.has('newPassword')"
      >请填写至少6位密码</div>-->
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
      newPasswordAgain: "",
      schema: null
    };
  },
  methods: {
    disablePopover: function() {
      $('[data-toggle="popover"]').popover("hide");
      $('[data-toggle="popover"]').popover("disable");
    },
    logout: function() {
      this.$cookies.remove("ECUST-CIC");
      this.$store.commit("logout");
      this.$router.go(0);
    },
    check: function(name) {
      $(`[name='${name}']`).removeClass("is-valid");
      $(`[name='${name}']`).removeClass("is-invalid");
      $(`[name='${name}']`).addClass(
        !this[name] | this.errors.has(name) ? "is-invalid" : "is-valid"
      );
    },
    checkPassword: function() {
      $(".badge").removeClass("badge-danger");
      $(".badge").addClass("badge-success");
      $("[name='newPassword']").removeClass("is-valid");
      $("[name='newPassword']").removeClass("is-invalid");
      if (!this.schema.validate(this.newPassword)) {
        $("[name='newPassword']").addClass("is-invalid");
        let errors = this.schema.validate(this.newPassword, { list: true });
        for (let item of errors) {
          $(`#${item}`).removeClass("badge-success");
          $(`#${item}`).addClass("badge-danger");
        }
        return false;
      } else {
        $("[name='newPassword']").addClass("is-valid");
        return true;
      }
    },
    checkAll: function() {
      var targets = ["oldPassword", "newPasswordAgain"];
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
  }
};
</script>