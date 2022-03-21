<template>
  <span class="navContainer">
    <div class="userIcon">
      <img :src="user.profilePicture" class="profilePicture"/>
      <p>{{ user.name }}</p>
    </div>
  </span>
</template>

<script>
import dummyUser from '../misc/dummyUser'

export default {
  data() {
    return {
      user: dummyUser
    }
  }
}
</script>

<style>
.navContainer {
  background-color: whitesmoke;
  display: flex;
  max-width: 100%;
  padding: 1rem 0;
}

.userIcon {
  margin: 0 auto;
  margin-right: 10rem;
  display: flex;
  flex-direction: column;
}

.userIcon p {
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem 0;
}

.profilePicture {
  height:4rem;
  width: 4rem;
  border-radius: 50%;
  object-fit: cover;

}
  
</style>