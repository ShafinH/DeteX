<template>
<!--
  <img :src="require('@/assets/Logo-home.png')" class="home-logo"/>


  <router-link to="/diagnose" class="nav-item1-box"><div class="nav-item1">Diagnose</div></router-link>

  <router-link to="/past_diagnoses" class="nav-item2-box"><div class="nav-item2">Past Diagnoses</div></router-link>

 <router-link to="/symptoms" class="nav-item3-box">
 <div class="nav-item3">Symptoms</div>
 </router-link> -->

 <img :src="require('@/assets/Footer.png')" class="footer">
 
  <div class="detex">DeteX</div>

  <div class="caption">
    Improving the 
    medical industry
  </div>

  <div class="caption1">with Machine Learning</div>


<div class="home-button">

  <router-link to="/diagnose" class="home-button-text">
    Get Started
    </router-link>

  </div>

  <img :src="require('@/assets/home-image.png')" class="home-image"/>
  <!--<div class="footer"></div>-->

 
  
</template>

<script>
export default {
  
}
</script>


<style >

.home-image {
  position: absolute;
  width: 491px;
  height: 491px;
  left: 950px;
  top: 239px;
}
.home-logo {
  position: absolute;
  width: 72px;
  height: 72px;
  left: 146px;
  top: 55px;
}

.detex {
  position: absolute;
  width: 232px;
  height: 91px;
  left: 146px;
  top: 292px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
  line-height: 91px;
}

.caption {
  position: absolute;
  width: 477px;
  height: 37px;
  left: 146px;
  top: 429px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
  /* identical to box height */
  color: #525252;
}
.caption1 {
  position: absolute;
  width: 477px;
  height: 37px;
  left: 82px;
  top: 466px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
  /* identical to box height */
  color: #525252;
}

.home-button{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;

  position: absolute;
  width: 240px;
  height: 73px;
  left: 146px;
  top: 630px;

  background: linear-gradient(270deg, #10865C 0%, #32D399 100%);
  border-radius: 15px;
}

.home-button:hover{
  transform: scale(1.05);
}

.home-button-text {
  position: static;
  width: 210px;
  height: 43px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 43px;
  /* identical to box height */
  color: #FFFFFF;
}

  a {
  text-decoration: none;
}
.nav-item0-box {
  position: absolute;
  width: 115px;
  height: 29px;
  left: 729px;
  top: 68px;
  }
  .nav-item0{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
  }
  .nav-item1-box{
  position: absolute;
  width: 186px;
  height: 29px;
  left: 876px;
  top: 68px;
  } 

  .nav-item1{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
  }

  .nav-item2-box {
  position: absolute;
  width: 131px;
  height: 29px;
  left: 1094px;
  top: 68px;
  }

  .nav-item2{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
  }

  .nav-item3-box{
  position: absolute;
  width: 54px;
  height: 29px;
  left: 1260px;
  top: 68px;
  }

  .nav-item3{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
  }

  router-link {
    text-decoration: none;
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }
  
</style>

