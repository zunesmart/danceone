<template>

<body >
  
  <div class="container d-flex flex-column justify-content-center ">
         <navi-app></navi-app>
       <router-view></router-view>
    <div class="justify-content-center row-8 ">
    <div>Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by 
    <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/wanicon" title="wanicon">wanicon</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div></div>
    <p>A images have been searched under<i>Use and Reuse</i> and used for edu. purposes only!</p>
    <p><i><small class="red">Dispute a &copy;Copyright againt this students profile?</small></i> Contact <a href="mailto:jasonure@mail.weber.edu?Subject=Requsted%20&copy;Copy%20claim">Me</a></p>

      </div>
    </body>
  
</template>

<script>
import navi from './components/Navi.vue'
export default {
components: {
  naviApp: navi

}

}
</script>

<style>
html, body {
  background-color: black;
  color: white;
}
  .bgimg {
    background-position: center;
    height: 300px;
    background-image: url(./components/img/bgimg2.jpg);
    color: black;
    background-size:cover;
    background-repeat: no-repeat;
    opacity: .8;
    color: white;

  }
  .bgimg2 {
   
    background-position: center;
    background-size: cover;
    height: 300px;
    background-image: url(./components/img/spider.jpg);
    color: white;
    background-repeat: no-repeat;
    opacity:1;
    color: white;
    
    background-color: black;
 
  }

    .bgimg3 {
    background-position: center;
  
    height: 300px;
    background-image: url(./components/img/mw.jpg);
    color: white;
    background-repeat: no-repeat;
   
    color: white;

  }

  .red {
    color:crimson;
  }
  .blue{
    color: blue;
    font-size: .6em;
    background-color: yellow;
  
  }
  li {
    text-decoration: none;
    list-style-type: none;
  }
  .global {
    font-size: 18.5px;
    background-color: black;
    color:white;
  }
  .box {
    border: 1px dashed white;
  }
  p {
     font-family: 'Poiret One', cursive;
     font-weight: 150;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Poiret One', cursive;
  }
</style>
