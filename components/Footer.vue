<template>
  <div class="footer">
    
    <div class="right">
      Reach me at <a href="mailto:my@email.com" title="Send an email to Ahmet">ahmetedag9@gmail.com</a> or <router-link to="/contact" title="Contact me through this link">through here</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  padding: 30px 0; /* Padding adjusted for better spacing */
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2); /* Optional shadow for depth */
}

.left, .right {
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
    float: none; /* Remove float for larger screens */
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }
}
</style>