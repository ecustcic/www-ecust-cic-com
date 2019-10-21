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
    <div class="row mb-3">
      <label
        class="form-control col-md-2 offset-md-2 mb-0"
        onselectstart="return false;"
        for="studentCollege"
      >学院</label>
      <span class="form-control col-md-1 transparent">
        <i class="fa fa-spinner fa-pulse"></i>
      </span>
      <div class="col-md-4">
        <div class="form-group">
          <select
            id="studentCollege"
            name="studentCollege"
            class="selectpicker show-tick form-control"
            title="学院"
            v-model="studentCollege"
          >
            <option>化工学院</option>
            <option>化学与分子工程学院</option>
            <option>生物工程学院</option>
            <option>药学院</option>
            <option>材料科学与工程学院</option>
            <option>信息科学与工程学院</option>
            <option>机械与动力工程学院</option>
            <option>资源与环境工程学院</option>
            <option>商学院</option>
            <option>社会与公共管理学院</option>
            <option>理学院</option>
            <option>艺术设计与传媒学院</option>
            <option>外国语学院</option>
            <option>法学院</option>
            <option>体育科学与工程学院</option>
            <option>马克思主义学院</option>
            <option>中德工学院</option>
            <option>国际卓越工程师学院</option>
          </select>
        </div>
      </div>
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
        v-validate
        pattern="^[1-9][0-9]{4,11}$"
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
      studentCollege: "",
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
      var targets = ["name", "mobilephone", "studentNumber", "qqNumber"];
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
          .post("/api/user/change-info", {
            name: that.name,
            mobilephone: that.mobilephone,
            student_number: that.studentNumber,
            qqnumber: that.qqNumber,
            ticket: res.ticket,
            randstr: res.randstr
          })
          .then(res => {
            if (res.data.ret === 0) {
              var that = this;
              $("#successModal")
                .modal("show")
                .on("hidden.bs.modal", function() {
                  that.$router.go(0);
                });
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
    this.guide = this.$route.query.guide;
    if (this.guide) {
      setTimeout(function() {
        $(".guide").fadeOut(5000, function() {
          $(".guide").slideUp(500);
        });
      }, 1000);
    }
    this.$ajax.get("/api/user/info").then(res => {
      if (res.data.ret === 0) {
        this.name = res.data.data.name || "";
        this.mobilephone = res.data.data.mobilephone || "";
        this.studentNumber = res.data.data.student_number || "";
        this.qqNumber = res.data.data.qqnumber || "";
        $(".fa.fa-spinner.fa-pulse").css("display", "none");
      }
    });
  }
};
</script>
