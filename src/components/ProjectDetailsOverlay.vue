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
      required: true
    },
    color: {
      type: String,
      default: '#fff' // Varsayılan bir arka plan rengi belirlemek
    },
    title: {
      type: String,
      required: true
    },
    htmlContent: {
      type: String,
      required: true
    },
  },
  methods: {
    getImage(url: string) {
      console.log("fetching image " + url);
    }
  }
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
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color: white;
}

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  margin: 0;
  padding: 22px;
}

.dialog-content {
  padding: 20px;
  background-color: #fcfcfc;
  color: #696969;
}

.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 100;
}

.dialog-close:hover {
  opacity: 0.6;
}

.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor: pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 0 auto;
}

@media only screen and (min-width: 620px) {
  .dialog {
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 1000px;
  }

  h1.dialog-title {
    font-size: 1.6em;
  }

  .dialog-content {
    padding: 40px;
  }
}

/* Fade transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
