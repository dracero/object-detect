<script>

// @ts-nocheck
import { count, image } from './stores.js';
let countValue;
let imageValue;
count.subscribe(async value => {
	 countValue = value;
     if (countValue == 101){
            count.set(0);
    }
//acá ya tengo la imagen lista para ser llevada a la base de datos    
image.subscribe(async value => {
    imageValue = value;
});
console.log(imageValue);
});
</script>

