<template>
<body >
        <div class="bgimg3 jusify-content-center">
    <h1>Just</h1>
    <transition name="one" type="transition" appear>
        <li><i>Slide to the right</i></li>
    </transition>       
    <transition name="two" type="transition" appear>
        <li><i>Slide to the Left</i></li>
    </transition>
    <transition name="three" type="transition" appear>
        <li><i>Criss Cross</i></li>
    </transition>
    <transition name="four" type="transition" appear>
         <li><i>Criss Cross</i></li>
    </transition>
    <transition name="five" type="transition" appear>
        <li><i>Clap your hands</i></li>
    </transition>
    </div>
    <div>
        <h2>Why Do I dance? What is dance for me?</h2>
        <p>At the beginning of the year I made this comment "dance makes me go from really finding the happiness of doing things and getting things done(edited). This plus of what I have learned has given me a better understanding of what dance is to me now. I don't change what I have simply believed at the beginning of this class, but I have a greater appreciation and understanding for dance in my life. 
            Every type of dance brings some sort of energy, even if it's not moving or just still. This energy can be transformed into goodness/goodwill, happiness, and even integrity. There are alot of movents in life whether it is in ourselves or in the people around us. 
            Dance accommodates everyone and everyone can dance and be happy because of it.  
        </p>
       
        
    </div>
    <div class="d-flex row justify-content-around mt-5">
        
        <div class="justify-content center sv2">
            <p class="top1">Goodwill</p>
        </div>
        <div class="justify-content center sv1">
            <p class="top1">Happiness</p>
        </div>
        <div class="justify-content center sv3">
            <p class="top1">Integrity</p>
        </div>
    </div>
    <hr>
    <div>
      <h2>Dance Class </h2>
      <h4><i style="color:yellow">Can you see Goodness, Happiness, and Integrity?</i></h4>
      <i><small class="red">Response #4</small></i><h5 class="red">How familiar were you with this form of dance before the class? After?
</h5>
      <p>"I signed up for zoom and missed my class so I wanted to try and hand dance. This is more difficult than I thought. I just did some basics and took me a while to find a good video that I could do something in. I never though hand movement in dancing could be so important as a genre. (pinching, snaping, flexing, and repeat.)"</p>
         <i><small class="red">Response #3</small></i><h5 class="red">Compare the two styles. What overlap did you see? </h5>
         <p>
          "These 2 dances seemed to be the same in a lot of ways. The ballet is more tailored to the strict classical style of modern classical. Now contemporary feels more like a yoga class or something like that. From both, I felt like the flow is very similar in many ways.
            One thing I noted is that both required a very good amount of flexibility and movement. it is easy to say when I had to either kick my feet up or move my arms up it felt the same.
            </p><p>
            The next thing I noticed is that both dances had the same feel for eloquent, smooth, and relaxing touch. Neither of them felt real jerky at all.
            </p><p>
            I would naturally tailor the contemporary since I am into fitness. Both seemed very fun and interesting."
        </p>
        
        <i><small class="red">Response #2</small></i><h5 class="red">What surprised you about the experience?</h5>
        <p>
          1. I didn't expect my body to hurt after class today, but it did. All that twisting the torso, bending the knees, twirling, and flapping our arms made me tired and sore. I thought it was really fun and enjoyed talking about where a lot of our American root of dancing has come from. 
          </p><h5 class="red">How familiar were you with the Elements of Dance before the class? After?</h5><p>
          2. The African dancing I thought would never really have a chance to learn to tell today. The movements that we did remind me of the "school of rock" with Jack Black for some reason and the tangoing we did, made me officially sore, but it was fun and exciting. I was happy about the guess and was happy/excited to tango even though I felt like I was getting a little over halfway through.  
          </p><h5 class="red">How did the experience connect with module 4 (Chapter 3)?</h5><p>
          3. A contrasting point I saw was that the African dancing was more movement up in there air and the tango was lower and structured to imitate sliding/hovering across the ground.
        </p>
        <i><small class="red">Response #1</small></i><h5 class="red">What surprised you about the experience?</h5>
        <p>
          
          1. I wasn't quite sure what to expect, to be honest. I was not sure if I was going to end up super sweaty and exhausted or just a brief session. There was a lot more dance and going over what and generally how we do it than I initially thought. 
        </p><h5 class="red">How familiar were you with the Elements of Dance before the class? After?</h5><p>
          
          2. I feel like I knew some things only really from what I have heard from friends and shows like Americans got talent, dancing with the stars, and so you think you can dance. I have little dance experience, I've done country dancing, waltz dancing, jungle dancing, and attempted to moonwalk a total of 3 times and failed every single time. 
                  </p><h5 class="red">How will you thread your learning this week throughout the course?</h5><p>

          3. I think throughout this course I will pick up things along the way to help me with the final response. I feel like I will be listening and learning for the most part and then when it comes down to the end I will make a final evaluation. 


        </p>
    </div>
 <hr>
 <i><small>*See "comment" for reasearch and thinking througout this course</small></i>
 <hr>
</body>  
</template>

<style>
.sv1 {
    background-image: url('./img/my-icons-collection/svg/002-dance.svg');
    background-position: center;
    height: 150px;
    width: 150px;
    color: white;
    background-size:contain;
    background-repeat: no-repeat;
    opacity: 1;
    background-color: white;
    
}
.sv2 {
    background-image: url('./img/my-icons-collection/svg/001-donation.svg');
    background-position: center;
    height: 150px;
    width: 150px;
    color: white;
    background-size:contain;
    background-repeat: no-repeat;
    opacity: 1;
    background-color: white;
}
.sv3 {
    background: url('./img/my-icons-collection/svg/003-solution.svg');
        background-position: center;
    height: 150px;
    width: 150px;
    color: white;
    background-size:contain;
    background-repeat: no-repeat;
    opacity: 1;
    background-color: white;
    
}
.top1 {
    margin-top: -35px;
    font-weight: bold;
    text-align: center;
}

.one-enter{
  opacity: 0;

}
.one-enter-active{
  transition: opacity 2s;
}
.two-enter{
  opacity: 0;

}
.two-enter-active{
  transition: opacity 3s;
}
.three-enter{
  opacity: 0;

}
.three-enter-active{
  transition: opacity 5s;
}
.four-enter{
  opacity: 0;

}
.four-enter-active{
  transition: opacity 6s;
}
.five-enter{
  opacity: 0;

}
.five-enter-active{
  transition: opacity 8s;
}



</style>