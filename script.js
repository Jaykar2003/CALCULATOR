let equal_pressed=0;
//refer all buttons excluding AC and DEL
let button_input=document.querySelectorAll(".input-button");
//refer input,equal,clear,and ,erase
let input= document.getElementById("input");
let equal= document.getElementById("equal");
let clear= document.getElementById("clear");
let erase= document.getElementById("erase");
window.onload =() =>{
input.value="";
};
// access each class using foreach
// solve the user's input when  clicked on equal sign
button_input.forEach((button_class) =>{
    button_class.addEventListener("click",() =>{
        if(equal_pressed==1){
        input.value="";
        equal_pressed=0;
        }
        input.value+=button_class.value;

    });
});
equal.addEventListener("click",() =>{
equal_pressed=1;
let inp_val=input.value;
try{
    //evaluate user's input
    let  solution= eval(inp_val);
    //true for natural numbers
    //false for decimals
    if(Number.isInteger(solution)){
        input.value=solution;
    }
    else{
        input.value=solution.toFixed(2);

    }
}
    catch(err){
        //if users has entered invalid input
        alert("invalid input");

    }
});

// console.log(equal_pressed);
//CLEAR WHILE INPUT
clear.addEventListener("click",()=> {
   input.value=""; 

}); 
erase.addEventListener("click",()=>{
    input.value=input.value.substr(0,input.value.length-1);

});