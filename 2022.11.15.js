function createAndFillTwoDArray({rows, columns, defaultValue}){
    return Array.from({ length:rows }, () => (
        Array.from({ length:columns }, ()=> defaultValue)
     ))
  }
  
var list = createAndFillTwoDArray({rows:3, columns:9, defaultValue: 'példa szöveg'})


for(var i = 0; i < a[i].length; i++) {
    for(var z = 0; z < a.length; z++) {
      console.log(a[z][i]);
    }
  }




  
