<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的商城</div>
    </nav-bar>

    <!-- <div class="log">
      <div class="input">
        <span>账号</span><input type="text" placeholder="请输入账号"><br/>
        <span>密码</span>密码<input type="password" name="" id="" placeholder="请输入密码"><br/>
        <span>确认密码</span><input type="password" name="" id="" placeholder="再次输入密码">
      </div>
    </div> -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { 
    NavBar,
  },
  name:'',
  data(){
   return {
   }
  }
}
</script>

<style scoped>

.profile-nav{
  background-color: #ff8198;
  color: #fff;
}
.log{
  margin: 20px auto;
  border-radius: 10px;
  width: 85vw;
  height: 70vh;
  border: 3px solid #aaa;
}

</style>
