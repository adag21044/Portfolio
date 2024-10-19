<template>
  <div style="margin-bottom: 80px;">
    <h1 style="margin-top: 40px;">Game Projects</h1>
    <div class="projects">
      <!-- Project Example Start -->
      <div class="project-card">
        <h3>Hyper Casual Arcade Idle System</h3>
        <div class="video-container">
          <iframe width="280" height="157" src="https://www.youtube.com/embed/bszFYCdY4bQ" frameborder="0" allowfullscreen></iframe>
        </div>
        <p>Description of the project, explaining its features, mechanics, and what you learned while creating it.</p>
        <a href="https://github.com/adag21044/Hyper-Casual-Arcade-Idle-System" target="_blank">View on GitHub</a>
      </div>

      <div class="project-card">
        <h3>Project Title 2</h3>
        <div class="video-container">
          <iframe width="280" height="157" src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>
        </div>
        <p>Description of the project, explaining its features, mechanics, and what you learned while creating it.</p>
        <a href="https://github.com/YOUR_GITHUB_REPO_2" target="_blank">View on GitHub</a>
      </div>

      <div class="project-card">
        <h3>Project Title 3</h3>
        <div class="video-container">
          <iframe width="280" height="157" src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3" frameborder="0" allowfullscreen></iframe>
        </div>
        <p>Description of the project, explaining its features, mechanics, and what you learned while creating it.</p>
        <a href="https://github.com/YOUR_GITHUB_REPO_3" target="_blank">View on GitHub</a>
      </div>
      <!-- Project Example End -->
      <!-- Repeat the above block for each project -->
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }
  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.project-card {
  background-color: #000000;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 1px;
  width: calc(30% - 20px); /* Adjusted width for 3 cards */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s;
}

.project-card:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.video-container {
  display: flex; /* Flexbox kullanarak video kapsayıcısını ortalayacağız */
  justify-content: center; /* Yatayda ortalamak için */
  margin-bottom: 15px; /* Alt boşluk */
}

@media only screen and (max-width: 620px) {
  .project-card {
    width: 100%;
  }
}
</style>
