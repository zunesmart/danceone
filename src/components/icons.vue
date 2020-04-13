<template>

    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
  </ol> 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/bgimg.jpg" class="d-block w-100 " style="height: 550px" alt="cool background">
      <div class="carousel-caption d-none d-md-block black">
        <h5>Women, Men, and Dance</h5>
        <p>No battle of the sexes here. A great movement for both men women. The banner of this page also represents a womens movements dance concert</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/martinLutharCel.jpg" class="d-block w-100" style="height:550px" alt="martin luthar king and dance">
      <div class="carousel-caption d-none d-md-block black">
        <h5>Marting Luthar King Celebration</h5>
        <p>Martin Luthar King Celebration by all</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/indiandance.jpg" class="d-block w-100" style="height:550px" alt="indian dance">
      <div class="carousel-caption d-none d-md-block black">
        <h5>Indian Dance India Traditional</h5>
        <p>An aspiring group from india sharing their traditions</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/Native1.jpg" class="d-block w-100" style="height:550px" alt="native dance">
      <div class="carousel-caption d-none d-md-block black">
        <h5>Native American Dance</h5>
        <p>These dancers are just going! This was taken during Native Heritage month.</p>
      </div>
    </div>
     <div class="carousel-item">
      <img src="./img/haka1.jpg" class="d-block w-100" style="height:550px" alt="haka dance!">
      <div class="carousel-caption d-none d-md-block black">
        <h5>Haka Dance</h5>
        <p>The <i>classic</i> warrior dance!</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  
</template>

<script>
export default {
}
</script> 

<style scoped>
    .black{
        background-color: black;
        opacity: .8;
        border-radius: 50px;
    }
   .martin {
       height: 200px;
       max-width: 100%;
       width: 400px;
       background-repeat: none;
       background-image: url('img/martinLutharCel.jpg')
   }
   img {
       background-repeat: no-repeat;
   }
</style>
