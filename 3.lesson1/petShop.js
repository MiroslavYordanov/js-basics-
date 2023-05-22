function pets(input){
   let dogFood = Number (input[0]);
   let catFood = Number (input[1]);

   let priceDogFood = dogFood * 2.50;
   let priceCatFood = catFood * 4;
   let sum = priceDogFood + priceCatFood;
   console.log(`${sum} lv.`)

}
pets([5, 4])