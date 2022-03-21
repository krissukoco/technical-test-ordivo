import { createStore } from 'vuex';
import dummyUser from '../misc/dummyUser';
import dummyPost from '../misc/dummyPost';

export default createStore({
  state() {
    return {
      posts: [],
      user: dummyUser,
      users: [dummyUser],
    };
  },
  mutations: {
    // Add a post
    addPost(state, payload) {
      const l = state.posts.length + 1;
      const {
        text,
        user: { id },
      } = payload;
      if (text.length && id) {
        const newPost = {
          id: l,
          text,
          userId: id,
        };
        state.posts.push(newPost);
      }
    },

    // Delete a post
    deletePost(state, payload) {
      // payload = post id
      this.state.posts = state.posts.filter((p) => p.id !== payload);
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
