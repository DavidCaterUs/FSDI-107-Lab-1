module.exports = {

  sayHello : function(name){
     console.log("Hello:  " + name )
  },

 smaller:function(num1,num2){

    if (num1 < num2) return num1;
    else return num2;



},
  greater: function (num1, num2){
  if (num1 > num2 ) return num1;
  else return num2 ;
},

  division: function(number, by ){

  if (by == 0){
    console.log("Error, you should not divided by 0");
    return 0;
  }

  var res = number/ by;
  return res.toFixed(2);
},

 isEven: function (number) {
   var res = number % 2;
   if (res == 0 ) return true;

   return false;
 }


};
