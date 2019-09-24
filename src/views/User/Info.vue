<template>
  <div class="container px-5 pt-3 pb-5" id="info">
    <AnimWords text="修改资料" :animation="false" />
  </div>
</template>

<style scoped>
#info {
  background: #dedede;
}
</style>

<script>
import $ from 'jquery';
import AnimWords from "@/components/AnimWords.vue";
export default {
  name: 'info',
  components: {
    AnimWords
  },
}
</script>
