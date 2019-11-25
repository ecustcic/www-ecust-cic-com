<template>
  <div class="ocr">
    <Loading />
    <div class="container">
      <nav class="nav nav-tabs nav-fill">
        <a
          class="nav-item nav-link active"
          id="general-tab"
          data-toggle="tab"
          href="#general"
          role="tab"
          aria-controls="general"
          aria-selected="true"
        >通用文字识别</a>
        <a
          class="nav-item nav-link"
          id="idcard-tab"
          data-toggle="tab"
          href="#idcard"
          role="tab"
          aria-controls="idcard"
          aria-selected="false"
        >身份证识别</a>
        <a class="nav-item nav-link" href="#">行驶证识别</a>
        <a class="nav-item nav-link" href="#">驾驶证识别</a>
        <a class="nav-item nav-link" href="#">营业执照识别</a>
        <a class="nav-item nav-link" href="#">银行卡识别</a>
        <a class="nav-item nav-link" href="#">手写体识别</a>
        <a class="nav-item nav-link" href="#">车牌识别</a>
        <a class="nav-item nav-link" href="#">名片识别</a>
      </nav>
      <div class="tab-content" id="OcrTabContent">
        <div
          class="tab-pane fade show active"
          id="general"
          role="tabpanel"
          aria-labelledby="general-tab"
        >
          <div class="row">
            <div class="col-md-6">
              <div class="upload-wrapper">
                <h5 class="mb-3">上传图片</h5>
                <input
                  type="file"
                  id="generalUpload"
                  style="display: none;"
                  accept="image/jpeg, image/png"
                  ref="general"
                  @change="uploadImage('general')"
                />
                <label for="generalUpload">
                  <template v-if="general.image">
                    <div class="upload-display">
                      <div class="img-analysis">
                        <img :src="general.image" style="height: 100%; width: 100%;" />
                        <!-- <template v-for="(item, index) in general.rect">
                          <div class="img-analysis-rect" :key="index"></div>
                        </template>-->
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="upload-box">
                      <i class="fa fa-plus"></i>
                    </div>
                  </template>
                </label>
                <small class="form-text text-muted">支持jpg、png格式图片，最大1M</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="result-wrapper">
                <h5 class="mb-3">识别结果</h5>
                <textarea class="result-box form-control" v-model="general.result" readonly></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 mb-3">
              <button
                class="btn btn-primary"
                type="button"
                @click="verifyCaptcha(commitOCR, 'general')"
              >确认提交</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="idcard" role="tabpanel" aria-labelledby="idcard-tab">
          <div class="row">
            <div class="col-md-6">
              <div class="upload-wrapper">
                <h5 class="mb-3">上传图片</h5>
                <input
                  type="file"
                  id="idcardUpload"
                  style="display: none;"
                  accept="image/jpeg, image/png"
                  ref="idcard"
                  @change="uploadImage('idcard')"
                />
                <label for="idcardUpload">
                  <template v-if="idcard.image">
                    <div class="upload-display">
                      <div class="image-analysis">
                        <img :src="idcard.image" style="height: 100%; width: 100%;" />
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="upload-box">
                      <i class="fa fa-plus"></i>
                    </div>
                  </template>
                </label>
                <small class="form-text text-muted">支持jpg、png格式图片，最大1M</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="result-wrapper">
                <h5 class="mb-3">识别结果</h5>
                <textarea class="result-box form-control" readonly></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 mb-3">
              <button
                class="btn btn-primary"
                type="button"
                @click="verifyCaptcha(commitOCR, 'idcard')"
              >确认提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal title="Error" :text="modalText"></Modal>
  </div>
</template>

<style scoped>
#OcrTabContent {
  border-left: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
}

