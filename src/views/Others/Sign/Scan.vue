<template>
  <div id="scan">
    <Modal :title="title" :text="text"></Modal>
  </div>
</template>

<script>
import $ from "jquery";
import Modal from "@/components/Modal.vue";
export default {
  name: "scan",
  components: {
    Modal
  },
  data() {
    return {
      scanID: null,
      time: null,
      title: "",
      text: ""
    };
  },
  mounted() {
    var that = this;
    this.scanID = this.$route.query.scan_id;
    this.time = this.$route.query.time;
    this.$ajax
      .post("/api/others/sign/scan", { scan_id: that.scanID, time: that.time })
      .then(res => {
        if (res.data.ret === 0) {
          this.title = "Success";
          this.text = "签到成功！";
        } else {
          this.title = "Error";
          this.text = res.data.msg;
        }
        $(`#${this.title}Modal`).modal("show");
      })
      // eslint-disable-next-line
      .catch(error => {
        this.title = "Error";
        this.text = "服务似乎暂时不可用呢！";
      });
  }
};
</script>