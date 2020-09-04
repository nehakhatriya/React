function max(arr){
    var maxvalue=arr[0];
    try{
    arr.forEach(element => {
        if(element>maxvalue && typeof element === "number"){
           maxvalue=element}
        else{
            throw "array must contain only integer"
        }
    });
    return maxvalue;
   }
   catch(e){
     return e
   }
}

console.log(max([1,"neha",4,3]))