.upload-wrapper {
  padding: 20px;
  text-align: left;
}
.upload-wrapper label {
  display: table;
  width: 100%;
  height: 300px;
  margin: 0;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px dashed rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
}
.upload-wrapper .upload-box {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.5);
}
.upload-wrapper .upload-box i.fa {
  font-size: 70px;
}
.upload-wrapper .upload-display {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.upload-wrapper .upload-display > .img-analysis {
  position: relative;
}
.upload-wrapper .upload-display > .img-analysis > .img-analysis-rect {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: 2px solid #4cb050;
}

.result-wrapper {
  padding: 20px;
  text-align: left;
}
.result-wrapper .result-box {
  height: 300px;
}
</style>

<script>
import $ from "jquery";
import Modal from "@/components/Modal.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "ocr",
  components: {
    Modal,
    Loading
  },
  data() {
    return {
      modalText: "",
      general: {
        image: "",
        result: ""
        // rect: []
      },
      idcard: {
        image: "",
        result: ""
      }
    };
  },
  methods: {
    windowResize: function() {
      this.$nextTick(function() {
        $(".footer").attr("style", "");
        $(".footer").removeAttr("style");
        if (
          $(".ocr").outerHeight() +
            $(".navbar").outerHeight() +
            $(".footer").outerHeight() <
          $(window).innerHeight()
        ) {
          $(".footer").css("position", "fixed");
          $(".footer").css("bottom", "0");
        }
      });
    },
    imgFilter: function(file) {
      let allowType = ".png|.jpg|.jpeg";
      let fileType = file.name
        .substring(file.name.lastIndexOf("."))
        .toLowerCase();
      if (allowType.indexOf(fileType + "|") == "-1") {
        this.modalText = "请上传jpg、png格式图片！";
        $("#ErrorModal").modal("show");
        return false;
      } else if (file.size > 1 * 1024 * 1024) {
        this.modalText = "图片过大。请上传1M以内图片！";
        $("#ErrorModal").modal("show");
        return false;
      }
      return true;
    },
    dataURLToFile: function(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    uploadImage: function(ref) {
      let file = this.$refs[ref].files[0];
      if (!this.imgFilter(file)) return;
      var that = this;
      var reader = new FileReader();
      reader.onload = function(e) {
        that[ref].image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    verifyCaptcha: function(callback, type) {
      if (!this[type].image) {
        this.modalText = "请先上传图片！";
        $("#ErrorModal").modal("show");
        return;
      }
      // eslint-disable-next-line
      var captcha = new TencentCaptcha(this.globals.TencentAPPID, callback, {
        bizState: type
      });
      captcha.show();
    },
    commitOCR: function(res) {
      if (res.ret === 0) {
        $("#LoadingModal").modal("show");
        var type = res.bizState;
        var form = new FormData();
        form.append("type", type);
        form.append("image", this.dataURLToFile(this[type].image, "image"));
        form.append("ticket", res.ticket);
        form.append("randstr", res.randstr);
        this.$ajax({
          url: "/api/others/ocr/general",
          method: "post",
          data: form,
          headers: { "Content-Type": "multipart/form-data" }
        })
          .then(res => {
            $("#LoadingModal").modal("hide");
            console.log(res);
            if (res.data.ret === 0) {
              // TODO: Append result to textarea
              if (type === "general") this.displayGeneral(res.data.data);
            } else {
              this.modalText = res.data.msg || "服务暂时不可用呢，请稍后再试";
              $("#ErrorModal").modal("show");
            }
          })
          .catch(error => {
            console.log(error);
            $("#LoadingModal").modal("hide");
            this.modalText = "服务暂时不可用呢，请稍后再试";
            $("#ErrorModal").modal("show");
          });
      }
    },
    displayGeneral: function(data) {
      console.log(data);
      this.general.result = "";
      for (let item of data.item_list) {
        this.general.result += item.itemstring;
        this.general.result += "\n";
        // this.general.rect.push(item.itemcoord);
      }
    }
  },
  mounted() {
    $(".navbar").css("position", "relative");
    this.windowResize();
    window.onresize = this.windowResize;
    $(`#${this.$route.query.tab}-tab`).tab("show");
  },
  destroyed() {
    $(".navbar").attr("style", "");
    $(".navbar").removeAttr("style");
    $(".footer").attr("style", "");
    $(".footer").removeAttr("style");
  }
};
</script>