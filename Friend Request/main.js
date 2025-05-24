var isStatus = document.querySelector("h5")
var btn = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")
var flag = 0

btn.addEventListener("click",function(){
   if(flag === 0){
    isStatus.innerHTML="Friend"
    isStatus.style.color= "rgb(7,74,25)"
    btn.style.backgroundColor = "red"
    btn.innerHTML = "Remove Friend"
    flag=1
    }else{
        isStatus.innerHTML="Stranger"
        isStatus.style.color="red"
        btn.style.backgroundColor = "green"
    btn.innerHTML = "Add Friend"
    flag=0
    }
})

// removeFriend.addEventListener("click",function(){
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color="red"  
// })