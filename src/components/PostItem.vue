<template >
  <div class="container">
    <img :src="user.profilePicture" :alt="user.name" class="profilePicture"/>
    <div class="tweet">
      <h3 class="name">{{user.name}}</h3>
      <p>{{post.text}}</p>
    </div>
    <button @click="deletePost(post.id)" class="deleteBtn">Delete</button>
  </div>
</template>

<script>
// TODO: Get from state
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'PostItem',
  props: ['post'],
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['deletePost'])
  }
}
</script>

<style scoped>
  .deleteBtn {
    cursor: pointer;
    justify-content: flex-end;
    background-color: red;
    color: white;
    font-size: 0.8rem;
    border: none;
    padding: 0.5rem;
    height: fit-content;
  }
  .container {
    display: flex;
    flex-direction: row;
    padding: 2rem;
    border: 0.5px solid darkcyan;
    border-radius: 15px;
    margin: 3rem 0;
  }
  .profilePicture {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .name {
    text-align: left;
    font-size: 1.1rem;
  }
  .tweet {
    widtH: 90%;
    margin: 0 1rem;
  }
  .tweet > * {
    margin-bottom: 1rem;
  }
  .tweet h3 {
    padding: 0;
    margin: 0;
  }
  .tweet p {
    text-align: left;
  }
</style>