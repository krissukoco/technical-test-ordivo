<template>
  <h1>Hi, {{user.name}}</h1>
  <p>Post something today!</p>
  <NewPost />
  <h2 v-if="posts.length" class="postsBefore">Posts:</h2>
  <p v-else class="postsBefore">Start writing to get posts...</p>
  <div v-for="post in posts" :key="post.text">
    <PostItem :post="post"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import NewPost from '../components/NewPost.vue'
import PostItem from '../components/PostItem.vue'

export default {
  name: "Home",
  components: {
    NewPost,
    PostItem
  },
  computed: {
    ...mapState(['posts', 'users', 'user'])
  },
}
</script>

<style>
  .postsBefore {
    margin-top: 3rem;
  }
  
</style>