import Vue from 'vue'
import Vuex from 'vuex'
import tutorials from "../tutorial_data";

Vue.use(Vuex)

const state = () => ({
    tutorials: tutorials
})

const getters = {
    allTutorials: (state) => {
      return state.tutorials.slice();
    },
  
    tutorialsById: (state) => (id) => {
        let allTutorials = state.tutorials.slice();
        return allTutorials[id];
    }
}

const mutations = {
    addNewTutorial: (state, tutorial) => {
        state.tutorials.push(tutorial)
    },

    deleteTutorialById: (state, id) => {
        state.tutorials.splice(id, 1);
    },

    updateTutorialById: (state, id, tutorial) => {
        state.tutorials[id] = tutorial;
    }
}
  

const tutorialStore = {
    state,
    getters,
    mutations
}

export default new Vuex.Store({
  modules: {
    tutorialStore
  }
})