<template >
  <div class="container">
    <div>
      <img :src="user.profilePicture" class="profilePicture"/>
    </div>
    <div class="inputContainer">
      <h4>{{user.name}}</h4>
      <textarea placeholder="Write something..." v-model="text"></textarea>
      <div class="inputBottom">
        <button @click="addPost({text:text, user:user})">POST</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "NewPost",
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations(['addPost'])
  },
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>
  h4{
    margin: 0;
    text-align: left;
  }
  textarea {
    border: none;
    outline: none;
    box-sizing: border-box;
    width: 100%;
    max-height: 40rem;
    height: max-content;
    overflow: visible;
    font-size: 1rem;
    resize: none;
    font-family: inherit;
    padding: 1rem 0.5rem;
    object-fit: contain;
    
  }
  button {
    cursor: pointer;
    background-color: #1DA1F2;
    border: none;
    border-radius: 15px;
    padding: 0.8rem 2rem;
    color: white;
    font-size: 1.1rem;
  }
  button:hover {
    background-color: darkcyan;
    transition: 0.3s ease-in-out;
  }
  .container {
    display: flex;
    flex-direction: row;
    border: 0.5px solid lightgrey;
    border-radius: 20px;
    padding: 2rem;
  }
  .inputContainer {
    margin: 0 1rem;
    width: 100%;
  }
  .inputContainer > * {
    margin-bottom: 0.6rem;
  }
  .inputBottom {
    display: flex;
    flex-direction: row-reverse;
  }
  .profilePicture {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

</style>