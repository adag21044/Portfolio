<template>
  <transition name="fade">
    <div v-if="visible">
      <div class="overlay"></div>
      <div class="dialog" :style="{ 'background-color': color }">
        <h1 class="dialog-title">{{ title }}</h1>
        <div @click="$emit('close')" class="dialog-close" aria-label="Close dialog">
          <i class="fa fa-times fa-lg fa-fw"></i>
        </div>
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
          <div class="dialog-bottom">
            <a @click="$emit('close')" class="dialog-close-button" aria-label="Close">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      default: '#fff',
    },
    title: {
      type: String,
      required: true,
    },
    htmlContent: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.dialog {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 20px auto;
  max-width: 900px;
  background-color: #fff;
  z-index: 11;
  padding: 10px;
  color: #333;
}

h1.dialog-title {
  text-align: center;
  font-size: 1.5em;
  margin: 0;
  padding: 15px;
}

.dialog-content {
  padding: 20px;
  color: #696969;
}

.dialog-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.2em;
}

.dialog-bottom {
  text-align: center;
  padding-top: 10px;
}

a.dialog-close-button {
  font-size: 1.2em;
  color: #007bff;
  cursor: pointer;
}
</style>
