<template>
<div class="container">
    <div class="see">
     <div class="heading"> <img src="../assets/graduate.svg" alt="" srcset=""><h4>eTutor</h4> </div>
 <label for="email">Email</label>
  <input type="email" v-model="email" placeholder="Enter your e-mail..."/>
  <label for="password">Password</label>
  <input type="password" v-model="password" placeholder="Enter your password"/>
  <button type="submit" @click="login" id="btn">Login</button>
  <p class="noAccn">Don't have an account?<a href="http://localhost:8080/register">signup</a></p>
    </div>
</div>
</template>

<script>
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const response = await AuthService.login({
        Email: this.email,
        Password: this.password,
      });
      console.log(response.data);
    },
  },
};

</script>

<style scoped>
.container{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.see{
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  min-height: 50px;
  min-width: 100px;
   padding: 5%;
  border-radius: 10px;
}
.heading{
  text-align: center;
  color: #010116;
  margin-bottom: 20px;
}
.noAccn{
    color: rgb(1, 1, 22);
}
input[type = "text"],input[type="password"],input[type="email"]
{
  width: 100%;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
}
label{
  margin-bottom: 5px;
  align-self: flex-start;
}
#btn{
  border-radius: 6px;
  height: 30px;
  width: 100px;
 margin-top: 20px;
 padding: auto;
 align-self: flex-end;
 color: white;
 background-color: hsl(36, 84%, 40%);
 margin-bottom: 30px;
}
</style>
