<template>
  <div>
    <h3>Add Tutorial</h3>
    <form>
      <b-form-group label="Title:">
        <b-form-input type="text" required ref="titleRef" v-model="tutorial.title"></b-form-input>
      </b-form-group>

      <b-form-group label="Description:">
        <b-form-textarea rows="3" max-rows="6" ref="descRef" v-model="tutorial.description"></b-form-textarea>
      </b-form-group>

      <div class="text-right">
        <b-button variant="info" class="mr-1" @click="addTutorial()">Save</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AddTutorial",
  data: function(){
      return {
          tutorial: {
              title: '',
              description: ''
          }
      }
  },
  methods: {
    ...mapMutations(["addNewTutorial"]),
    addTutorial: function(){
      this.addNewTutorial(this.tutorial);
      this.$router.push('/')
    }
  },
};
</script>