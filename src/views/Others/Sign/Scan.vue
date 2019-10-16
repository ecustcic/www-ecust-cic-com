<template>
  <div id="scan"></div>
</template>

<script>
export default {
  name: "scan",
  data() {
    return {
      scanID: null,
      time: null
    };
  },
  mounted() {
    var that = this;
    this.scanID = this.$route.query.scan_id;
    this.time = this.$route.query.time;
    this.$ajax
      .post("/api/others/sign/scan", { scan_id: that.scanID, time: that.time })
      .then(res => {
        console.log(res);
      });
  }
};
</script>