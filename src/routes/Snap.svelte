<script>
// @ts-nocheck
import { count } from './stores.js';
let countValue;
count.subscribe(value => {
	 countValue = value;
     if (countValue == 101){
            alert("Hola");
            count.set(0);
    }
});
</script>