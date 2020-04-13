      <template> 
       <div class="btn-group btn-group-toggle" data-toggle="buttons" @click="location.reload(checked);">
            <router-link to="/" tag="li" class="btn btn-secondary active" 
            active-class="active" ><input type="radio" name="options" 
            id="option1" checked> Home</router-link><br>
            <router-link to="/about" tag="li" class="btn btn-secondary"  
            active-class="active"><input type="radio" name="options" 
            id="option2">About</router-link>
            <router-link to="comment" tag="li" class="btn btn-secondary" 
            active-class="active"><input type="radio" name="options" 
            id="option3">Comment</router-link>
       </div>  
        </template> 