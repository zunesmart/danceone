<template>
  <div >
        <div class="bgimg2 jusify-content-center">
    <transition
    name="fade" type="transition" appear>
    <h1>Just Dance</h1> 
    </transition> 
    <li><i>Twist</i></li>
    <li><i>Kneel</i></li>
    <li><i>backflip</i></li>
    <li><i>bend</i></li>
    <li><i>crouch</i></li>
    <li><i>Handwave</i></li>
    <li><i>Lay down</i></li>
    </div>
    <div class="d-flex justify-content-center align-items-center flex-column p-3 box">
    <h2>Why Do Humans Dance?</h2>
    <hr>
    <h3>These are some basic reasons</h3>
    <ul>
      <li>&#8669; Personal, Family, and Cultural Aesthetics</li>
      <li>&#8669; Freedom</li>
      <li>&#8669; Expression</li>
      <li>&#8669; Passion</li>
      <li>&#8669; Love</li>
      <li>&#8669; Respect</li>
      <li>&#8669; Rights</li>
      <li>&#8669; To live life at the fullest</li>
    </ul> 
    <hr>
  </div>
    <small class="red"><i>Compiled explanation By: Jason Ure August 11, 2020</i></small>
    <i><small>*an simple direct to "why do humans dance?"</small></i>
    <h3>For Expression and Freedom</h3>
    
    <p>People over the decades and centuries have made great way into dance by expression
      and freedom. A good example to look out is the tribes of the native americans and how they dance. They have shown great love for their ancestors
      and family by religious/ancestry dancing. This was passed down generation to generation and still is dominit in the indian culture today. Another example of
      expression and freedom in dance is culture dance. You can really tell how people behave or act by the type dance they do, for example
      african dance (which later transpired jazz dance in america). The light and spirit of afican dance just shows how moving and uplifting their culture is. I have a firm belief that dance has played a huge role
      in their freedom, personality, and integrity here in america or own native country. Naturally there are a lot of examples of movements in dance
      that transform actual movements in this political world.
    </p>
    <icon-app></icon-app>
  </div>
    
  
</template>

<script>
import icon from './icons.vue'
export default {
  components: {
    iconApp: icon
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;

}
.fade-enter-active{
  transition: opacity 4s;
}
.fade-leave{
  opacity: 6s;
}
.fade-leave-active{
  transition: opacity 4s;
  opacity: 0;
}

</style>
