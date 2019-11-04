<template>
  <div
    class="modal fade"
    :id="title_ + 'Modal'"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="title_ + 'ModalLabel'"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="title + 'ModalLabel'">{{ title_ }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">{{ text_ }}</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    title_() {
      return this.title;
    },
    text_() {
      return this.text;
    }
  }
};
</script>