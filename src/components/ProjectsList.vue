<template>
  <div>
    <div class="projects-list">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-item"
        @click="showDetails(project)"
      >
        <div class="project-item-image" :style="{ backgroundImage: 'url(' + project.imageUrl + ')' }"></div>
        <div class="title-bar">
          <h3 class="title-text">{{ project.name }}</h3>
        </div>
      </div>
    </div>

    <ProjectDetailsOverlay
      v-on:close="showPopup = false"
      :visible="showPopup"
      :title="popupTitle"
      :htmlContent="popupContent"
      :color="popupColor"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "./ProjectDetailsOverlay.vue";
import ProjectData from "../data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
      projects: [
        new ProjectData(
          "Optimistic Chubby",
          "img/projects/project-1-icon.png",
          "#23bd69",
          `
          <div class="paragraph">
            <strong>Optimistic Chubby</strong> is a great mobile game available on Android.
          </div>
          <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
          </div>
          `
        ),
        new ProjectData(
          "Singing Addict",
          "img/projects/project-2-icon.png",
          "#5a78af",
          `
          <div class="paragraph">
            <strong>Singing Addict</strong> is a creative experience focused on music.
          </div>
          <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
          </div>
          `
        ),
      ],
    };
  },
  methods: {
    showDetails(project: ProjectData) {
      this.popupTitle = project.name;
      this.popupColor = project.color;
      this.popupContent = project.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0, 0);
    },
  },
});
</script>

<style scoped>
.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project-item {
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  transition: transform 0.2s ease-in-out;
}

.project-item:hover .project-item-image {
  transform: scale(1.1);
}

.title-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
}

.title-text {
  color: white;
  padding: 10px;
}
</style>
