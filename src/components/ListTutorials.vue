<template>
  <div>
    <h3>Tutorials List</h3>
    <div class="accordion" role="tablist" v-if="tutorials.length > 0">
      <b-card
        no-body
        class="mb-1"
        v-for="(tutorial, index) in tutorials"
        :key="index"
      >
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion-' + index" variant="info">{{
            tutorial.title
          }}</b-button>
        </b-card-header>
        <b-collapse
          :id="'accordion-' + index"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>{{ tutorial.description }}</b-card-text>
          </b-card-body>
          <div class="p-1 text-right">
            <b-button variant="primary" @click="showTutorial(index)"
              >Show</b-button
            >
          </div>
        </b-collapse>
      </b-card>
    </div>
    <div v-else>
      <p>No tutorial found</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListTutorials",
  props: ["tutorials"],
  methods: {
    showTutorial: function (tutorialId) {
      this.$emit("show", tutorialId);
    },
  },
};
</script>