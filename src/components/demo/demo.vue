<template>
<div>
    <!-- <div>
        <ul>
            <li class="lis">
                <div>移入</div>
                <div class="div" @click="page">
                    haver显示
                    
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            
        </ul>
        
    </div> -->

    <!-- 嵌套路由 -->
      <p>
    <router-link to="/user/foo">/user/foo</router-link>
    <router-link to="/user/foo/profiles">/user/foo/profile</router-link>
    <router-link to="/user/foo/posts">/user/foo/posts</router-link>
  </p>
  <router-view></router-view>

</div>
</template>

<script>
// const User={
//     template:`
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//     `
// }
// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }
    export default {
   
        data(){
            return{
                
            }
           
        },
    
        methods:{
             page(){
            this.$router.push({path:'echart'})
        },

        },
  

    }
</script>

<style scoped>
.lis{
    width: 200px;
    height: 30px;
    background: blue;
    position: relative;
    
}
.lis .div{

    background: red;
    /* float: right; */
    position: absolute;
    width: 200px;
    height: 200px;
    /* display: inline-block; */
    display: none;
    left:200px;
    
}
.lis div{
   display: inline-block;
}
.lis:hover .div{
     display: inline-block;
}
</style>