<template>
  <div style="margin-bottom: 80px;">
    <h1>About me</h1>

    <div class="paragraph">
      <div> 
        I'm <strong>Ahmet E. Dağ</strong>, a passionate game developer with a background in computer engineering.<br/>
        I spend my time improving my skills in game development, focusing on game mechanics, performance optimization, and creating clean, sustainable code that adheres to SOLID principles.
      </div>

      <div style="margin-top: 20px;">
        I've worked on various <router-link to="/game-projects">game projects</router-link> and <router-link to="/other-projects">other development projects</router-link>, applying design patterns and effective coding strategies throughout.
      </div>

      <div style="margin-top: 40px;">
        I'm <strong>currently looking for opportunities</strong> to contribute to exciting projects in the game industry. You can reach me at <a href="mailto:ahmetdag@gamedev.com">ahmetdag@gamedev.com</a> or <router-link to="/contact">through here</router-link>.
      </div>

      <div style="margin-top: 20px;">
        As a computer engineering student, I continuously strive to improve my expertise in game development. I am proficient in writing clean, maintainable code following SOLID principles and enjoy solving complex problems, whether working independently or as part of a team.
      </div>
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

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>