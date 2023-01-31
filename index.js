
function calculator(e){
   document.getElementById("display").value += e
}
function display(){
    document.getElementById("display").value = eval( document.getElementById("display").value)
}
document.getElementById("clear").addEventListener('click',()=>{
    document.getElementById("display").value=""
})