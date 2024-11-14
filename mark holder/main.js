// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
var pop1=document.getElementById("popup")
var pop2=document.getElementById("in")
var but =document.getAnimations("add")
var del =document.getElementById("cancle")
var add = document.getElementById("addbut")
var nam=document.getElementById("name")
var boo=document.getElementById("box")
var lng1=document.getElementById("lng1")
var lng2=document.getElementById("lng2")
var phy=document.getElementById("phy")
var che=document.getElementById("che")
var mat=document.getElementById("mat")
var but=document.getElementById("but")
var cla=document.getElementById("cla")
var spl=document.getElementById("spl")



function up(){
    pop1.style.display="block"
     pop2.style.display="block"
     
}



del.addEventListener("click",function(){
    pop1.style.display="none"
     pop2.style.display="none"

})
add.addEventListener("click",function(){
    pop1.style.display="none"
     pop2.style.display="none"
     var final=(parseFloat(phy.value)+parseFloat(che.value))/2+parseFloat(mat.value);
     var result=(final.toFixed(1))
     var total=(parseFloat(mat.value)+parseFloat(phy.value)+parseFloat(che.value)+parseFloat(lng1.value)+parseFloat(lng2.value)+parseFloat(spl.value))
    
     
        
    
     var div=document.createElement("div")
     div.setAttribute("class","exa")
     div.innerHTML=`  <h2>Name :  ${nam.value}</h2>
        <br>
        <h2>Class :  ${cla.value}</h2>
        <br>
    <h2>Language 1 :  ${lng1.value}</h2>
    <br>
   
    <h2>Language 2 :  ${lng2.value}</h2>
    <br>
    
    <h2>Phychsis :  ${phy.value}</h2>
    <br>
    
    <h2>Chemistry :  ${che.value}</h2>
    <br>
   
    <h2>Maths :  ${mat.value}</h2>
    <br>
    <h2> Spl Sub :  ${spl.value}</h2>
    <br>
    <br>
    <h2>The cut off : ${result}</h2>
     <h2>The Total Of :  ${total}</h2>
    
    
    <button class="but" id="del" onclick='delet(event)'>Delete</button>`
    boo.append(div)


})
function delet(event){
    event.target.parentElement.remove()

}
