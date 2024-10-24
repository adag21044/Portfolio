<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      <p>
        As a computer engineering student, I continuously strive to improve myself in the field of game development. I am proficient in writing clean and sustainable code that adheres to <strong>SOLID Principles</strong> and effectively utilizes design patterns in the projects I develop with Unity. I am passionate about providing creative solutions while working both independently and in teams. In my projects, I particularly focus on game architectures, performance optimization, and game mechanics.
      </p>
      <p>
        I'm <strong>Ahmet E. Dağ</strong>, a dedicated game developer with a strong foundation in computer engineering. I have a deep passion for creating engaging, efficient, and optimized games. My expertise in Unity, along with my solid understanding of programming principles, allows me to develop scalable and high-performing game projects.
      </p>
      <p>
        I thrive in both collaborative and solo environments, and I'm always excited to tackle new challenges. Currently, I'm looking for opportunities where I can further hone my skills and contribute to the gaming industry.
      </p>
      <p>
        If you're interested in collaborating or have an opportunity available, feel free to 
        <router-link to="/contact">contact me</router-link>.
      </p>
      <p>
        Outside of coding, I'm enthusiastic about staying up-to-date with the latest trends in game development, and I enjoy working on personal projects that push my creative boundaries.
      </p>

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <br/>
    <br/>
    <br/>

    <div class="full-content">
      <div class="columns">
        <div class="work-experience">
          <h2>Work Experience</h2>
          <h3>Ideon - Software Developer Intern</h3>
          <h4>2024</h4>
          <div>Frontend Web Development</div>
          <div class="tech-stack">HTML, CSS, Javascript</div>
        </div>

        <div class="skills">
          <h2>Skills</h2>
          <div class="skill-set">
            <h3>Core Competencies</h3>
            <div class="skill-item">
              <SkillRate name="Unity"/>
            </div>
            <div class="skill-item">
              <SkillRate name="C#"/>
            </div>
            <div class="skill-item">
              <SkillRate name="Game Design & Development"/>
            </div>
            <div class="skill-item">
              <SkillRate name="Programming Patterns"/>
            </div>
            <div class="skill-item">
              <SkillRate name="SOLID Principles"/>
            </div>
            <div class="skill-item">
              <SkillRate name="Performance Optimization"/>
            </div>
            <div class="skill-item">
              <SkillRate name="Project Management with GitHub"/>
            </div>
            <div class="skill-item">
              <SkillRate name="Game Mechanics and Animation Systems"/>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="education">
          <h2>Education</h2>
          <h3><strong>Istanbul Medeniyet University</strong></h3>
          <h4><strong>Computer Engineering</strong></h4>
        </div>

        <div class="languages">
          <h2>Languages</h2>
          <h3><strong>English</strong></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "../components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.tech-stack {
  font-style: italic;
}

.columns {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.work-experience, .skills, .education, .languages {
  width: 48%;
  margin-right: 20px;
}

.languages {
  margin-right: 0;
}

.skill-item {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.skill-item::before {
  content: '•'; 
  position: absolute;
  left: 0;
  color: black; 
  font-size: 24px; 
  line-height: 1;
}

strong {
  font-weight: bold;
  font-size: 1.15em; /* Adjust the font size if necessary */
}
</style>