<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/graduatecopy.svg" alt="" srcset="">
      <p>eTutor</p>
    </div>
    <div class="list">
      <ul>
        <li><a href="#">Overview</a></li>
         <li><a href="#">Profile</a></li>
          <li><a href="#">My Courses</a></li>
      </ul>
    </div>
    <div class="logout"> <p>logout</p></div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15%;
  padding: 40px;
  /* justify-content: space-between; */
  /* background-color: red; */

}
.logo{
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: baseline;
}
.logo p{
  margin-left: 3px;
}
.logo img{
  height: 30px;
  widows: 30px;
}
.list{
  margin-top: 100px;
}
.list ul{
  list-style: none;
}
.list ul li{
  margin-bottom: 10px;
}
.list ul li a{
  text-decoration: none;
  color: #fff;
}
.logout{
  margin-top: auto;
  color:#fff;
}
</style>
