<template>
  <div class="home">
    <div class="row">
      <div class="col-6">
        <list-tutorials
          @show="tutorialId = $event"
        ></list-tutorials>
      </div>
      <div class="col-6">
        <details-tutorial :tutorialId="tutorialId"></details-tutorial>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsTutorial from "../components/DetailsTutorial";
import ListTutorials from "../components/ListTutorials";
export default {
  name: "Home",
  components: {
    DetailsTutorial,
    ListTutorials,
  },
  data: function () {
    return {
      tutorialId: 0
    };
  }
};
</script>
