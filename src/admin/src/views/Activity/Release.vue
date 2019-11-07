<template>
  <div class="release">
    <div class="page-subheader mb-30">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-7">
            <div class="list">
              <div class="list-item pl-0">
                <div class="list-thumb ml-0 mr-3 pr-3 b-r text-muted">
                  <i class="fa fa-home"></i>
                </div>
                <div class="list-body">
                  <div class="list-title fs-2x">
                    <h3>
                      Welcome
                      <strong>{{ name }}</strong>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 d-flex justify-content-end h-md-down">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb no-padding bg-trans mb-0">
                <li class="breadcrumb-item">
                  <a href="/">
                    <i class="fa fa-home mr-2 fs14"></i>
                  </a>
                </li>
                <li class="breadcrumb-item">Admin</li>
                <li class="breadcrumb-item">Activity</li>
                <li class="breadcrumb-item active">Release</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content d-flex flex">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="portlet-box border0 shadow-sm mb-30">
              <div class="portlet-header flex-row flex d-flex align-items-center b-b">
                <div class="flex d-flex flex-column">
                  <h3>Upload Cover</h3>
                </div>
                <div class="portlet-tools">
                  <ul class="nav">
                    <li class="nav-item">
                      <a href="javascript:void(0)" class="nav-link" @click="clearCover">
                        <i class="fa fa-trash-o mr-1"></i>Clear
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="portlet-body">
                <input
                  type="file"
                  id="upload"
                  ref="cover"
                  style="display:none"
                  accept="image/jpeg, image/png"
                  @change="processUpload"
                />
                <template v-if="cover">
                  <div class="cover-upload">
                    <label for="upload">
                      <div class="upload-box">
                        <img :src="cover" height="300" alt />
                      </div>
                    </label>
                  </div>
                </template>
                <template v-else-if="uploaded">
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="cover-cropper">
                        <VueCropper
                          :img="cropper.cover"
                          :autoCrop="cropper.autoCrop"
                          :fixed="cropper.fixed"
                          :fixedNumber="cropper.fixedNumber"
                          :centerBox="cropper.centerBox"
                          :infoTrue="cropper.infoTrue"
                          :maxImgSize="cropper.maxImgSize"
                          :mode="cropper.mode"
                          @realTime="realTime"
                          ref="cropper"
                        ></VueCropper>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div
                        class="btn-toolbar justify-content-center mb-3"
                        role="toolbar"
                        aria-label="cropper toolbar"
                      >
                        <div
                          class="btn-group btn-group-sm mr-2"
                          role="group"
                          aria-label="First group"
                        >
                          <button
                            type="button"
                            title="Zoom in"
                            class="btn btn-secondary"
                            @click="scaleCover(1)"
                          >
                            <i class="fa fa-plus"></i>
                          </button>
                          <button
                            type="button"
                            title="Zoom out"
                            class="btn btn-secondary"
                            @click="scaleCover(-1)"
                          >
                            <i class="fa fa-minus"></i>
                          </button>
                          <button
                            type="button"
                            title="Rotate Left"
                            class="btn btn-secondary"
                            @click="rotateLeftCover"
                          >
                            <i class="fa fa-undo"></i>
                          </button>
                          <button
                            type="button"
                            title="Rotate Right"
                            class="btn btn-secondary"
                            @click="rotateRightCover"
                          >
                            <i class="fa fa-repeat"></i>
                          </button>
                        </div>
                        <div
                          class="btn-group btn-group-sm mr-2"
                          role="group"
                          aria-label="Second group"
                        >
                          <button type="button" class="btn btn-secondary" @click="refreshCover">
                            <i class="fa fa-refresh mr-1"></i>refresh
                          </button>
                          <button type="button" class="btn btn-secondary" @click="changeCover">
                            <i class="fa fa-upload mr-1"></i>change img
                          </button>
                          <button
                            type="button"
                            class="btn btn-secondary"
                            @click="downloadCover('blob')"
                          >
                            <i class="fa fa-download"></i>download
                          </button>
                        </div>
                        <a
                          :href="downloadImg"
                          download="cover.jpg"
                          ref="downloadDom"
                          style="display: none;"
                        ></a>
                      </div>
                      <div class="cover-preview mb-3">
                        <div :style="previewStyle">
                          <div :style="preview.div">
                            <img :src="preview.url" :style="preview.img" />
                          </div>
                        </div>
                      </div>
                      <div class="btn-toolbar justify-content-center">
                        <button
                          type="button"
                          class="btn btn-primary w-50"
                          @click="submitCover"
                        >Submit</button>
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="cover-upload">
                    <label for="upload">
                      <div class="upload-box">
                        <i class="fa fa-plus"></i>
                      </div>
                    </label>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="portlet-box border0 shadow-sm">
              <div class="portlet-header flex-row flex d-flex align-items-center b-b">
                <div class="flex d-flex flex-column">
                  <h3>Activity Content</h3>
                </div>
                <div class="portlet-tools">
                  <ul class="nav">
                    <li class="nav-item">
                      <a href="javascript:void(0)" class="nav-link">
                        <i class="fa fa-trash-o mr-1"></i>Clear
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="portlet-body">
                <div class="row mb-20">
                  <div class="col-lg-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Select A Date</span>
                      </div>
                      <flat-pickr
                        v-model="date"
                        :config="config"
                        class="form-control"
                        placeholder="Select date"
                        name="date"
                      ></flat-pickr>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Author</span>
                      </div>
                      <select class="form-control selectpicker" v-model="author">
                        <option :value="name">{{ name }}</option>
                        <option value="技术部">技术部</option>
                        <option value="服务部">服务部</option>
                        <option value="组宣部">组宣部</option>
                        <option value="电竞部">电竞部</option>
                        <!-- <option data-content="<input placeholder='自定义' />">自定义</option> -->
                      </select>
                    </div>
                  </div>
                </div>
                <mavon-editor v-model="value"></mavon-editor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="content-footer bg-light b-t">
      <div class="d-flex flex align-items-center pl-15 pr-15">
        <div class="d-flex flex p-3 ml-auto">
          <div>
            <a href="javascript:void(0)" class="d-inline-flex pl-0 pr-2 b-r">Contact</a>
            <a href="javascript:void(0)" class="d-inline-flex pl-2 pr-2 b-r">Storage</a>
            <a href="javascript:void(0)" class="d-inline-flex pl-2 pr-2">Privacy</a>
          </div>
        </div>
        <div class="d-flex flex p-3 mr-auto justify-content-end">
          <div class="text-muted">© Copyright 2019-2019. ECUST-CIC</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.cover-upload {
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}
.cover-upload label {
  margin: 0;
  cursor: pointer;
}
.cover-upload .upload-box {
  display: table-cell;
  height: 300px;
  width: 500px;
  text-align: center;
  vertical-align: middle;
  background-color: rgba(255, 255, 255, 0.75);

  border: 1px dashed rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
}
.cover-upload .upload-box i.fa {
  font-size: 70px;
}

