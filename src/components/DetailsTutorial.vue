<template>
  <div>
    <form>
      <b-form-group label="Title:">
        <b-form-input
          v-model="selectedTutorial.title"
          type="text"
          required
          :disabled="isDisable"
          ref="titleRef"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Description:">
        <b-form-textarea
          v-model="selectedTutorial.description"
          rows="3"
          max-rows="6"
          :disabled="isDisable"
          ref="descRef"
        ></b-form-textarea>
      </b-form-group>

      <div class="text-right">
        <b-button
          variant="info"
          v-if="isDisable"
          class="mr-1"
          @click="isDisable = false"
          >Edit</b-button
        >

        <b-button variant="info" v-else class="mr-1" @click="isDisable = true"
          >Save</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "DetailsTutorial",
  props: ["tutorialId"],
  data: function () {
    return {
      isDisable: true,
    };
  },
  methods: {
    ...mapMutations([
      'updateTutorialById'
    ]),
    updateTutorial: function () {
      if (
        this.$refs.titleRef.value == "" ||
        this.$refs.descRef.value == ""
      ) {
        return false;
      } else {
        this.updateTutorialsById(this.tutorialId, this.selectedTutorial);
      }
    },
  },
  computed: {
    ...mapGetters({
      tutorials: 'allTutorials'
    }),
    'selectedTutorial': function(){
      return this.tutorials[this.tutorialId];
    }
  }
};
</script>