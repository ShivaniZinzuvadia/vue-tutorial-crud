<template>
  <div>
    <form>
      <b-form-group label="Title:">
        <b-form-input
          :value="selectedTutorial.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Description:">
        <b-form-textarea
          :value="selectedTutorial.description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </form>
  </div>
</template>

<script>
export default {
  name: "DetailsTutorial",
  props: ["selectedTutorial"],
  data: function () {
    return {
      isDisable: true,
    };
  },
};
</script>