.cover-cropper {
  height: 300px;
}

.v-note-wrapper {
  z-index: auto !important;
}
</style>

<script>
import $ from "jquery";
import { VueCropper } from "vue-cropper";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";
export default {
  name: "release",
  components: {
    flatPickr,
    VueCropper
  },
  data() {
    return {
      // activity data
      author: "",
      date: null,
      value: "",

      // cover data
      cover: "",
      uploaded: false,
      preview: {},
      previewStyle: {},
      downloadImg: "",
      cropper: {
        cover: "",
        autoCrop: true,
        // autoCropHeight: 300,
        fixed: true,
        fixedNumber: [5, 3],
        centerBox: true,
        infoTrue: true,
        maxImgSize: 500,
        mode: "contain"
      }
    };
  },
  computed: {
    name: function() {
      return this.$store.state.name;
    }
  },
  methods: {
    // cover methods
    realTime: function(data) {
      this.previewStyle = {
        width: data.w + "px",
        height: data.h + "px",
        border: "1px dashed rgba(0, 0, 0, 0.5)",
        "border-radius": "0.5rem",
        overflow: "hidden",
        margin: "auto",
        zoom: ($(".cover-cropper").innerWidth() * 0.6) / data.w
      };
      this.preview = data;
    },
    processUpload: function() {
      this.cover = "";
      this.uploaded = true;
      var that = this;
      var reader = new FileReader();
      reader.onload = function(e) {
        that.cropper.cover = e.target.result;
      };
      reader.readAsDataURL(this.$refs.cover.files[0]);
    },
    scaleCover: function(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    rotateLeftCover: function() {
      this.$refs.cropper.rotateLeft();
    },
    rotateRightCover: function() {
      this.$refs.cropper.rotateRight();
    },
    refreshCover: function() {
      this.$refs.cropper.refresh();
    },
    changeCover: function() {
      $("#upload").click();
    },
    downloadCover: function(type) {
      if (type === "blob") {
        this.$refs.cropper.getCropBlob(data => {
          this.downloadImg = window.URL.createObjectURL(data);
          if (window.navigator.msSaveBlob) {
            var blobObject = new Blob([data]);
            window.navigator.msSaveBlob(blobObject, "cover.jpg");
          } else {
            this.$nextTick(() => {
              this.$refs.downloadDom.click();
            });
          }
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          this.downloadImg = data;
          if (window.navigator.msSaveBlob) {
            var blobObject = new Blob([data]);
            window.navigator.msSaveBlob(blobObject, "cover.jpg");
          } else {
            this.$nextTick(() => {
              this.$refs.downloadDom.click();
            });
          }
        });
      }
    },
    submitCover: function() {
      this.$refs.cropper.getCropData(data => {
        // do something
        this.cover = data;
      });
    },
    clearCover: function() {
      this.cover = "";
      this.uploaded = false;
      this.cropper.cover = "";
    }
  },
  mounted() {
    $("#activity > ul > li:nth-child(1)").addClass("mm-active");
    $(".selectpicker").selectpicker({ sanitize: false });
  },
  destroyed() {
    $("#activity > ul > li:nth-child(1)").removeClass("mm-active");
  }
};
</script>